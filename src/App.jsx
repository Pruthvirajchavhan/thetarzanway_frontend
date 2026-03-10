import BestPicks from "./components/BestPicks"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import HeroSection from "./components/Hero"
import Navbar  from "./components/Navbar"
import WhyDifferent from "./components/WhyDifferent"

export default function App() {
  return <>
    <Navbar/>
    <HeroSection/>
    <WhyDifferent/>
    <BestPicks/>
    <FAQ/>
    <Footer/>
  </>
}