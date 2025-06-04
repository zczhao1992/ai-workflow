import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, BarChart3, GitBranch, Monitor, Users } from "lucide-react"
import { motion } from "framer-motion"

const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
}

const cardHover = {
    whileHover: {
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
    transition: { type: "spring", stiffness: 300, damping: 20 },
}


export default function FeaturesSection() {
    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Everything you need for LLM Operations</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From deployment to monitoring, we've got every aspect of your LLM lifecycle covered.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.div variants={staggerItem} {...cardHover}>
                        <Card className="border-gray-200 h-full">
                            <CardHeader>
                                <motion.div
                                    className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Zap className="h-6 w-6 text-white" />
                                </motion.div>
                                <CardTitle className="text-black">Lightning Fast Deployment</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Deploy your models in seconds with our optimized infrastructure and auto-scaling capabilities.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    <motion.div variants={staggerItem} {...cardHover}>
                        <Card className="border-gray-200 h-full">
                            <CardHeader>
                                <motion.div
                                    className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <BarChart3 className="h-6 w-6 text-white" />
                                </motion.div>
                                <CardTitle className="text-black">Real-time Monitoring</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Track performance, costs, and usage patterns with comprehensive analytics and alerting.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    <motion.div variants={staggerItem} {...cardHover}>
                        <Card className="border-gray-200 h-full">
                            <CardHeader>
                                <motion.div
                                    className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Shield className="h-6 w-6 text-white" />
                                </motion.div>
                                <CardTitle className="text-black">Enterprise Security</CardTitle>
                                <CardDescription className="text-gray-600">
                                    SOC 2 compliant with end-to-end encryption, VPC support, and advanced access controls.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    <motion.div variants={staggerItem} {...cardHover}>
                        <Card className="border-gray-200 h-full">
                            <CardHeader>
                                <motion.div
                                    className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <GitBranch className="h-6 w-6 text-white" />
                                </motion.div>
                                <CardTitle className="text-black">Version Control</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Manage model versions, rollbacks, and A/B testing with built-in experiment tracking.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    <motion.div variants={staggerItem} {...cardHover}>
                        <Card className="border-gray-200 h-full">
                            <CardHeader>
                                <motion.div
                                    className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Monitor className="h-6 w-6 text-white" />
                                </motion.div>
                                <CardTitle className="text-black">Multi-Cloud Support</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Deploy across AWS, GCP, and Azure with unified management and cost optimization.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    <motion.div variants={staggerItem} {...cardHover}>
                        <Card className="border-gray-200 h-full">
                            <CardHeader>
                                <motion.div
                                    className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Users className="h-6 w-6 text-white" />
                                </motion.div>
                                <CardTitle className="text-black">Team Collaboration</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Built-in collaboration tools with role-based access and shared workspaces.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}