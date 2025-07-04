import {
  Hero,
  Footer,
  CustomerReviews,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections';
import Nav from './components/nav'

const App = () => (
  <main className="relative">
    <Nav />
    
    {/* Hero Section */}
    <section id="home" className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>

    {/* Popular Products Section */}
    <section id="products" className="padding bg-gradient-to-b from-white to-gray-50">
      <PopularProduct />
    </section>

    {/* Super Quality Section */}
    <section id="about-us" className="padding bg-white">
      <SuperQuality />
    </section>

    {/* Services Section */}
    <section id="services" className="padding-x py-20 bg-gradient-to-r from-pale-blue to-white">
      <Services />
    </section>

    {/* Special Offer Section */}
    <section id="special-offer" className="padding bg-white">
      <SpecialOffer />
    </section>

    {/* Customer Reviews Section */}
    <section id="reviews" className="padding bg-gradient-to-b from-pale-blue via-primary to-white">
      <CustomerReviews />
    </section>

    {/* Subscribe Section */}
    <section id="subscribe" className="padding-x sm:py-32 py-16 w-full bg-white">
      <Subscribe />
    </section>

    {/* Footer Section */}
    <section id="contact-us" className="bg-gradient-to-b from-gray-900 to-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
