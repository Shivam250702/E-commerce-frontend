import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Cart from './features/Cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/Cart/cartSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/UserSlice';
import ForgotPasswordPage from './pages/ForgotPasswordpage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage copy';
import Productform from './features/product-list copy/components/ProductForm';
import AdminProductFormPage from './pages/AdminProductFormPage';
import Logout from './features/auth/components/Logout';
import AdminOrdersPage from './pages/AdminOrdersPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/cart',
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: '/profile',
    element: (
      <Protected>
        <UserProfilePage></UserProfilePage>{' '}
      </Protected>
    ),
  },
  {
    path: '/logout',
    element: (
      <Logout></Logout>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <ForgotPasswordPage></ForgotPasswordPage>
    ),
  },
  {
    path: '/checkout',
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  {
    path: '/admin/product-detail/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/order-success/:id',
    element: (
      <Protected>
        <OrderSuccessPage></OrderSuccessPage>{' '}
      </Protected>
    ),
  },
  {
    path: '/orders',
    element: (
      <Protected>
        <UserOrdersPage></UserOrdersPage>{' '}
      </Protected>
    ),
  },
  {
    path: '*',
    element: (
      <PageNotFound></PageNotFound>
    ),
  },
]);

function App() {
  const notify = () => toast("Wow so easy!");
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync());
      // we can get req.user by token on backend so no need to give in front-end
     dispatch(fetchLoggedInUserAsync());
    }
  },[dispatch, user])

  return (
    <div className="App">
  
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;