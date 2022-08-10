// import './App.css';
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

import LoadingSpinner from './Components/LoadingSpinner/'

const Login = React.lazy(() => import('./Pages/Auth/login'))
const Signup = React.lazy(() => import('./Pages/Auth/signup'))
const Home = React.lazy(() => import('./Pages/Home'))
const ProductOutlet = React.lazy(() => import('./Pages/Products/ProductOutlet'))
const Products = React.lazy(() => import('./Pages/Products'))
const ProductDetail = React.lazy(() => import('./Pages/ProductDetail'))
const Cart = React.lazy(() => import('./Pages/Cart'))
const Profile = React.lazy(() => import('./Pages/Profile'))
const Orders = React.lazy(() => import('./Pages/Orders'))

function App() {
  return (
    <>
      <Layout>
        <Suspense 
          fallback={
            <LoadingSpinner/>
          }
        >
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />

            <Route path='/' element={<Home />} />
            <Route path='products' element={<ProductOutlet />} >
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
            <Route path='cart' element={<Cart />} />
            <Route path='profile' element={<Profile />} />
            <Route path='orders' element={<Orders />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
