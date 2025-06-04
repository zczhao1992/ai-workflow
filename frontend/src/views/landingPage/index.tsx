import Header from "./components/Header"
import Footer from "./components/Footer"
import BannerSection from "./components/banner-section"
import StatsSection from "./components/stats-section"
import FeaturesSection from "./components/features-section"



export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <Header />

            <main className="flex-1 pt-16">
                {/* Banner Section */}
                <BannerSection />

                {/* Stats Section */}
                <StatsSection />

                {/* Features Section */}
                <FeaturesSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}