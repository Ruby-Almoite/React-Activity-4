
import RootLayout from "./shared/components/Layouts/RootLayout";
import  {Routes ,Route} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutCars from "./pages/Cars";
import Contacts from "./pages/ContactUs";
const App =() => {
  return (

<RootLayout> 
<Routes>

      <Route path = "/"element={<HomePage />} />

      <Route path = "/Cars" element={<AboutCars />} />

      <Route path = "/ContactUs" element={<Contacts />} />


</Routes>
  
  

</RootLayout>
  );
}

export default App;
