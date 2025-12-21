<?php

require_once __DIR__ . '/../core/Controller.php';
require_once __DIR__ . '/../middleware/auth.php';

class User extends Controller {
    public function profile() {
        // This endpoint requires authentication
        requireAuth();
        
        // TODO: Fetch user from database
        return $this->success([
            'id' => 1,
            'email' => 'user@example.com',
            'name' => 'John Doe'
        ]);
    }

    public function update() {
        requireAuth();
        $data = $this->getRequestData();
        
        // TODO: Update user in database
        return $this->success($data, 'User updated successfully');
    }
}

