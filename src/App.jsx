import './App.css'
import Fvendors from './components/fvendor/Fvendors'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Popularcategory from './components/popularcategory/Popularcategory'
import Footer from './components/footer/Footer'
import LatestProducts from './components/Latest Products/Latest Products'
import Features from './components/Features/Features'



function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Fvendors/>
      <Popularcategory/>
      <LatestProducts/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App
