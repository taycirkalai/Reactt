import axios from 'axios';
import { Link} from 'react-router-dom';

import { useState  } from "react";
function ResetPasswordComponent() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [resetStatus, setResetStatus] = useState('');
    
  const [emailError, setEmailError] = useState("");
    const API_BASE_URL="http://localhost:8080/api/medecin";

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post(`${API_BASE_URL}/reset-password`, { email, newPassword })
        .then((response) => {
          setResetStatus(response.data);
        })
        .catch((error) => {
            console.error(error.response.data);
            if (error.response.data === "email does not exist ") {
              setEmailError("Email n'exsiste pas");
          }
       })
    };
    const img={
        height:'130px',
        weidth:'130px',
        marginLeft:'90px',
        
    }
    const sin={
    marginTop:'10px',
    marginLeft:'10px'
    }
      return(
        <div className="container-fluid">
    <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
     <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
       <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
       <img style={img}src="images/logoMed.png" alt="img" ></img>
         <div className="d-flex align-items-center justify-content-between mb-3">
         <h3 style={sin}>Réinitialiser mot de passe</h3>
          
           <br></br>
         </div>
        {resetStatus && <p style={{color:"green"}}>{resetStatus}</p>}
         <form action="#" className="space-y-6" onSubmit={handleSubmit}>
         <div className="form-floating mb-3">
           <input type="email" className="form-control"  onChange={(e) => setEmail(e.target.value)} required />
           <label htmlFor="floatingInput">Votre adresse email</label>
           {emailError && <p style={{color:"red"}}>{emailError}</p>}
         </div>
         <div className="form-floating mb-4">
           <input type="password" className="form-control" id="floatingPassword"onChange={(e) => setNewPassword(e.target.value)} required />
           <label htmlFor="floatingPassword">Nouveau mot de passe</label>
         </div>
        
         <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Réinitialiser</button>
         <Link  to={"/LoginM"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
         </form>
       </div>

     </div>
    </div>
    </div>
    
     )
}

export default ResetPasswordComponent;