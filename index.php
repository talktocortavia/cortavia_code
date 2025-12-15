<?php 
$pageTitle = 'Home';
require_once 'header.php'; 
?>

<section class="hero">
    <canvas class="neural-canvas" id="neuralCanvas"></canvas>
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">CORTAVIA<br>AI Solutions</h1>
                <p class="hero-tagline"><?php echo SITE_TAGLINE; ?></p>
                <p class="hero-description">
                    Transform your business with intelligent AI automation, custom model development, 
                    and enterprise-grade solutions designed for the future.
                </p>
                <div class="hero-buttons">
                    <a href="services.php" class="btn btn-primary">Our Services</a>
                    <a href="contact.php" class="btn btn-secondary">Get Started</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="images/cortavia_logo.png" alt="CORTAVIA AI Solutions" class="hero-logo">
            </div>
        </div>
    </div>
</section>

<section class="features" id="what-we-do">
    <div class="container">
        <h2 class="section-title">What We Do</h2>
        <div class="interactive-features">
            <div class="features-list">
                <div class="feature-item active" data-target="assist">
                    <div class="feature-icon-wrapper">
                        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>Cortavia Assist</h3>
                </div>
                <div class="feature-item" data-target="evaluate">
                    <div class="feature-icon-wrapper">
                        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3V21H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 10V3H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>Cortavia Evaluate</h3>
                </div>
                <div class="feature-item" data-target="automate">
                    <div class="feature-icon-wrapper">
                        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>Cortavia Automate</h3>
                </div>
                <div class="feature-item" data-target="people">
                    <div class="feature-icon-wrapper">
                        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>Cortavia People</h3>
                </div>
            </div>
            <div class="features-display">
                <div class="feature-display-content active" id="assist">
                    <div class="display-visual automation-visual">
                        <div class="visual-icon-svg">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="visual-circle"></div>
                    </div>
                    <h3>Cortavia Assist</h3>
                    <p>24×7 intelligent support for customers, vendors, and internal teams. Instantly resolves queries, provides real-time updates, analyses sentiment, and integrates seamlessly with CRM and ERP systems to reduce workload and operational costs.</p>
                    <a href="services.php" class="btn btn-primary btn-sm">Learn More</a>
                </div>
                <div class="feature-display-content" id="evaluate">
                    <div class="display-visual models-visual">
                        <div class="visual-icon-svg">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3V21H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 10V3H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="visual-circle"></div>
                    </div>
                    <h3>Cortavia Evaluate</h3>
                    <p>AI-powered system that generates assessments and evaluates performance for students and professionals using custom syllabi, content, and criteria. Delivers objective scoring, progress tracking, and bias-free insights for education and corporate environments.</p>
                    <a href="services.php" class="btn btn-primary btn-sm">Learn More</a>
                </div>
                <div class="feature-display-content" id="automate">
                    <div class="display-visual chatbots-visual">
                        <div class="visual-icon-svg">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="visual-circle"></div>
                    </div>
                    <h3>Cortavia Automate</h3>
                    <p>End-to-end automation of documents, workflows, approvals, and compliance using AI and RPA. Improves operational efficiency, accuracy, and real-time visibility across business processes while reducing manual work and operational costs.</p>
                    <a href="services.php" class="btn btn-primary btn-sm">Learn More</a>
                </div>
                <div class="feature-display-content" id="people">
                    <div class="display-visual bi-visual">
                        <div class="visual-icon-svg">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="visual-circle"></div>
                    </div>
                    <h3>Cortavia People</h3>
                    <p>A unified AI solution covering interviews, hiring, skill assessment, performance reviews, promotions, and workforce analytics, enabling fair and data-driven HR decision-making across the entire employee lifecycle.</p>
                    <a href="services.php" class="btn btn-primary btn-sm">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="technologies-section">
    <div class="container">
        <h2 class="tech-title">Built with Advanced Technologies</h2>
        <p class="tech-description">
            We leverage the most advanced frameworks and models to build agentic systems that are robust, scalable, and intelligent.
        </p>
        <div class="tech-layout">
            <div class="tech-content">
                <div class="tech-list">
                    <div class="tech-item">
                        <div class="tech-item-icon"><img src="images/tile_icons/langchain.png" alt="LangChain"></div>
                        <div class="tech-item-text">
                            <h4>LangChain & LangGraph</h4>
                            <p>Orchestrating complex chains and stateful agents for sophisticated reasoning.</p>
                        </div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-item-icon"><img src="images/tile_icons/gpt.png" alt="GPT-4"></div>
                        <div class="tech-item-text">
                            <h4>State-of-the-Art ML Models</h4>
                            <p>Utilizing GPT-4, Claude 3.5, and Llama 3 for world-class intelligence.</p>
                        </div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-item-icon"><img src="images/tile_icons/llama.png" alt="Llama"></div>
                        <div class="tech-item-text">
                            <h4>Agentic Systems</h4>
                            <p>Autonomous agents capable of planning, tool use, and multi-step problem solving.</p>
                        </div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-item-icon"><img src="images/tile_icons/mcp.png" alt="MCP"></div>
                        <div class="tech-item-text">
                            <h4>MCP (Model Context Protocol)</h4>
                            <p>Optimized context management for accurate and cost-effective responses.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tech-visuals">
                <div class="tech-grid-visual">
                    <!-- Technology Logos -->
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/langchain.png" alt="LangChain" class="tech-logo-icon">
                        <span>LangChain</span>
                    </div>
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/langgraph.png" alt="LangGraph" class="tech-logo-icon">
                        <span>LangGraph</span>
                    </div>
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/llama.png" alt="Llama 3" class="tech-logo-icon">
                        <span>Llama 3</span>
                    </div>
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/gpt.png" alt="GPT-4" class="tech-logo-icon">
                        <span>GPT-4</span>
                    </div>
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/mcp.png" alt="MCP" class="tech-logo-icon">
                        <span>MCP</span>
                    </div>
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/gemini.png" alt="Gemini" class="tech-logo-icon">
                        <span>Gemini</span>
                    </div>
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/gcp.png" alt="Google Cloud" class="tech-logo-icon">
                        <span>Google Cloud</span>
                    </div>
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/aws.png" alt="AWS" class="tech-logo-icon">
                        <span>AWS</span>
                    </div>
                    <div class="tech-logo-card">
                        <img src="images/tile_icons/azure.png" alt="Azure" class="tech-logo-icon">
                        <span>Azure</span>
                    </div>
                </div>
                <div class="tech-visual-bg"></div>
            </div>
        </div>
    </div>
