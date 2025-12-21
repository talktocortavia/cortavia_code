<?php

class Controller {
    protected function json($data, $statusCode = 200) {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        return json_encode($data);
    }

    protected function success($data = null, $message = 'Success') {
        return $this->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ]);
    }

    protected function error($message = 'Error', $statusCode = 400) {
        return $this->json([
            'success' => false,
            'message' => $message
        ], $statusCode);
    }

    protected function getRequestData() {
        $data = json_decode(file_get_contents('php://input'), true);
        return $data ?: $_POST;
    }
}

