import { useState } from "react";
import Footer from "./compoenets/Footer";
import Itemsnavigator from "./compoenets/Itemsnavigator";
import Slider from "./compoenets/Slider";
import Navbar from "./compoenets/navbar";
import Drawer from "./compoenets/Drawer";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const [productObject, setproductObject] = useState(null);
  const drawerState = useSelector((state) => state.Drawer.drawer);

  return (
    <>
     <Navbar displayrightnav={true} />
      <Slider />
      <div className="container max-w-1500px mx-auto">
        <Itemsnavigator setproductObject={setproductObject} />
        <Footer />
      </div>
      {drawerState && <Drawer className=" duration-200 transition-all" />}
   
    </>
     
  );
}

export default App;
