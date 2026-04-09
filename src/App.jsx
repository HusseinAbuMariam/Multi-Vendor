import './App.css'
import Home from './components/Home/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products/Products'
import PageNotFound from './components/Not Found/PageNotFound'
import Features from './components/Features/Features'
import Faq from './components/FAQ/Faq'
import Contact from './components/contact/Contact'
import Signup from './components/SginUp/SginUp'

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/features' element={<Features />} />
          <Route path='/FAQ' element={<Faq />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App