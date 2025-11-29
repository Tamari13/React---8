import Header from '../Second/Header/Header';
import Hero from '../Second/Hero/Hero';
import Featured from '../Second/Featured/Featured';
import News from '../Second/News/News';
import LauncherSection from '../Second/LauncherSection/LauncherSection';
import Footer from '../Second/Footer/Footer';

const SecondTask = () => {
  return (
    <div className="bg-black text-white w-full">
      <Header />
      <Hero />
      <Featured />
      <News />
      <LauncherSection />
      <Footer />
    </div>
  );
};

export default SecondTask;
