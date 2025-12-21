<?php

require_once __DIR__ . '/../core/Controller.php';

class Health extends Controller {
    public function check() {
        return $this->success([
            'status' => 'ok',
            'timestamp' => date('Y-m-d H:i:s'),
            'php_version' => PHP_VERSION
        ]);
    }
}

