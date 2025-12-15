<?php 
// Set cache to expire after 3 minutes (180 seconds)
header('Cache-Control: max-age=180, must-revalidate');
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 180) . ' GMT');
header('Pragma: cache');

require_once 'config.php'; 
?>
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=180, must-revalidate">
    <meta http-equiv="Expires" content="<?php echo gmdate('D, d M Y H:i:s', time() + 180) . ' GMT'; ?>">
    
    <!-- SEO Meta Tags for ChatGPT and Search Engines -->
    <meta name="description" content="CORTAVIA AI Solutions - Transform your business with intelligent AI automation, custom model development, and enterprise-grade solutions. Specializing in AI chatbots, process automation, and business intelligence.">
    <meta name="keywords" content="AI solutions, AI automation, chatbot, machine learning, business intelligence, AI consulting, enterprise AI, LangChain, GPT-4, Llama 3, MCP, Model Context Protocol">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="CORTAVIA AI Solutions">
    <meta name="language" content="English">
    
    <!-- Open Graph for better social/crawler understanding -->
    <meta property="og:title" content="<?php echo isset($pageTitle) ? $pageTitle . ' - ' : ''; ?><?php echo SITE_NAME; ?>">
    <meta property="og:description" content="Transform your business with intelligent AI automation, custom model development, and enterprise-grade solutions designed for the future.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo SITE_URL . $_SERVER['REQUEST_URI']; ?>">
    <meta property="og:site_name" content="<?php echo SITE_NAME; ?>">
    <meta property="og:image" content="<?php echo SITE_URL; ?>/images/cortavia_logo.png">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo isset($pageTitle) ? $pageTitle . ' - ' : ''; ?><?php echo SITE_NAME; ?>">
    <meta name="twitter:description" content="Transform your business with intelligent AI automation and enterprise-grade solutions.">
    <meta name="twitter:image" content="<?php echo SITE_URL; ?>/images/cortavia_logo.png">
    
    <title><?php echo isset($pageTitle) ? $pageTitle . ' - ' : ''; ?><?php echo SITE_NAME; ?></title>
    <link rel="icon" type="image/png" href="images/logo.png">
    <link rel="stylesheet" href="styles.css?v=<?php echo ASSETS_VERSION; ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <!-- Structured Data for Search Engines -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "<?php echo SITE_NAME; ?>",
      "url": "<?php echo SITE_URL; ?>",
      "logo": "<?php echo SITE_URL; ?>/images/cortavia_logo.png",
      "description": "Transform your business with intelligent AI automation, custom model development, and enterprise-grade solutions.",
      "email": "<?php echo SITE_EMAIL; ?>",
      "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "<?php echo SITE_EMAIL; ?>",
        "contactType": "Customer Service"
      },
      "offers": {
        "@type": "Service",
        "serviceType": "AI Solutions",
        "description": "AI automation, chatbots, process automation, and business intelligence services"
      }
    }
    </script>
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
            <div class="nav-actions">
                <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                    <i class="fa-solid fa-sun sun-icon"></i>
                    <i class="fa-solid fa-moon moon-icon"></i>
                </button>
                <button class="nav-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    </header>
    <main class="main-content">

