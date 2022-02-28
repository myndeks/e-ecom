import SignleProduct from '../../single_product';
import Nav from '../../templates/nav';
import Header from '../../templates/header';
import Footer from '../../templates/footer';


function SignleProductPage () {
  return (
    <div>
      <Nav />
      <SignleProduct/>
      <Footer />
    </div>
  );
}

export default SignleProductPage;
