
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhyChoose from './components/WhyChoose'
import OurWorks from './components/OurWorks'
import Partners from './components/Partners'
import GetMore from './components/GetMore'
import FooterPartOne from './components/FooterPartOne'
import FooterPartTwo from './components/FooterPartTwo'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <WhyChoose/>
      <OurWorks/>
      <Partners/>
      <GetMore/>
      <FooterPartOne/>
      <FooterPartTwo/>
    </div>
  )
}

export default App
