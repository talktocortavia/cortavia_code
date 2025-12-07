document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                    // Shake animation effect
                    field.style.animation = 'shake 0.5s';
                    setTimeout(() => field.style.animation = '', 500);
                } else {
                    field.style.borderColor = '';
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Interactive Features (What We Do) Logic
    const featureItems = document.querySelectorAll('.feature-item');
    const featureDisplays = document.querySelectorAll('.feature-display-content');

    if (featureItems.length > 0) {
        featureItems.forEach(item => {
            item.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                
                // Update list active state
                featureItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                // Update display content with smooth transition
                featureDisplays.forEach(display => {
                    if (display.classList.contains('active')) {
                        display.style.opacity = '0';
                        display.style.transform = 'translateX(30px)';
                    }
                    display.classList.remove('active');
                });
                
                // Show new content after a brief delay for smooth transition
                setTimeout(() => {
                    const targetDisplay = document.getElementById(targetId);
                    if (targetDisplay) {
                        targetDisplay.classList.add('active');
                    }
                }, 150);
            });
        });
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.feature-card, .service-card, .about-card, .tech-item, .tech-logo-card, .section-title, .hero-text, .hero-image');
    animateElements.forEach(el => {
        // Add animation class helper
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Add class for animation triggers
    document.addEventListener('scroll', function() {
       const scrolled = window.scrollY;
       const parallax = document.querySelector('.hero::before');
       if(parallax) {
           parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
       }
    });

    // 3D Services Carousel
    const carouselTrack = document.getElementById('servicesCarousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Service data for tile card
    const serviceData = {
        'chatbot': {
            icon: '💬',
            title: 'AI Chatbot',
            subtitle: 'Enterprise Knowledge Assistant',
            description: 'Our AI Chatbot serves as your organization\'s intelligent knowledge assistant, capable of understanding complex queries and providing accurate, context-aware responses. Built with enterprise security standards, it seamlessly integrates with your existing systems and learns from every interaction to continuously improve.',
            features: [
                '<strong>Comprehensive Knowledge Integration</strong> - Harnesses internal documents, knowledge bases, and web resources to provide accurate, up-to-date information',
                '<strong>Bank-Level Security</strong> - Enterprise-grade secure data ingestion and processing with end-to-end encryption and compliance with industry standards',
                '<strong>Intelligent Learning</strong> - Adaptive AI that learns user behavior and context patterns to deliver increasingly personalized responses',
                '<strong>Perfect for Teams</strong> - Ideal for internal support, training, and knowledge management across departments',
                '<strong>Multi-Language Support</strong> - Communicate in multiple languages with native-level understanding and response quality',
                '<strong>Analytics Dashboard</strong> - Track usage patterns, identify knowledge gaps, and measure ROI with comprehensive analytics'
            ],
            benefits: [
                'Reduce support ticket volume by up to 70%',
                'Instant access to organizational knowledge 24/7',
                'Improved employee onboarding and training efficiency',
                'Centralized knowledge management system'
            ]
        },
        'support': {
            icon: '🎧',
            title: 'Customer Support Chatbot',
            subtitle: '24/7 Intelligent Customer Assistance',
            description: 'Transform your customer support operations with an AI-powered chatbot that never sleeps. Our solution handles common inquiries instantly, escalates complex issues to human agents, and integrates seamlessly with your existing customer relationship management systems.',
            features: [
                '<strong>Real-Time Updates</strong> - Instant information for your customers about orders, services, and account status',
                '<strong>System Integration</strong> - Connects to your ERP/CRM systems seamlessly for real-time data access',
                '<strong>24×7 Support</strong> - Round-the-clock availability with personalized responses in multiple languages',
                '<strong>Cost Reduction</strong> - Significantly reduces call center load and operational costs by up to 60%',
                '<strong>Sentiment Analysis</strong> - Understand customer emotions and automatically route urgent issues to human agents',
                '<strong>Conversation History</strong> - Complete interaction logs for quality assurance and continuous improvement'
            ],
            benefits: [
                'Average response time under 2 seconds',
                'Handle multiple conversations simultaneously',
                'Improve customer satisfaction scores by 40%+',
                'Seamless handoff to human agents when needed'
            ]
        },
        'evaluator': {
            icon: '📝',
            title: 'AI Evaluator',
            subtitle: 'Intelligent Performance Analysis',
            description: 'Make data-driven hiring and performance decisions with our AI Evaluator. Using advanced natural language processing and machine learning, it analyzes interviews, resumes, and performance data to provide objective, bias-free assessments that help you find the best talent and make informed decisions.',
            features: [
                '<strong>Transcript Analysis</strong> - Analyzes interview and meeting transcripts with precision, identifying key competencies and red flags',
                '<strong>Performance Scoring</strong> - Scores performance based on your defined criteria with consistent, objective evaluation',
                '<strong>Decision Support</strong> - Helps with hiring, promotions, and training decisions with data-driven insights',
                '<strong>Resume Shortlisting</strong> - Automatically picks top candidates by reading job descriptions and resumes, saving hours of manual review',
                '<strong>Bias Detection</strong> - Identifies and mitigates unconscious bias in evaluation processes',
                '<strong>Customizable Criteria</strong> - Define your own evaluation metrics and scoring rubrics'
            ],
            benefits: [
                'Reduce time-to-hire by 50%',
                'Improve candidate quality and fit',
                'Objective, consistent evaluation standards',
                'Comprehensive analytics and reporting'
            ]
        },
        'automation': {
            icon: '⚡',
            title: 'Business Process Automation',
            subtitle: 'Streamline Your Operations',
            description: 'Automate your entire business process workflow with intelligent AI systems. From document processing to predictive analytics, our automation solutions reduce manual work, eliminate errors, and accelerate business operations while maintaining the highest standards of accuracy and compliance.',
            features: [
                '<strong>Document Automation</strong> - Complete document inflow and outflow automation with intelligent extraction and classification',
                '<strong>Workflow Management</strong> - Intelligent routing and approval systems that adapt to your business rules',
                '<strong>Compliance Assistance</strong> - Automated reporting and compliance support with audit trails and documentation',
                '<strong>ML Model Development</strong> - Predictive analytics and custom models tailored to your data for forecasting and optimization',
                '<strong>RPA Integration</strong> - Combine AI with robotic process automation for end-to-end process automation',
                '<strong>Real-Time Monitoring</strong> - Track process performance, identify bottlenecks, and optimize workflows continuously'
            ],
            benefits: [
                'Process documents 10x faster than manual methods',
                'Reduce processing errors by 95%+',
                '24/7 automated operations',
                'Scalable solutions that grow with your business'
            ]
        },
        'research-agents': {
            icon: '🔬',
            title: 'AI Research Agents',
            subtitle: 'Autonomous Intelligence Research Systems',
            description: 'Deploy autonomous AI agents that conduct comprehensive research, analyze vast amounts of data, synthesize information from multiple sources, and generate actionable insights. These intelligent agents work continuously to gather, process, and present research findings, saving your team countless hours while ensuring thorough and accurate analysis.',
            features: [
                '<strong>Autonomous Research</strong> - AI agents independently conduct research across web sources, databases, and documents to gather comprehensive information',
                '<strong>Multi-Source Synthesis</strong> - Combines information from various sources, identifies patterns, and synthesizes findings into coherent reports',
                '<strong>Real-Time Updates</strong> - Continuously monitors and updates research findings as new information becomes available',
                '<strong>Custom Research Goals</strong> - Configure agents for specific research objectives, from market analysis to competitive intelligence',
                '<strong>Citation & Source Tracking</strong> - Automatically tracks and cites all sources, ensuring transparency and verifiability',
                '<strong>Natural Language Reports</strong> - Generates human-readable research reports, summaries, and presentations'
            ],
            benefits: [
                'Reduce research time by 80-90%',
                'Comprehensive coverage of topics and sources',
                '24/7 autonomous research capabilities',
                'Consistent, objective analysis without human bias'
            ]
        },
        'interview-evaluator': {
            icon: '🎯',
            title: 'Interview Evaluators',
            subtitle: 'Intelligent Candidate Assessment System',
            description: 'Transform your hiring process with AI-powered interview evaluation systems. Our intelligent evaluators analyze interviews in real-time, assessing communication skills, technical knowledge, problem-solving abilities, cultural fit, and overall candidate performance. Get objective, bias-free evaluations with detailed feedback reports that help you make better hiring decisions faster.',
            features: [
                '<strong>Real-Time Analysis</strong> - Evaluates interviews as they happen, providing instant feedback and scoring',
                '<strong>Multi-Dimensional Assessment</strong> - Analyzes technical skills, communication, problem-solving, cultural fit, and leadership potential',
                '<strong>Bias-Free Evaluation</strong> - Objective assessment that eliminates unconscious bias and ensures fair evaluation',
                '<strong>Detailed Feedback Reports</strong> - Comprehensive reports with strengths, weaknesses, and improvement areas for each candidate',
                '<strong>Customizable Evaluation Criteria</strong> - Define your own evaluation rubrics and scoring systems',
                '<strong>Comparison Analytics</strong> - Compare candidates side-by-side with standardized metrics',
                '<strong>Integration with ATS</strong> - Seamlessly integrates with Applicant Tracking Systems for streamlined workflows'
            ],
            benefits: [
                'Reduce time-to-hire by 50-60%',
                'Improve hiring quality and candidate fit',
                'Eliminate evaluation inconsistencies',
                'Comprehensive candidate insights and analytics'
            ]
        }
    };

    // Function to update service content tile
    function updateServiceContent(serviceKey) {
        const service = serviceData[serviceKey];
        if (!service) return;

        const tileIcon = document.getElementById('serviceTileIcon');
        const tileTitle = document.getElementById('serviceTileTitle');
        const tileSubtitle = document.getElementById('serviceTileSubtitle');
        const tileDescription = document.getElementById('serviceTileDescription');
        const tileFeatures = document.getElementById('serviceTileFeatures');
        const tileBenefits = document.getElementById('serviceTileBenefits');

        if (tileIcon) tileIcon.textContent = service.icon;
        if (tileTitle) tileTitle.textContent = service.title;
        if (tileSubtitle) tileSubtitle.textContent = service.subtitle;
        if (tileDescription) tileDescription.textContent = service.description;
        
        if (tileFeatures) {
            tileFeatures.innerHTML = '<ul class="service-features-list">' +
                service.features.map(f => `<li>${f}</li>`).join('') +
                '</ul>';
        }
        
        if (tileBenefits) {
            tileBenefits.innerHTML = '<h4>Key Benefits:</h4>' +
                '<ul class="service-benefits-list">' +
                service.benefits.map(b => `<li>${b}</li>`).join('') +
                '</ul>';
        }

        // Add fade animation
        const contentCard = document.getElementById('serviceContentCard');
        if (contentCard) {
            contentCard.style.opacity = '0';
            setTimeout(() => {
                contentCard.style.opacity = '1';
            }, 150);
        }
    }
    
    if (carouselTrack && carouselItems.length > 0) {
        let currentIndex = 0;
        const totalItems = carouselItems.length;
        const angleStep = 360 / totalItems;
        let rotationY = 0;

        // Initialize carousel positions
        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                const angle = index * angleStep;
                const radian = (angle * Math.PI) / 180;
                const radius = 450; // Distance from center
                
                const x = Math.sin(radian) * radius;
                const z = Math.cos(radian) * radius;
                const rotateY = angle;
                
                item.style.transform = `
                    translateX(${x}px) 
                    translateZ(${z}px) 
                    rotateY(${rotateY}deg)
                `;
                
                // Update active state
                const adjustedIndex = (index - currentIndex + totalItems) % totalItems;
                if (adjustedIndex === 0) {
                    item.classList.add('active');
                    // Update service content when item becomes active
                    const serviceKey = item.getAttribute('data-service');
                    if (serviceKey) {
                        updateServiceContent(serviceKey);
                    }
                } else {
                    item.classList.remove('active');
                }
            });
            
            carouselTrack.style.transform = `rotateY(${rotationY}deg)`;
        }

        // Navigation functions
        function nextService() {
            currentIndex = (currentIndex + 1) % totalItems;
            rotationY -= angleStep;
            updateCarousel();
        }

        function prevService() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            rotationY += angleStep;
            updateCarousel();
        }

        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', nextService);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', prevService);
        }

        // Click on carousel items to navigate
        carouselItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                const targetIndex = index;
                const diff = targetIndex - currentIndex;
                const steps = diff > 0 ? diff : diff + totalItems;
                
                for (let i = 0; i < steps; i++) {
                    setTimeout(() => {
                        nextService();
                    }, i * 100);
                }
            });
        });

        // Auto-rotate (optional - can be disabled)
        let autoRotateInterval = setInterval(nextService, 4000);

        // Pause on hover
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        if (carouselWrapper) {
            carouselWrapper.addEventListener('mouseenter', () => {
                clearInterval(autoRotateInterval);
            });
            carouselWrapper.addEventListener('mouseleave', () => {
                autoRotateInterval = setInterval(nextService, 4000);
            });
        }

        // Initialize
        updateCarousel();
    }
});

// Helper for animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(styleSheet);
