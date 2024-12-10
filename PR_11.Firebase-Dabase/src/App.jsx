import Blog from "./Component/Blog";
import Categories from "./Component/Categories";
import Deal from "./Component/Deal";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import HeroSlider from "./Component/HeroSlider";
import MobileMenu from "./Component/MobileMenu";
import PopularProduct from "./Component/PopularProduct";
import ProductBanner from "./Component/ProductBanner";
import SectionPopular from "./Component/SectionPopular";
import Services from "./Component/Services";
import Testimonial from "./Component/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <HeroSlider />
      <Categories />
      <PopularProduct />
      <ProductBanner />
      <Services />
      <Deal />
      <SectionPopular />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;