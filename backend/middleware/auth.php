<?php

function requireAuth() {
    // Check for authentication token
    $headers = getallheaders();
    $token = $headers['Authorization'] ?? $_SERVER['HTTP_AUTHORIZATION'] ?? null;

    if (!$token) {
        http_response_code(401);
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }

    // Remove 'Bearer ' prefix if present
    $token = str_replace('Bearer ', '', $token);

    // TODO: Implement actual token validation
    // For now, this is a placeholder
    return $token;
}

function optionalAuth() {
    $headers = getallheaders();
    $token = $headers['Authorization'] ?? $_SERVER['HTTP_AUTHORIZATION'] ?? null;
    
    if ($token) {
        return str_replace('Bearer ', '', $token);
    }
    
    return null;
}

