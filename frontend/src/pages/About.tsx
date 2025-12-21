import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-emerald-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-blue-500/10 dark:text-blue-300 border border-emerald-200 dark:border-blue-500/20">
              Our Story
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-blue-300">
            About Us
          </h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-blue-500/20 dark:to-blue-600/20 mb-6">
              <i className="fa-solid fa-users text-3xl text-emerald-600 dark:text-blue-400"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Who We Are</h2>
          </div>
          <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-emerald-200/40 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:shadow-blue-500/15">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              At CORTAVIA, we are a team of AI experts, data scientists, and business consultants dedicated to transforming how businesses operate through intelligent automation and cutting-edge AI solutions.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              We believe in thinking beyond traditional AI—not just implementing technology, but creating solutions that drive real value and align with your long-term strategic goals. Our approach combines deep technical expertise with business understanding to deliver solutions that truly make a difference.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Every business is unique, and that's why we take a consultative approach to every project. We work closely with you to understand your challenges, identify opportunities, and build AI solutions that fit seamlessly into your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 bg-emerald-50/60 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-emerald-200/40 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:shadow-blue-500/15">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-blue-500/20 dark:to-blue-600/20 flex items-center justify-center">
                  <i className="fa-solid fa-eye text-2xl text-emerald-600 dark:text-blue-400"></i>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                To be the leading provider of intelligent AI solutions that empower businesses to achieve unprecedented levels of efficiency, innovation, and growth. We envision a future where AI seamlessly integrates into every aspect of business operations, making organizations more agile, data-driven, and customer-centric.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-emerald-200/40 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:shadow-blue-500/15">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-blue-500/20 dark:to-blue-600/20 flex items-center justify-center">
                  <i className="fa-solid fa-bullseye text-2xl text-emerald-600 dark:text-blue-400"></i>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                To deliver practical, production-ready AI solutions that solve real business challenges. We are committed to combining cutting-edge technology with deep industry expertise, ensuring our clients receive solutions that are not just technically advanced, but also strategically aligned with their business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-blue-500/20 dark:to-blue-600/20 mb-6">
              <i className="fa-solid fa-heart text-3xl text-emerald-600 dark:text-blue-400"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-solid fa-lightbulb',
                title: 'Innovation',
                desc: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.',
              },
              {
                icon: 'fa-solid fa-handshake',
                title: 'Partnership',
                desc: "We're not just vendors—we're partners committed to your success. We work closely with you throughout your AI journey.",
              },
              {
                icon: 'fa-solid fa-shield-halved',
                title: 'Integrity',
                desc: 'We maintain the highest standards of ethics, transparency, and security in everything we do, ensuring your data and trust are protected.',
              },
              {
                icon: 'fa-solid fa-rocket',
                title: 'Excellence',
                desc: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable results.',
              },
              {
                icon: 'fa-solid fa-users-gear',
                title: 'Customer-Centric',
                desc: 'Your success is our success. We prioritize understanding your needs and delivering solutions that create real value for your business.',
              },
              {
                icon: 'fa-solid fa-graduation-cap',
                title: 'Continuous Learning',
                desc: 'We stay at the forefront of AI advancements, continuously learning and adapting to bring you the latest innovations and best practices.',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-emerald-100 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-50/50 hover:shadow-xl hover:-translate-y-2 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-blue-500/20 dark:to-blue-600/20 flex items-center justify-center mb-4">
                  <i className={`${value.icon} text-xl text-emerald-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50/60 dark:bg-slate-900/30 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Let's Build Together</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Ready to transform your business with AI? Let's start a conversation.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="text-lg px-8 py-4">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
