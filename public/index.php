<?php
// Serve React app - all routes go to index.html
// This file handles routing for React Router
$indexPath = __DIR__ . '/index.html';

// Check if React build exists (index.html from Vite build)
if (file_exists($indexPath) && filesize($indexPath) > 1000) {
    // Serve the React app
    readfile($indexPath);
} else {
    // Fallback: show placeholder if build not found
    http_response_code(200);
    header('Content-Type: text/html');
    readfile($indexPath); // Will show placeholder HTML
}

