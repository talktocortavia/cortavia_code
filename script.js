document.addEventListener('DOMContentLoaded', function() {
    // Neural Network Background
    class NeuralNetworkBackground {
        constructor() {
            this.canvas = document.getElementById('neuralCanvas');
            if (!this.canvas) return;
            
            this.ctx = this.canvas.getContext('2d');
            this.neurons = [];
            this.connections = [];
            this.energyPulses = [];
            
            this.resize();
            this.init();
            this.animate();
            
            window.addEventListener('resize', () => this.resize());
        }

        resize() {
            const hero = this.canvas.closest('.hero');
            if (hero) {
                this.canvas.width = hero.offsetWidth;
                this.canvas.height = hero.offsetHeight;
            }
        }

        init() {
            const neuronCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
            
            for (let i = 0; i < neuronCount; i++) {
                this.neurons.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    size: Math.random() * 3 + 2,
                    pulsePhase: Math.random() * Math.PI * 2,
                    isLarge: Math.random() < 0.1,
                    glowIntensity: 0.5 + Math.random() * 0.5
                });
            }

            for (let i = 0; i < this.neurons.length; i++) {
                for (let j = i + 1; j < this.neurons.length; j++) {
                    const dx = this.neurons[i].x - this.neurons[j].x;
                    const dy = this.neurons[i].y - this.neurons[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150 && Math.random() < 0.3) {
                        this.connections.push({
                            from: i,
                            to: j,
                            opacity: 0,
                            pulsePhase: Math.random() * Math.PI * 2,
                            energy: 0
                        });
                    }
                }
            }
        }

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            const time = Date.now() * 0.001;

            this.connections.forEach(connection => {
                const fromNeuron = this.neurons[connection.from];
                const toNeuron = this.neurons[connection.to];
                
                connection.opacity = 0.1 + 0.3 * (Math.sin(time * 0.5 + connection.pulsePhase) + 1) * 0.5;
                
                this.ctx.strokeStyle = `rgba(59, 130, 246, ${connection.opacity * 0.3})`;
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(fromNeuron.x, fromNeuron.y);
                this.ctx.lineTo(toNeuron.x, toNeuron.y);
                this.ctx.stroke();

                if (Math.random() < 0.005) {
                    this.createEnergyPulse(fromNeuron, toNeuron);
                }
            });

            this.energyPulses = this.energyPulses.filter(pulse => {
                pulse.progress += pulse.speed;
                
                if (pulse.progress >= 1) return false;
                
                const x = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
                const y = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;
                
                const alpha = Math.sin(pulse.progress * Math.PI) * 0.8;
                
                this.ctx.beginPath();
                this.ctx.arc(x, y, 2, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(124, 196, 255, ${alpha})`;
                this.ctx.fill();
                
                this.ctx.beginPath();
                this.ctx.arc(x, y, 6, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.2})`;
                this.ctx.fill();
                
                return true;
            });

            this.neurons.forEach(neuron => {
                const pulseIntensity = 0.7 + 0.3 * Math.sin(time * 2 + neuron.pulsePhase);
                const glowSize = neuron.size * (neuron.isLarge ? 2 : 1.5) * pulseIntensity;
                
                const gradient = this.ctx.createRadialGradient(
                    neuron.x, neuron.y, 0,
                    neuron.x, neuron.y, glowSize * 2
                );
                
                if (neuron.isLarge) {
                    gradient.addColorStop(0, `rgba(59, 130, 246, ${0.8 * pulseIntensity})`);
                    gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.3 * pulseIntensity})`);
                    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                } else {
                    gradient.addColorStop(0, `rgba(124, 196, 255, ${0.6 * pulseIntensity})`);
                    gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.2 * pulseIntensity})`);
                    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                }
                
                this.ctx.beginPath();
                this.ctx.arc(neuron.x, neuron.y, glowSize * 2, 0, Math.PI * 2);
                this.ctx.fillStyle = gradient;
                this.ctx.fill();
                
                this.ctx.beginPath();
                this.ctx.arc(neuron.x, neuron.y, neuron.size * pulseIntensity, 0, Math.PI * 2);
                this.ctx.fillStyle = neuron.isLarge ? 
                    `rgba(59, 130, 246, ${0.9 * pulseIntensity})` : 
                    `rgba(124, 196, 255, ${0.7 * pulseIntensity})`;
                this.ctx.fill();
            });

            requestAnimationFrame(() => this.animate());
        }

        createEnergyPulse(from, to) {
            this.energyPulses.push({
                from: from,
                to: to,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02
            });
        }
    }

    // Initialize Neural Network
    new NeuralNetworkBackground();

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
        'assist': {
            icon: '🤖',
            title: 'Cortavia Assist',
            subtitle: 'AI Experience & Support Platform',
            description: '24×7 intelligent support for customers, vendors, and internal teams. Instantly resolves queries, provides real-time updates, analyses sentiment, and integrates seamlessly with CRM and ERP systems to reduce workload and operational costs. Our comprehensive AI platform delivers personalized assistance across all touchpoints, ensuring exceptional experiences while dramatically improving operational efficiency and customer satisfaction metrics.',
            features: [
                '<strong>24×7 Intelligent Support</strong> - Round-the-clock availability for customers, vendors, and internal teams with instant query resolution and real-time assistance across multiple channels including chat, email, and voice',
                '<strong>Advanced Sentiment Analysis</strong> - Real-time emotion detection and sentiment tracking that automatically routes urgent issues, identifies customer satisfaction trends, and enables proactive intervention for at-risk accounts',
                '<strong>Seamless System Integration</strong> - Deep integration with CRM, ERP, ticketing systems, and business applications for real-time data access, order tracking, account management, and automated workflow triggers',
                '<strong>Multi-Channel Communication</strong> - Unified platform supporting chat, email, voice, social media, and messaging apps with consistent experience and conversation history across all touchpoints',
                '<strong>Intelligent Knowledge Base</strong> - Self-learning knowledge system that continuously updates from interactions, documents, and training materials to provide accurate, context-aware responses',
                '<strong>Performance Analytics</strong> - Comprehensive dashboards tracking response times, resolution rates, customer satisfaction scores, cost savings, and operational metrics with actionable insights'
            ],
            benefits: [
                'Reduce support costs by up to 60% while improving response times to under 2 seconds',
                'Increase customer satisfaction scores by 40%+ with personalized, instant support',
                'Handle unlimited concurrent conversations without scaling human resources',
                'Gain real-time visibility into customer sentiment and operational performance'
            ]
        },
        'evaluate': {
            icon: '📊',
            title: 'Cortavia Evaluate',
            subtitle: 'AI Academic & Performance Evaluation',
            description: 'AI-powered system that generates assessments and evaluates performance for students and professionals using custom syllabi, content, and criteria. Delivers objective scoring, progress tracking, and bias-free insights for education and corporate environments. Our intelligent evaluation platform adapts to your specific curriculum, learning objectives, and assessment standards, providing comprehensive analytics that drive improved outcomes and fair, data-driven decision-making.',
            features: [
                '<strong>Custom Assessment Generation</strong> - Automatically creates comprehensive assessments, quizzes, and exams based on your custom syllabi, learning objectives, and content requirements with varying difficulty levels',
                '<strong>Intelligent Performance Scoring</strong> - Advanced AI algorithms that evaluate responses using natural language processing, providing objective scoring with detailed feedback on knowledge gaps and strengths',
                '<strong>Progress Tracking & Analytics</strong> - Comprehensive tracking of individual and group performance over time with visual analytics, trend identification, and predictive insights for intervention',
                '<strong>Bias-Free Evaluation</strong> - Objective assessment system that eliminates unconscious bias, ensuring fair evaluation across all demographics and providing equal opportunity for all candidates',
                '<strong>Multi-Format Support</strong> - Evaluates written responses, multiple-choice answers, coding assignments, presentations, and practical demonstrations with consistent scoring criteria',
                '<strong>Customizable Evaluation Rubrics</strong> - Define your own evaluation metrics, scoring systems, and assessment criteria that align with your educational or corporate standards and requirements'
            ],
            benefits: [
                'Reduce evaluation time by 80% while maintaining accuracy and consistency',
                'Provide objective, bias-free assessments that ensure fair evaluation for all',
                'Enable data-driven insights for personalized learning paths and improvement',
                'Scale evaluation capabilities without proportional increase in resources'
            ]
        },
        'automate': {
            icon: '⚡',
            title: 'Cortavia Automate',
            subtitle: 'AI Business Process Automation',
            description: 'End-to-end automation of documents, workflows, approvals, and compliance using AI and RPA. Improves operational efficiency, accuracy, and real-time visibility across business processes. Our intelligent automation platform combines artificial intelligence with robotic process automation to transform manual, repetitive tasks into streamlined, error-free operations that operate 24/7, enabling your organization to focus on strategic initiatives while dramatically reducing costs and improving service quality.',
            features: [
                '<strong>Intelligent Document Processing</strong> - Complete automation of document inflow and outflow with AI-powered extraction, classification, validation, and routing that handles invoices, contracts, forms, and reports',
                '<strong>Smart Workflow Management</strong> - Intelligent routing and approval systems that adapt to your business rules, automatically escalate exceptions, and optimize process flows based on historical patterns',
                '<strong>RPA Integration</strong> - Seamless combination of AI with robotic process automation for end-to-end process automation, including legacy system integration and cross-platform workflows',
                '<strong>Compliance & Audit Automation</strong> - Automated reporting, compliance monitoring, and audit trail generation with real-time alerts for violations and comprehensive documentation for regulatory requirements',
                '<strong>Predictive Analytics & Optimization</strong> - ML models tailored to your data for forecasting, bottleneck identification, resource optimization, and predictive maintenance of automated processes',
                '<strong>Real-Time Process Monitoring</strong> - Live dashboards tracking process performance, SLA compliance, error rates, and operational metrics with automated alerts and continuous optimization recommendations'
            ],
            benefits: [
                'Process documents and workflows 10x faster than manual methods with 95%+ accuracy',
                'Reduce operational costs by up to 70% while eliminating human errors and delays',
                'Enable 24/7 automated operations that scale instantly with business demands',
                'Achieve complete visibility and control over all automated processes with real-time insights'
            ]
        },
        'people': {
            icon: '👥',
            title: 'Cortavia People',
            subtitle: 'End-to-End HR Intelligence Platform',
            description: 'A unified AI solution covering interviews, hiring, skill assessment, performance reviews, promotions, and workforce analytics, enabling fair and data-driven HR decision-making. Our comprehensive HR intelligence platform transforms every aspect of human resource management, from initial candidate screening through ongoing performance evaluation and career development, providing objective insights that eliminate bias and enable strategic workforce planning.',
            features: [
                '<strong>Intelligent Interview Analysis</strong> - Real-time evaluation of interviews assessing communication skills, technical knowledge, problem-solving abilities, cultural fit, and leadership potential with objective scoring',
                '<strong>Comprehensive Hiring Support</strong> - End-to-end hiring automation from resume screening and shortlisting to candidate comparison, background verification, and offer management with bias-free evaluation',
                '<strong>Skill Assessment & Validation</strong> - Automated skill testing and validation across technical, soft, and domain-specific competencies with detailed competency mapping and gap analysis',
                '<strong>Performance Review Automation</strong> - AI-powered performance evaluation that analyzes work output, collaboration, goal achievement, and growth potential with objective scoring and development recommendations',
                '<strong>Promotion & Career Path Analytics</strong> - Data-driven insights for promotion decisions, career path recommendations, and succession planning based on performance, skills, and organizational needs',
                '<strong>Workforce Analytics & Insights</strong> - Comprehensive analytics covering talent acquisition metrics, retention patterns, performance trends, diversity metrics, and predictive workforce planning'
            ],
            benefits: [
                'Reduce time-to-hire by 50-60% while improving candidate quality and organizational fit',
                'Enable fair, objective HR decisions that eliminate bias and ensure equal opportunity',
                'Provide comprehensive workforce insights for strategic planning and talent optimization',
                'Streamline all HR processes from hiring to performance management in one unified platform'
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