</section>

<section class="highlights-section">
    <div class="container">
        <h2 class="section-title">Why Choose CORTAVIA</h2>
        <div class="highlights-grid">
            <div class="highlight-card highlight-card-1">
                <div class="highlight-icon-wrapper">
                    <svg class="highlight-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Cutting-Edge Technology</h3>
                <p>We leverage the latest advances in AI, including large language models, transformer architectures, and autonomous agent systems to deliver state-of-the-art solutions.</p>
            </div>
            <div class="highlight-card highlight-card-2">
                <div class="highlight-icon-wrapper">
                    <svg class="highlight-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Industry Expertise</h3>
                <p>Deep domain knowledge across multiple industries ensures our solutions are not just technically sound, but also business-relevant and industry-compliant.</p>
            </div>
            <div class="highlight-card highlight-card-3">
                <div class="highlight-icon-wrapper">
                    <svg class="highlight-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Rapid Deployment</h3>
                <p>Our streamlined development process and pre-built components enable faster time-to-market without compromising on quality or customization.</p>
            </div>
            <div class="highlight-card highlight-card-4">
                <div class="highlight-icon-wrapper">
                    <svg class="highlight-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Enterprise Security</h3>
                <p>Bank-level encryption, SOC 2 compliance, and comprehensive security protocols protect your data and ensure regulatory compliance across all deployments.</p>
            </div>
        </div>
    </div>
</section>

