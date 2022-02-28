import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainPage from './components/pages/main';
import SignleProductPage from './components/pages/single_product_page';
import AddToCart from './components/chechout/cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/:id" element={<SignleProductPage/>}/>
        <Route path="/chechout" element={<AddToCart/>}/>
      </Routes>
    </div>
  );
}

export default App;
