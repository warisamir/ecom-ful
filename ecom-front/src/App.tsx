import {BrowserRouter as Router,Routes ,Route}  from 'react-router-dom'

import { lazy,Suspense } from 'react'
import Loader from './components/loader'
import Header from './components/header'


const Home=lazy(()=>import("./pages/home"))
const Cart=lazy(()=>import("./pages/cart"))
const Search=lazy(()=>import("./pages/search"))
const Shipping=lazy(()=>import('./pages/shipping'))
const Login=lazy(()=>import('./pages/login'))
const Orders=lazy(()=>import('./pages/Orders'))
const OrderDetails=lazy(()=>import('./pages/OrderDetails'))
const Dashboard = lazy(() => import("./pages/Admin/dashboard"));
const Products = lazy(() => import("./pages/Admin/products"));
const Customers = lazy(() => import("./pages/Admin/customers"));
const Transaction = lazy(() => import("./pages/Admin/transaction"));
const Barcharts = lazy(() => import("./pages/Admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/Admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/Admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/Admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/Admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/Admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/Admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./pages/Admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/Admin/management/transactionmanagement")
);

const App = () => {
  return (
    
    <Router>
      <Header/>
      {/* fallback mean to show a compoent while other things are loaded up 
      lazyloading is used to load up components in the background without blocking */}
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Search/>} path='/search'/>
        <Route element={<Cart/>} path='/cart'/>
        {/* not loggid in route */}
        <Route path='/login' element={<Login/>}></Route>

        {/* logging in user route */}
        <Route>
        <Route element={<Shipping/>} path='/shipping'/>
        <Route element={<Orders/>} path='/orders'/>
        <Route element={<OrderDetails/>} path='/order/:id'/>
        </Route>
        <Route
  // element={
  //   <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />
  // }
>
  <Route path="/admin/dashboard" element={<Dashboard />} />
  <Route path="/admin/product" element={<Products />} />
  <Route path="/admin/customer" element={<Customers />} />
  <Route path="/admin/transaction" element={<Transaction />} />
  {/* Charts */}
  <Route path="/admin/chart/bar" element={<Barcharts />} />
  <Route path="/admin/chart/pie" element={<Piecharts />} />
  <Route path="/admin/chart/line" element={<Linecharts />} />
  {/* Apps */}
  <Route path="/admin/app/coupon" element={<Coupon />} />
  <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
  <Route path="/admin/app/toss" element={<Toss />} />

  {/* Management */}
  <Route path="/admin/product/new" element={<NewProduct />} />

  <Route path="/admin/product/:id" element={<ProductManagement />} />

  <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
</Route>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App