<section class="use-cases-section">
    <div class="container">
        <h2 class="section-title">How We Help Businesses</h2>
        <div class="use-cases-grid">
            <div class="use-case-card">
                <div class="use-case-icon-wrapper">
                    <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 21V7L13 2L21 7V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 9V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 9V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Enterprise Operations</h3>
                <p>Transform large-scale business operations with intelligent automation and streamlined workflows. Reduce operational costs, improve compliance, and enhance productivity across all departments.</p>
                <ul class="use-case-list">
                    <li>Automated document processing and workflows</li>
                    <li>Intelligent business process optimization</li>
                    <li>Real-time compliance and approval systems</li>
                </ul>
            </div>
            <div class="use-case-card">
                <div class="use-case-icon-wrapper">
                    <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 6H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Customer Experience</h3>
                <p>Deliver exceptional 24×7 support with AI-powered assistance for customers, vendors, and teams. Handle queries instantly, provide real-time updates, and integrate seamlessly with existing systems.</p>
                <ul class="use-case-list">
                    <li>Intelligent 24/7 customer support</li>
                    <li>Multi-channel engagement and sentiment analysis</li>
                    <li>CRM and ERP system integration</li>
                </ul>
            </div>
            <div class="use-case-card">
                <div class="use-case-icon-wrapper">
                    <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Human Resources & Talent</h3>
                <p>Revolutionize HR with AI-driven hiring, performance evaluation, and workforce intelligence. From interviews to promotions, enable fair, data-driven decisions across the entire employee lifecycle.</p>
                <ul class="use-case-list">
                    <li>AI-powered interview and skill assessment</li>
                    <li>Performance reviews and promotion tracking</li>
                    <li>Workforce analytics and decision support</li>
                </ul>
            </div>
            <div class="use-case-card">
                <div class="use-case-icon-wrapper">
                    <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Education & Performance</h3>
                <p>Transform assessment and evaluation with AI that generates custom tests, evaluates performance objectively, and provides bias-free insights for students and professionals.</p>
                <ul class="use-case-list">
                    <li>Custom assessment generation and grading</li>
                    <li>Objective performance scoring and tracking</li>
                    <li>Progress analytics for education and corporate training</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="process-section">
    <div class="container">
        <h2 class="section-title">Our Process</h2>
        <p class="section-subtitle" style="text-align: center; color: var(--color-text); font-size: 1.1rem; margin-bottom: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">
            A proven methodology that ensures successful AI implementation from concept to deployment and beyond
        </p>
        <div class="process-tiles-grid">
            <div class="process-tile">
                <div class="process-tile-number">01</div>
                <h3>Discovery & Consultation</h3>
                <p>We start by understanding your business challenges, goals, and requirements through comprehensive consultations, stakeholder interviews, and in-depth analysis of your current processes and systems.</p>
            </div>
            <div class="process-tile">
                <div class="process-tile-number">02</div>
                <h3>Solution Design</h3>
                <p>Our team designs a customized AI solution architecture tailored to your specific needs, infrastructure, and scalability requirements. We create detailed technical specifications and implementation roadmaps.</p>
            </div>
            <div class="process-tile">
                <div class="process-tile-number">03</div>
                <h3>Development & Testing</h3>
                <p>We build, test, and refine your AI solution with rigorous quality assurance, performance optimization, and security audits. Our agile methodology ensures continuous improvement throughout development.</p>
            </div>
            <div class="process-tile">
                <div class="process-tile-number">04</div>
                <h3>Deployment & Integration</h3>
                <p>Seamless deployment with full integration into your existing systems, comprehensive training for your team, and detailed documentation. We ensure minimal disruption to your operations.</p>
            </div>
            <div class="process-tile">
                <div class="process-tile-number">05</div>
                <h3>Ongoing Support</h3>
                <p>Continuous monitoring, optimization, and support to ensure your AI solution evolves with your business needs. We provide regular updates, performance reports, and feature enhancements.</p>
            </div>
        </div>
    </div>
</section>

<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's build the future together with AI solutions that drive real results.</p>
            <a href="contact.php" class="btn btn-primary btn-large">Let's Build Together</a>
        </div>
    </div>
</section>

<?php require_once 'footer.php'; ?>

