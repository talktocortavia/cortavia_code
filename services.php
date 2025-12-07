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
                    <div class="carousel-item" data-service="chatbot">
                        <div class="carousel-card">
                            <div class="carousel-icon">💬</div>
                            <h3>AI Chatbot</h3>
                            <p>Enterprise Knowledge Assistant</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-service="support">
                        <div class="carousel-card">
                            <div class="carousel-icon">🎧</div>
                            <h3>Customer Support</h3>
                            <p>24/7 Intelligent Assistance</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-service="evaluator">
                        <div class="carousel-card">
                            <div class="carousel-icon">📝</div>
                            <h3>AI Evaluator</h3>
                            <p>Intelligent Performance Analysis</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-service="automation">
                        <div class="carousel-card">
                            <div class="carousel-icon">⚡</div>
                            <h3>Process Automation</h3>
                            <p>Streamline Your Operations</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-service="research-agents">
                        <div class="carousel-card">
                            <div class="carousel-icon">🔬</div>
                            <h3>AI Research Agents</h3>
                            <p>Autonomous Intelligence Systems</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-service="interview-evaluator">
                        <div class="carousel-card">
                            <div class="carousel-icon">🎯</div>
                            <h3>Interview Evaluators</h3>
                            <p>Intelligent Candidate Assessment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-controls">
                <button class="carousel-btn prev-btn" id="prevBtn">‹</button>
                <button class="carousel-btn next-btn" id="nextBtn">›</button>
            </div>
        </div>
    </div>
</section>

<!-- Service Content Tile Card - Shows selected service dynamically -->
<section class="service-content-section">
    <div class="container">
        <div id="serviceContentCard" class="service-content-tile">
            <div class="service-content-tile-inner">
                <div class="service-tile-icon" id="serviceTileIcon">💬</div>
                <h2 id="serviceTileTitle">AI Chatbot</h2>
                <p class="service-tile-subtitle" id="serviceTileSubtitle">Enterprise Knowledge Assistant</p>
                <p class="service-tile-description" id="serviceTileDescription">
                    Our AI Chatbot serves as your organization's intelligent knowledge assistant, capable of understanding 
                    complex queries and providing accurate, context-aware responses. Built with enterprise security standards, 
                    it seamlessly integrates with your existing systems and learns from every interaction to continuously improve.
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

