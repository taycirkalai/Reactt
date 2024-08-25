import NavBar from "../ResponsableComponent/LayoutResponsable/Navbar";
import SideBar from "../ResponsableComponent/LayoutResponsable/SideBar";
import React , {useEffect}  from "react";
import { Outlet} from "react-router-dom";
import Footer from "../ResponsableComponent/LayoutResponsable/Footer";
function DashboardRespComponent(){
 
  const loadingScript = (url) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }
  useEffect(() => {
    return () => {
      loadingScript("https://code.jquery.com/jquery-3.4.1.min.js")
      loadingScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js")
      loadingScript("Admin/lib/chart/chart.min.js")
      loadingScript("Admin/lib/easing/easing.min.js")
      loadingScript("Admin/lib/waypoints/waypoints.min.js")
      loadingScript("Admin/lib/owlcarousel/owl.carousel.min.js")
      loadingScript("Admin/lib/tempusdominus/js/moment.min.js")
      loadingScript("Admin/lib/tempusdominus/js/moment-timezone.min.js")
      loadingScript("Admin/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js")
      loadingScript("Admin/js/main.js")
    }
  }, []);
return(
 <div>
    <SideBar/>
    <div className="content">
      <NavBar/>

    <Outlet/>
   </div>    
        
<footer>
  <Footer/>
</footer>
</div>

);
}
export default DashboardRespComponent;

