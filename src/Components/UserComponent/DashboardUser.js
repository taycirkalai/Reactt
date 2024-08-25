import React , {useEffect}  from "react";
import { Outlet} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Acceuil from "./AcceuilComponent";
import Footer from './Footer'
import Header from "./Header";
function DashboardUserComponent(){
    const loadingScript = (url) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
      }
      useEffect(() => {
        return () => {
          loadingScript("%PUBLIC_URL%/User/plugins/jquery/jquery.js")
          loadingScript("%PUBLIC_URL%/User/plugins/bootstrap/js/bootstrap.min.js")
          loadingScript("%PUBLIC_URL%/User/plugins/counterup/jquery.easing.js")
         loadingScript("%PUBLIC_URL%/User/plugins/slick-carousel/slick/slick.min.js")
          loadingScript("%PUBLIC_URL%/User/plugins/counterup/jquery.waypoints.min.js")
          loadingScript("%PUBLIC_URL%/User/plugins/shuffle/shuffle.min.js")
          loadingScript("%PUBLIC_URL%/User/plugins/counterup/jquery.counterup.min.js")
          loadingScript("%PUBLIC_URL%/User/plugins/google-map/map.js")
          loadingScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA&callback=initMap")
          loadingScript("%PUBLIC_URL%/User/js/script.js")
          loadingScript("%PUBLIC_URL%/User/js/contact.js")
        }
      }, []);
    return (
        <div>
            <Header/>
            <Acceuil/>
            <footer>
  <Footer/>
</footer>
        </div>
    );
}
export default DashboardUserComponent;