<?php

class Router {
    private $routes = [];
    private $middlewares = [];

    public function get($path, $handler) {
        $this->addRoute('GET', $path, $handler);
    }

    public function post($path, $handler) {
        $this->addRoute('POST', $path, $handler);
    }

    public function put($path, $handler) {
        $this->addRoute('PUT', $path, $handler);
    }

    public function delete($path, $handler) {
        $this->addRoute('DELETE', $path, $handler);
    }

    private function addRoute($method, $path, $handler) {
        $this->routes[] = [
            'method' => $method,
            'path' => $path,
            'handler' => $handler
        ];
    }

    public function use($middleware) {
        $this->middlewares[] = $middleware;
    }

    public function dispatch() {
        $method = $_SERVER['REQUEST_METHOD'];
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $uri = str_replace('/backend', '', $uri); // Remove /backend prefix if present

        foreach ($this->routes as $route) {
            if ($route['method'] === $method && $this->matchPath($route['path'], $uri)) {
                // Run middlewares
                foreach ($this->middlewares as $middleware) {
                    $middleware();
                }

                // Execute handler
                if (is_callable($route['handler'])) {
                    return call_user_func($route['handler']);
                } elseif (is_string($route['handler'])) {
                    return $this->callController($route['handler']);
                }
            }
        }

        http_response_code(404);
        return json_encode(['error' => 'Not Found']);
    }

    private function matchPath($pattern, $path) {
        $pattern = preg_replace('/\{[^}]+\}/', '([^/]+)', $pattern);
        $pattern = '#^' . $pattern . '$#';
        return preg_match($pattern, $path);
    }

    private function callController($handler) {
        list($controller, $method) = explode('@', $handler);
        $controllerFile = __DIR__ . '/../api/' . $controller . '.php';
        
        if (file_exists($controllerFile)) {
            require_once $controllerFile;
            if (class_exists($controller) && method_exists($controller, $method)) {
                $instance = new $controller();
                return $instance->$method();
            }
        }
        
        http_response_code(404);
        return json_encode(['error' => 'Controller not found']);
    }
}

