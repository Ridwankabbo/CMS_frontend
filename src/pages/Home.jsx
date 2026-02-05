import React from "react";
import { Link } from "react-router-dom";
import { Layout, Zap, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
);

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-32">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white z-0"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 animate-fade-in-up">
                        v2.0 is now live 🚀
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-tight">
                        Build your dream <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">website in minutes.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                        No coding required. Choose from 100+ professionally designed templates and customize them to fit your brand perfectly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/signup" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-200 flex items-center gap-2">
                            Start Building Free
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                            View Demo
                        </Link>
                    </div>

                    {/* Mock Browser UI */}
                    <div className="mt-20 relative mx-auto max-w-5xl">
                        <div className="bg-gray-900 rounded-t-2xl p-4 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="mx-auto bg-gray-800 text-gray-400 text-xs px-4 py-1.5 rounded-full w-64 text-center font-mono">
                                cms.io/your-site
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                            alt="Agency Dashboard"
                            className="w-full rounded-b-2xl shadow-2xl border border-gray-200"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to launch</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Powerful features to help you build, manage, and scale your online presence without the headache.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Layout}
                            title="Drag & Drop Builder"
                            description="Intuitive visual editor allows you to move elements freely and see changes in real-time."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Lightning Fast"
                            description="Websites generated with CMS.IO are optimized for speed, ensuring top Google Core Vital scores."
                        />
                        <FeatureCard
                            icon={Smartphone}
                            title="Mobile Responsive"
                            description="Every template looks amazing on all devices, from desktop monitors to mobile phones."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to start your journey?</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                            Join thousands of creators who are building the next generation of websites with CMS.IO.
                        </p>
                        <Link to="/signup" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-lg transition-all relative z-10">
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;