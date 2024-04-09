import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/*
  Dashboards
*/
import { CustomerDashBoard } from './screen/dashboard/CustomerDashBoard';
import AdminDashboard from './screen/dashboard/AdminDashboard';
import SellerDashboard from './screen/dashboard/SellerDashboard';


/*
  customer pages
*/
import Home from './screen/customer/home';
import Login from './screen/customer/login';
import Register from './screen/customer/register';
import Profile from './screen/customer/profile';


/*
  shop pages 
*/
import ShopHomePage from './screen/shop/Shop';

/*
  shop pages
  permanent shop pages
*/
import PermanentShopDashboard from './screen/shop/permanent_shop/ShopTable';
import PermenentShopHome from './screen/shop/permanent_shop/shop';
import PermanentShopHomePage from './screen/shop/permanent_shop/shopList';

/*
  shop pages
  temporary shop pages
*/
import TemporaryShopDashboard from './screen/shop/temporary_shop/ShopTable'; 
import TemporaryShopHomePage from './screen/shop/temporary_shop/ShopList';


/*
  seller pages
*/
import SellerTable from './screen/seller/SellerTable';
import SellerForm from './screen/seller/sellerForm';

/*
  Stall seeker pages
*/
import StallSeekerTable from './screen/stallSeeker/StallSeekerTable';

/*
  cart pages
*/
import CartPage from './screen/cart/cart';


/*
  Event pages
*/
import InteractiveMallEventDashboard from './screen/event/eventTable';
import InteractiveMallEventHomePage from './screen/event/eventList';

/*
  item pages
*/
import ItemHome from './screen/shop/ItemTable';
import ItemView from './screen/item/ItemView';

/**
 * main application function
 * @returns App
 */
function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<CustomerDashBoard />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/shop_dashboard" element={<PermenentShopHome />} />

          <Route path="/login"  element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/shop" element={<ShopHomePage />} />

          <Route path="/permenentshop" element={<PermenentShopHome />} />
          <Route path="/permenentshop_table" element={<PermanentShopDashboard />} />
          <Route path="/permenentshop_home" element={<PermanentShopHomePage />} />
          
          <Route path="/temporyshop_table" element={<TemporaryShopDashboard />} />          
          <Route path="/temporyshop_home" element={<TemporaryShopHomePage />} />

          <Route path="/seller_table" element={<SellerTable />} />
          <Route path="/add_seller" element={<SellerForm />} />

          <Route path="/stallseeker_table" element={<StallSeekerTable />} />

          <Route path="/event_table" element={<InteractiveMallEventDashboard />} />
          <Route path="/event_home" element={<InteractiveMallEventHomePage />} />

          <Route path="/item_table" element={<ItemHome />} />

          <Route path="/item/:id" element={<ItemView />} />

          <Route path="/cart" element={<CartPage />} />



        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
