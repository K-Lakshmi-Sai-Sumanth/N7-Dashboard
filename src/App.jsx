import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SolutionsSection from './components/SolutionsSection'
import DashboardShowcaseSection from './components/DashboardShowcaseSection'
import DigitalBankingSection from './components/DigitalBankingSection'
import InsightsAndCaseStudiesSection from './components/InsightsAndCaseStudiesSection'
import PaperlessCTASection from './components/PaperlessCTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#071018]">
      <Header />

      <main>
        <HeroSection />
        <SolutionsSection />
        <DashboardShowcaseSection />
        <DigitalBankingSection />
        <InsightsAndCaseStudiesSection />
        <PaperlessCTASection />



      </main>

      <Footer />
    </div>
  )
}

export default App
