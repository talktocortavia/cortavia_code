import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useState } from 'react';

interface Industry {
  name: string;
  icon: string;
  shortDesc: string;
  expandedDesc: string;
  useCases: string[];
}

const industries: Industry[] = [
  {
    name: 'Banking & FinTech',
    icon: 'fa-solid fa-building-columns',
    shortDesc: 'Fraud prevention, customer service automation, underwriting intelligence.',
    expandedDesc: 'Transform financial operations with AI-powered solutions that enhance security, streamline customer interactions, and optimize decision-making processes.',
    useCases: [
      'Real-time fraud detection and prevention',
      'Intelligent customer support chatbots',
      'Automated loan underwriting and risk assessment',
      'Regulatory compliance automation',
      'Personalized financial advisory services',
      'Transaction monitoring and anomaly detection',
    ],
  },
  {
    name: 'Retail & CPG',
    icon: 'fa-solid fa-store',
    shortDesc: 'Personalization, demand forecasting, intelligent support, content automation.',
    expandedDesc: 'Drive sales and customer engagement with AI solutions that understand consumer behavior, predict trends, and deliver personalized experiences at scale.',
    useCases: [
      'Personalized product recommendations',
      'Demand forecasting and inventory optimization',
      'AI-powered customer support',
      'Content generation for marketing',
      'Price optimization strategies',
      'Customer sentiment analysis',
    ],
  },
  {
    name: 'Manufacturing',
    icon: 'fa-solid fa-industry',
    shortDesc: 'Predictive maintenance, quality checks, document workflows, supply intelligence.',
    expandedDesc: 'Optimize production efficiency and reduce downtime with intelligent automation that monitors equipment, ensures quality, and streamlines operations.',
    useCases: [
      'Predictive maintenance scheduling',
      'Automated quality control inspections',
      'Document workflow automation',
      'Supply chain intelligence',
      'Production line optimization',
      'Safety compliance monitoring',
    ],
  },
  {
    name: 'Healthcare',
    icon: 'fa-solid fa-hospital',
    shortDesc: 'Clinical ops automation, patient support, compliance-ready data workflows.',
    expandedDesc: 'Enhance patient care and operational efficiency with AI solutions that automate clinical workflows, support patient interactions, and ensure regulatory compliance.',
    useCases: [
      'Clinical operations automation',
      'Patient support and triage systems',
      'Medical document processing',
      'HIPAA-compliant data workflows',
      'Appointment scheduling optimization',
      'Medical record analysis and insights',
    ],
  },
  {
    name: 'Education',
    icon: 'fa-solid fa-graduation-cap',
    shortDesc: 'Assessment generation, evaluation, learning insights, student experience.',
    expandedDesc: 'Empower educators and students with AI tools that automate assessments, provide personalized learning insights, and enhance the educational experience.',
    useCases: [
      'Automated assessment generation',
      'Performance evaluation and grading',
      'Personalized learning path recommendations',
      'Student engagement analytics',
      'Content creation and curriculum development',
      'Administrative workflow automation',
    ],
  },
  {
    name: 'Enterprise Operations',
    icon: 'fa-solid fa-briefcase',
    shortDesc: 'Process automation, knowledge copilots, analytics and decision support.',
    expandedDesc: 'Streamline enterprise operations with intelligent automation, knowledge management systems, and data-driven decision support tools.',
    useCases: [
      'End-to-end process automation',
      'Enterprise knowledge copilots',
      'Advanced analytics and reporting',
      'Decision support systems',
      'Document management automation',
      'Workflow optimization and routing',
    ],
  },
];

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-emerald-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-blue-500/10 dark:text-blue-300 border border-emerald-200 dark:border-blue-500/20">
              Industry Solutions
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-blue-300">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Practical, production-ready AI solutions tailored for real business environments across industries.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={industry.name}
                  className="group relative rounded-3xl border-2 border-emerald-100 dark:border-slate-800 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-6 transition-all duration-500 hover:border-emerald-400 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-emerald-200/50 dark:hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-blue-500/20 dark:to-blue-600/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <i className={`${industry.icon} text-2xl text-emerald-600 dark:text-blue-400 transition-all duration-500`}></i>
                    </div>
                    {isHovered && (
                      <div className="text-emerald-600 dark:text-blue-400 animate-fade-in">
                        <i className="fa-solid fa-arrow-right text-xl"></i>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white transition-all duration-500">
                    {industry.name}
                  </h3>

                  {/* Short Description - Always Visible */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed transition-all duration-500">
                    {industry.shortDesc}
                  </p>

                  {/* Expanded Content - Shows on Hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isHovered ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-emerald-100 dark:border-slate-800">
                      <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                        {industry.expandedDesc}
                      </p>

                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-emerald-700 dark:text-blue-400 uppercase tracking-wide mb-2">
                          Key Use Cases:
                        </p>
                        <ul className="space-y-2">
                          {industry.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                              <span className="text-emerald-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0">
                                <i className="fa-solid fa-check-circle text-xs"></i>
                              </span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-blue-500/5 dark:to-transparent rounded-3xl transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50/60 dark:bg-slate-900/30 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Not sure where to start?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            We'll help you identify the highest ROI use-cases, pick the right model stack, and plan a secure deployment.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="text-lg px-8 py-4">
              Talk to our team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
