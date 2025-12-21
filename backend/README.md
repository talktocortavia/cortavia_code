# Backend API

PHP 8+ REST API with MVC-style structure.

## Structure

- `api/` - API endpoint controllers
- `config/` - Configuration files (database, environment)
- `core/` - Core classes (Router, Controller, Response)
- `middleware/` - Middleware functions (auth, etc.)
- `index.php` - API entry point

## API Endpoints

### Health
- `GET /api/health` - Health check

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### User
- `GET /api/user/profile` - Get user profile (requires auth)
- `PUT /api/user/update` - Update user (requires auth)

## Running

```bash
# Development server
php -S localhost:8000 index.php

# Or with Apache/Nginx
# Point document root to this directory
```

## Adding New Endpoints

1. Create controller in `api/` directory
2. Add route in `index.php`
3. Use `Controller` base class for JSON responses

Example:
```php
// api/example.php
class Example extends Controller {
    public function get() {
        return $this->success(['message' => 'Hello']);
    }
}

// index.php
$router->get('/api/example', function() {
    require_once __DIR__ . '/api/example.php';
    $example = new Example();
    return $example->get();
});
```

