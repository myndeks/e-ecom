import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainPage from './components/pages/main';
import SignleProductPage from './components/pages/single_product_page';
import CheckoutPage from './components/pages/checkout_page'
import CheckoutPageStepOne from './components/pages/checkout_page_step_one'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/:id" element={<SignleProductPage/>}/>
        <Route path="/chechout" element={<CheckoutPage/>}/>
        <Route path="/checkout/step1" element={<CheckoutPageStepOne/>}/>
      </Routes>
    </div>
  );
}

export default App;
