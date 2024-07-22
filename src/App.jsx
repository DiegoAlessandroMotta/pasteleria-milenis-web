import { Home } from '@/pages/Home'
import { Products } from '@/pages/Products'
import "@/ui/app.css"
import "@fontsource-variable/inter"
import { Route, Routes } from 'react-router-dom'
import { Contact } from './pages/Contact'
import { Product } from './pages/Product'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
