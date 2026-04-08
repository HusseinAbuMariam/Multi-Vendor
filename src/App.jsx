import './App.css'
import Home from './components/Home/Home'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Products from './components/Products/Products'
import PageNotFound from './components/Not Found/PageNotFound'
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/products' element={<Products/>}/>
           <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
