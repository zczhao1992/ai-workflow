import { Button } from "@/components/ui/button"
import { useNavigate } from "@tanstack/react-router";
import { Cpu } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {

    const navigate = useNavigate();

    return (
        <motion.header
            className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white/80 backdrop-blur-md fixed w-full z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => navigate({ to: '/' })}
                >
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <Cpu className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-black">AI-WorkFlow</span>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        Features
                    </a>

                    <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        Pricing
                    </a>

                    <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        Docs
                    </a>

                    <Button variant="outline" className="border-gray-300">
                        Sign In
                    </Button>

                    <Button className="bg-black hover:bg-gray-800" onClick={() => navigate({ to: '/' })}>Get Started</Button>
                </nav>
            </div>
        </motion.header>
    )
}