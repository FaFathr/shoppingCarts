import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import DetailsPage from "./Pages/DetailsPage"
import CheckoutPages from "./Pages/CheckoutPages"
import PageNotFound from "./Pages/404"
import ProductProvider from "./context/producContext"
import ProductsProvider from "./context/producContext"
import CartProvider from "./context/CartContext"
import Layout from "./layout/Layout"


function App() {
 
  return (
    <>
  
    <CartProvider>
<ProductsProvider> 
   <Layout>
   <Routes>
    <Route index element={<Navigate to="/products"/>}/>
    <Route path="/products" element={<ProductsPage/>}/>
    <Route path="/products/:id" element={<DetailsPage/>}/>
    <Route path="/checkout" element={<CheckoutPages/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
   </Routes>
   </Layout>
</ProductsProvider>
</CartProvider>

    </>
  )
}

export default App
