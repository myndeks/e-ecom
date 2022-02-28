import Nav from '../../templates/nav';
import Footer from '../../templates/footer';
import Header from '../../templates/header';
import Products from '../../templates/products';


function MainPage () {
  return (
    <div>
      <Nav/>
      <Header/>
      <Products/>
      <Footer />
    </div>
  );
}

export default MainPage;
