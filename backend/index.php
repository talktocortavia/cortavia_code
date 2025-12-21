<?php

// Enable CORS for development
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Load environment variables
require_once __DIR__ . '/config/env.php';

// Load core files
require_once __DIR__ . '/core/Router.php';
require_once __DIR__ . '/core/Controller.php';
require_once __DIR__ . '/core/Response.php';

// Initialize router
$router = new Router();

// API Routes
$router->get('/api/health', function() {
    require_once __DIR__ . '/api/health.php';
    $health = new Health();
    return $health->check();
});

$router->post('/api/auth/login', function() {
    require_once __DIR__ . '/api/auth.php';
    $auth = new Auth();
    return $auth->login();
});

$router->post('/api/auth/logout', function() {
    require_once __DIR__ . '/api/auth.php';
    $auth = new Auth();
    return $auth->logout();
});

$router->get('/api/user/profile', function() {
    require_once __DIR__ . '/api/user.php';
    $user = new User();
    return $user->profile();
});

$router->put('/api/user/update', function() {
    require_once __DIR__ . '/api/user.php';
    $user = new User();
    return $user->update();
});

// Dispatch request
echo $router->dispatch();

