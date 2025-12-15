<?php 
$pageTitle = 'Services';
require_once 'header.php'; 
?>

<section class="page-header">
    <div class="container">
        <h1>Our Services</h1>
        <p>Comprehensive AI solutions tailored to your business needs</p>
    </div>
</section>

<section class="services-3d-carousel-section">
    <div class="container">
        <div class="carousel-wrapper">
            <div class="carousel-container">
                <div class="carousel-track" id="servicesCarousel">
                    <div class="carousel-item" data-service="assist">
                        <div class="carousel-card">
                            <div class="carousel-icon">🤖</div>
                            <h3>Cortavia Assist</h3>
                            <p>AI Experience & Support Platform</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-service="evaluate">
                        <div class="carousel-card">
                            <div class="carousel-icon">📊</div>
                            <h3>Cortavia Evaluate</h3>
                            <p>AI Academic & Performance Evaluation</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-service="automate">
                        <div class="carousel-card">
                            <div class="carousel-icon">⚡</div>
                            <h3>Cortavia Automate</h3>
                            <p>AI Business Process Automation</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-service="people">
                        <div class="carousel-card">
                            <div class="carousel-icon">👥</div>
                            <h3>Cortavia People</h3>
                            <p>End-to-End HR Intelligence Platform</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-controls">
                <button class="carousel-btn prev-btn" id="prevBtn">
                    <i class="fa-solid fa-square-caret-left"></i>
                </button>
                <button class="carousel-btn next-btn" id="nextBtn">
                    <i class="fa-solid fa-square-caret-right"></i>
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Service Content Tile Card - Shows selected service dynamically -->
<section class="service-content-section">
    <div class="container">
        <div id="serviceContentCard" class="service-content-tile">
            <div class="service-content-tile-inner">
                <div class="service-tile-header">
                    <span class="service-tile-icon" id="serviceTileIcon">🤖</span>
                    <h2 id="serviceTileTitle">Cortavia Assist</h2>
                </div>
                <p class="service-tile-subtitle" id="serviceTileSubtitle">AI Experience & Support Platform</p>
                <p class="service-tile-description" id="serviceTileDescription">
                    24×7 intelligent support for customers, vendors, and internal teams. Instantly resolves queries, provides real-time updates, analyses sentiment, and integrates seamlessly with CRM and ERP systems to reduce workload and operational costs.
                </p>
                <div class="service-tile-features" id="serviceTileFeatures">
                    <ul class="service-features-list">
                        <li><strong>Comprehensive Knowledge Integration</strong> - Harnesses internal documents, knowledge bases, and web resources to provide accurate, up-to-date information</li>
                        <li><strong>Bank-Level Security</strong> - Enterprise-grade secure data ingestion and processing with end-to-end encryption and compliance with industry standards</li>
                        <li><strong>Intelligent Learning</strong> - Adaptive AI that learns user behavior and context patterns to deliver increasingly personalized responses</li>
                        <li><strong>Perfect for Teams</strong> - Ideal for internal support, training, and knowledge management across departments</li>
                        <li><strong>Multi-Language Support</strong> - Communicate in multiple languages with native-level understanding and response quality</li>
                        <li><strong>Analytics Dashboard</strong> - Track usage patterns, identify knowledge gaps, and measure ROI with comprehensive analytics</li>
                    </ul>
                </div>
                <div class="service-tile-benefits" id="serviceTileBenefits">
                    <h4>Key Benefits:</h4>
                    <ul class="service-benefits-list">
                        <li>Reduce support ticket volume by up to 70%</li>
                        <li>Instant access to organizational knowledge 24/7</li>
                        <li>Improved employee onboarding and training efficiency</li>
                        <li>Centralized knowledge management system</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>Need a Custom Solution?</h2>
            <p>We specialize in creating AI solutions that fit your unique business requirements.</p>
            <a href="contact.php" class="btn btn-primary btn-large">Get in Touch</a>
        </div>
    </div>
</section>

<?php require_once 'footer.php'; ?>

