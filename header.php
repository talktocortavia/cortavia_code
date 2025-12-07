<?php 
// Set cache to expire after 3 minutes (180 seconds)
header('Cache-Control: max-age=180, must-revalidate');
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 180) . ' GMT');
header('Pragma: cache');

require_once 'config.php'; 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=180, must-revalidate">
    <meta http-equiv="Expires" content="<?php echo gmdate('D, d M Y H:i:s', time() + 180) . ' GMT'; ?>">
    <title><?php echo isset($pageTitle) ? $pageTitle . ' - ' : ''; ?><?php echo SITE_NAME; ?></title>
    <link rel="icon" type="image/png" href="images/logo.png">
    <link rel="stylesheet" href="styles.css?v=<?php echo ASSETS_VERSION; ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="nav container">
            <div class="nav-brand">
                <a href="index.php" class="logo-link">
                    <img src="images/logo.png" alt="CORTAVIA" class="logo-img" onerror="this.style.display='none';">
                    <span class="logo-text">CORTAVIA</span>
                </a>
            </div>
            <ul class="nav-menu">
                <li><a href="index.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : ''; ?>">Home</a></li>
                <li><a href="services.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'services.php' ? 'active' : ''; ?>">Services</a></li>
                <li><a href="contact.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'contact.php' ? 'active' : ''; ?>">Contact</a></li>
            </ul>
            <button class="nav-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>
    <main class="main-content">

