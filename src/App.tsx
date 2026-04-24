import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
// import VRPreloader from "./components/VrPreloader";
// import { useEffect, useState } from "react";

export default function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000);
  // }, []);
  return (
    <>
   {/* {loading && <VRPreloader />} */}
      
      <Navbar />
      <HeroSlider />
      <Videos />
      <Footer />
    </>
  );
}
