import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { Lock, Mail, ArrowRight, Loader2 } from "lucide-react";

const Signin = () => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Mock Authentication Logic
        setTimeout(() => {
            try {
                // Simulate backend response
                if (formData.email && formData.password) {
                    const isAdmin = formData.email.includes("admin");
                    const mockUser = {
                        id: isAdmin ? 1 : 2,
                        name: isAdmin ? "Ridwan Admin" : "Ridwan User",
                        email: formData.email,
                        role: isAdmin ? "admin" : "user"
                    };
                    const mockToken = "mock-jwt-token-" + Date.now();

                    login(mockUser, mockToken);

                    if (isAdmin) {
                        navigate('/admin');
                    } else {
                        navigate('/dashboard');
                    }
                } else {
                    throw new Error("Invalid credentials");
                }
            } catch (err) {
                setError("Invalid email or password", err);
            } finally {
                setIsLoading(false);
            }
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-600 p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-blue-100">Sign in to continue to CMS.IO</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Don't have an account?
                        <Link to="/signup" className="text-blue-600 font-semibold hover:underline ml-1">
                            Sign up
                        </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400 text-center">
                        <p>Demo Credentials:</p>
                        <p>Admin: admin@cms.io / password</p>
                        <p>User: user@cms.io / password</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;