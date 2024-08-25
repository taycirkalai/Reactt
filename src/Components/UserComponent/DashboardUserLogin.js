import React , {useEffect}  from "react";
import { Link, Outlet} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Acceuil from "./AcceuilComponent";
import Footer from './Footer'
import Header from "./Header";
import '../../Rdv.css';

function DashboardUserloginnComponent(){
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
          loadingScript("%PUBLIC_URL%/User/js/script.js")
          loadingScript("%PUBLIC_URL%/User/js/contact.js")
        }
      }, []);
    return (
        <div>
            <Header/>
            <div className="cadre">
  <center><p ><Link to="/Rdv" style={{color:'white'}}>PRENDS<br/>
RENDEZ-VOUS</Link></p></center> 
</div>
            <Acceuil/>
            <footer>
  <Footer/>
</footer>
        </div>
    );
}
export default DashboardUserComponent;