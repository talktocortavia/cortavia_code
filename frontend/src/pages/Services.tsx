import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

interface Service {
  key: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
}

const services: Service[] = [
  {
    key: 'assist',
    icon: 'fa-solid fa-comments',
    title: 'Cortavia Assist',
    subtitle: 'AI Experience & Support Platform',
    description:
      '24×7 intelligent support for customers, vendors, and internal teams. Instantly resolves queries, provides real-time updates, analyses sentiment, and integrates seamlessly with CRM and ERP systems to reduce workload and operational costs.',
    features: [
      'Comprehensive Knowledge Integration - Harnesses internal documents, knowledge bases, and web resources',
      'Bank-Level Security - Enterprise-grade secure data ingestion and processing',
      'Intelligent Learning - Adaptive AI that learns user behavior and context patterns',
      'Perfect for Teams - Ideal for internal support, training, and knowledge management',
      'Multi-Language Support - Communicate in multiple languages with native-level understanding',
      'Analytics Dashboard - Track usage patterns, identify knowledge gaps, and measure ROI',
    ],
    benefits: [
      'Reduce support ticket volume by up to 70%',
      'Instant access to organizational knowledge 24/7',
      'Improved employee onboarding and training efficiency',
      'Centralized knowledge management system',
    ],
  },
  {
    key: 'evaluate',
    icon: 'fa-solid fa-chart-simple',
    title: 'Cortavia Evaluate',
    subtitle: 'AI Academic & Performance Evaluation',
    description:
      'AI-powered system that generates assessments and evaluates performance for students and professionals using custom syllabi, content, and criteria. Delivers objective scoring, progress tracking, and bias-free insights for education and corporate environments.',
    features: [
      'Custom Assessment Generation - Automatically creates comprehensive assessments based on your custom syllabi',
      'Intelligent Performance Scoring - Advanced AI algorithms that evaluate responses objectively',
      'Progress Tracking & Analytics - Comprehensive tracking of individual and group performance',
      'Bias-Free Evaluation - Objective assessment system that eliminates unconscious bias',
      'Multi-Format Support - Evaluates written responses, multiple-choice, coding assignments, and more',
      'Customizable Evaluation Rubrics - Define your own evaluation metrics and scoring systems',
    ],
    benefits: [
      'Reduce evaluation time by 80% while maintaining accuracy',
      'Provide objective, bias-free assessments for all',
      'Enable data-driven insights for personalized learning paths',
      'Scale evaluation capabilities without proportional increase in resources',
    ],
  },
  {
    key: 'automate',
    icon: 'fa-solid fa-cloud',
    title: 'Cortavia Automate',
    subtitle: 'AI Business Process Automation',
    description:
      'End-to-end automation of documents, workflows, approvals, and compliance using AI and RPA. Improves operational efficiency, accuracy, and real-time visibility across business processes.',
    features: [
      'Intelligent Document Processing - Complete automation of document inflow and outflow',
      'Smart Workflow Management - Intelligent routing and approval systems',
      'RPA Integration - Seamless combination of AI with robotic process automation',
      'Compliance & Audit Automation - Automated reporting and compliance monitoring',
      'Predictive Analytics & Optimization - ML models for forecasting and optimization',
      'Real-Time Process Monitoring - Live dashboards tracking process performance',
    ],
    benefits: [
      'Process documents and workflows 10x faster with 95%+ accuracy',
      'Reduce operational costs by up to 70% while eliminating errors',
      'Enable 24/7 automated operations that scale instantly',
      'Achieve complete visibility and control over all automated processes',
    ],
  },
  {
    key: 'people',
    icon: 'fa-solid fa-people-group',
    title: 'Cortavia People',
    subtitle: 'End-to-End HR Intelligence Platform',
    description:
      'A unified AI solution covering interviews, hiring, skill assessment, performance reviews, promotions, and workforce analytics, enabling fair and data-driven HR decision-making.',
    features: [
      'Intelligent Interview Analysis - Real-time evaluation of interviews with objective scoring',
      'Comprehensive Hiring Support - End-to-end hiring automation from resume screening',
      'Skill Assessment & Validation - Automated skill testing across technical and soft skills',
      'Performance Review Automation - AI-powered performance evaluation',
      'Promotion & Career Path Analytics - Data-driven insights for promotion decisions',
      'Workforce Analytics & Insights - Comprehensive analytics covering talent acquisition',
    ],
    benefits: [
      'Reduce time-to-hire by 50-60% while improving candidate quality',
      'Enable fair, objective HR decisions that eliminate bias',
      'Provide comprehensive workforce insights for strategic planning',
      'Streamline all HR processes from hiring to performance management',
    ],
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedService(services[currentIndex]);
    updateCarousel();
  }, [currentIndex]);

  const updateCarousel = () => {
    if (!carouselTrackRef.current) return;

    const totalItems = services.length;
    const angleStep = 360 / totalItems;
    const rotationY = -currentIndex * angleStep;

    carouselTrackRef.current.style.transform = `rotateY(${rotationY}deg)`;
  };

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToService = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen text-[color:var(--c-text)]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-blue-500/10 dark:text-blue-300 border border-emerald-200 dark:border-blue-500/20">
              What We Offer
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-blue-300">
            Products & Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Comprehensive AI solutions tailored to your business needs. Transform your operations with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* 3D Carousel Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="carousel-wrapper relative perspective-1200 h-80 flex items-center justify-center mb-16">
            <div className="carousel-container w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
              <div
                ref={carouselTrackRef}
                className="carousel-track relative w-full h-full"
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              >
                {services.map((service, index) => {
                  const angle = index * (360 / services.length);
                  const radian = (angle * Math.PI) / 180;
                  const radius = 380;
                  const x = Math.sin(radian) * radius;
                  const z = Math.cos(radian) * radius;
                  const rotateY = angle;
                  const isActive = index === currentIndex;

                  return (
                    <div
                      key={service.key}
                      className="carousel-item absolute w-48 h-64 cursor-pointer"
                      style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: '-96px',
                        marginTop: '-128px',
                        transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`,
                        transformStyle: 'preserve-3d',
                        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                      onClick={() => goToService(index)}
                    >
                      <div
                        className={`carousel-card w-full h-full bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-2 rounded-3xl p-6 flex flex-col items-center justify-center text-center backdrop-blur-xl transition-all duration-500 shadow-xl ${
                          isActive
                            ? 'border-emerald-400 shadow-2xl shadow-emerald-300/50 scale-110 dark:border-blue-400 dark:shadow-blue-500/40 ring-4 ring-emerald-200/50 dark:ring-blue-500/20'
                            : 'border-emerald-100/50 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-105 hover:border-emerald-300 dark:hover:border-slate-600'
                        }`}
                      >
                        <div className={`text-4xl mb-3 transition-all duration-500 ${isActive ? 'scale-125 drop-shadow-lg' : 'opacity-80'} text-emerald-600 dark:text-blue-400`}>
                          <i className={service.icon}></i>
                        </div>
                        <h3 className={`text-lg font-bold mb-1.5 transition-all duration-500 ${isActive ? 'text-emerald-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-300'}`}>
                          {service.title}
                        </h3>
                        <p className={`text-xs text-slate-600 dark:text-slate-400 transition-all duration-500 ${isActive ? 'font-medium' : ''}`}>
                          {service.subtitle}
                        </p>
                        {isActive && (
                          <div className="mt-3 w-12 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-blue-400 dark:to-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls with Font Awesome Icons */}
            <div className="carousel-controls absolute top-1/2 left-0 right-0 flex justify-between px-8 pointer-events-none z-10">
              <button
                onClick={prevService}
                className="carousel-btn w-16 h-16 rounded-xl bg-[color:var(--c-surface)]/90 border-2 border-emerald-200 dark:border-slate-700 text-emerald-600 dark:text-blue-400 flex items-center justify-center backdrop-blur-md pointer-events-auto transition-all duration-300 hover:scale-110 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-200/60 dark:hover:border-blue-400 dark:hover:shadow-blue-500/30"
                aria-label="Previous service"
              >
                <i className="fa-solid fa-circle-left text-3xl"></i>
              </button>
              <button
                onClick={nextService}
                className="carousel-btn w-16 h-16 rounded-xl bg-[color:var(--c-surface)]/90 border-2 border-emerald-200 dark:border-slate-700 text-emerald-600 dark:text-blue-400 flex items-center justify-center backdrop-blur-md pointer-events-auto transition-all duration-300 hover:scale-110 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-200/60 dark:hover:border-blue-400 dark:hover:shadow-blue-500/30"
                aria-label="Next service"
              >
                <i className="fa-solid fa-circle-right text-3xl"></i>
              </button>
            </div>
          </div>

          {/* Service Content Card */}
          <div className="service-content-tile bg-[color:var(--c-surface)] border-2 border-emerald-500/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-emerald-200/40 backdrop-blur-xl dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-950/95 dark:border-blue-500/30 dark:shadow-blue-500/15">
            <div className="service-tile-header flex items-center mb-6">
              <div className="text-5xl md:text-6xl mr-6 text-emerald-600 dark:text-blue-400">
                <i className={selectedService.icon}></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:to-blue-400 mb-2">
                  {selectedService.title}
                </h2>
                <p className="text-emerald-700 dark:text-blue-400 font-semibold text-lg">{selectedService.subtitle}</p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 leading-relaxed">{selectedService.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm flex items-start">
                      <span className="text-emerald-600 dark:text-blue-500 mr-3 mt-1 flex-shrink-0">
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm flex items-start">
                      <span className="text-emerald-600 dark:text-blue-500 mr-3 mt-1 flex-shrink-0">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50/60 dark:bg-slate-900/30 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            We specialize in creating AI solutions that fit your unique business requirements. Let's build something extraordinary together.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="text-lg px-8 py-4">
              Get in Touch
            </Button>
          </Link>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
            Free consultation • No commitment required • Quick response time
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
