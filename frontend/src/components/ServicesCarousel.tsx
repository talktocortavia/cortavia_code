import { useEffect, useRef, useState } from 'react';

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
    icon: '🤖',
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
    icon: '📊',
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
    icon: '⚡',
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
    icon: '👥',
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

const ServicesCarousel: React.FC = () => {
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
    <div className="services-carousel-section py-32 relative">
      <div className="container mx-auto px-4">
        <div className="carousel-wrapper relative perspective-1200 h-96 flex items-center justify-center">
          <div className="carousel-container w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
            <div
              ref={carouselTrackRef}
              className="carousel-track relative w-full h-full"
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
              {services.map((service, index) => {
                const angle = index * (360 / services.length);
                const radian = (angle * Math.PI) / 180;
                const radius = 450;
                const x = Math.sin(radian) * radius;
                const z = Math.cos(radian) * radius;
                const rotateY = angle;
                const isActive = index === currentIndex;

                return (
                  <div
                    key={service.key}
                    className="carousel-item absolute w-60 h-80 cursor-pointer"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-120px',
                      marginTop: '-160px',
                      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    onClick={() => goToService(index)}
                  >
                    <div
                      className={`carousel-card w-full h-full bg-[color:var(--c-surface)] border-2 rounded-2xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-xl transition-all duration-400 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 ${
                        isActive
                          ? 'border-emerald-500 shadow-2xl shadow-emerald-200/60 scale-105 dark:border-blue-500 dark:shadow-blue-500/30'
                          : 'border-[color:var(--c-border)] shadow-lg dark:border-slate-800'
                      }`}
                    >
                      <div className={`text-5xl mb-4 transition-all duration-400 ${isActive ? 'scale-125' : ''}`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-2 transition-all duration-400 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{service.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="carousel-controls absolute top-1/2 left-0 right-0 flex justify-between px-8 pointer-events-none z-10">
            <button
              onClick={prevService}
              className="carousel-btn w-16 h-16 rounded-xl bg-[color:var(--c-surface)]/80 border-2 border-[color:var(--c-border)] text-slate-900 text-2xl flex items-center justify-center backdrop-blur-md pointer-events-auto transition-all duration-400 hover:scale-110 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-200/60 dark:bg-slate-950/60 dark:border-slate-800 dark:text-white dark:hover:border-blue-400 dark:hover:shadow-blue-500/30"
            >
              ←
            </button>
            <button
              onClick={nextService}
              className="carousel-btn w-16 h-16 rounded-xl bg-[color:var(--c-surface)]/80 border-2 border-[color:var(--c-border)] text-slate-900 text-2xl flex items-center justify-center backdrop-blur-md pointer-events-auto transition-all duration-400 hover:scale-110 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-200/60 dark:bg-slate-950/60 dark:border-slate-800 dark:text-white dark:hover:border-blue-400 dark:hover:shadow-blue-500/30"
            >
              →
            </button>
          </div>
        </div>

        {/* Service Content Card */}
        <div className="mt-16">
          <div className="service-content-tile bg-[color:var(--c-surface)] border-2 border-emerald-500/20 rounded-3xl p-8 shadow-2xl shadow-emerald-200/40 backdrop-blur-xl dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-950/95 dark:border-blue-500/30 dark:shadow-blue-500/15">
            <div className="service-tile-header flex items-center mb-4">
              <span className="text-4xl mr-4">{selectedService.icon}</span>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:to-blue-400">
                  {selectedService.title}
                </h2>
                <p className="text-emerald-700 dark:text-blue-400 font-semibold mt-1">{selectedService.subtitle}</p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-lg mb-6 leading-relaxed">{selectedService.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm flex items-start">
                      <span className="text-emerald-600 dark:text-blue-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Benefits</h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm flex items-start">
                      <span className="text-emerald-600 dark:text-blue-500 mr-2">→</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;

