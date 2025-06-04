import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useNavigate } from "@tanstack/react-router";


export default function BannerSection() {

    const navigate = useNavigate();

    return (
        <section className="py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Badge variant="outline" className="mb-6 border-gray-300 text-gray-600">
                        🚀 Now in Public Beta
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    The Complete
                    <br />
                    <motion.span
                        className="text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        LLM Operations
                    </motion.span>
                    <br />
                    Platform
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Deploy, monitor, and scale your large language models with confidence. Built for AI teams who demand
                    reliability, performance, and control.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <motion.div>
                        <Button size="lg" onClick={() => navigate({ to: '/apps' })} className="bg-black hover:bg-gray-800 text-white px-8">
                            Get Started
                            <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                            >
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.div>
                        </Button>
                    </motion.div>

                </motion.div>

                <motion.div
                    className="flex items-center justify-center space-x-8 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                        <CheckCircle className="h-4 w-4" />
                        <span>Free tier available</span>
                    </motion.div>
                    <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                        <CheckCircle className="h-4 w-4" />
                        <span>No credit card required</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}