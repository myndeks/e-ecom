import Nav from '../../templates/nav';
import Footer from '../../templates/footer';
import Header from '../../templates/header';
import Products from '../../templates/products';
import TopInfo from '../../templates/top_info';
import ModuleOne from '../../templates/module_1';

function MainPage () {
  return (
    <div>
      <TopInfo />
      <Nav/>
      <Header/>
      <ModuleOne />
      <Products/>
      <Footer />
    </div>
  );
}

export default MainPage;
