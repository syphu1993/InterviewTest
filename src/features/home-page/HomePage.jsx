import Footer from './../../component/section-hompage/footer/Footer';
import Hero from '../../component/section-hompage/hero/Hero';
import About from '../../component/section-hompage/about/About';
import Description from '../../component/section-hompage/description/Description';
import Review from '../../component/section-hompage/review/Review';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Description />
      <Review />
      <Footer />
    </div>
  );
};

export default HomePage;
