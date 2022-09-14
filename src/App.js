import './App.css';
import Cta from './components/CTAsection/Cta';
import Earn from './components/earnsection/Earn';
import Footer from './components/footersection/Footer';
import Hero from './components/herosection/Hero';
import Market from './components/marketsection/Market';
import MarketStatistic from './components/marketstactisticsection/MarketStatistic';
import Navbar from './components/navbarsection/Navbar';
import Why from './components/whysection/Why';

function App() {
  return (
    <div 
    className='
    bg-[#0D0D2B] 
    box-border 
    font-rubik'>
      <Navbar/>
      <Hero/>
      <Why/>
      <Earn/>
      <Market/>
      <MarketStatistic/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
