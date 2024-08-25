import '../../LoginUser.css';
import axios from 'axios';
import { useState  } from "react";
import { useNavigate } from 'react-router-dom';
function RestPasswordPh (){
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetStatus, setResetStatus] = useState('');
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const API_BASE_URL="http://localhost:8080/api/user/personneph";

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API_BASE_URL}/reset-password`, { email, newPassword })
      .then((response) => {
        navigate('/LoginPH');
        setResetStatus(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
        if (error.response.data === "email does not exist ") {
          setEmailError("Email n'exsiste pas");
      }
   })
  };
  return(
    
    <div>
<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-9 col-lg-8 col-xl-6">
        <img src="images/don.jpg" className="img-fluid" alt="Phone image" />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <center><h2 style={{marginTop:'-1%'}}>Réinitialiser mot de passe </h2></center>
          <br/>
          {resetStatus && <p style={{color:"green"}}>{resetStatus}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
         
          <label className="form-label" htmlFor="form1Example13" >Email</label>
          <input type="email" id="form1Example13" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />
          {emailError && <p style={{color:"red"}}>{emailError}</p>}
                </div>
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example13">Nouveau mot de passe</label>
          <input type="password" id="form1Example13" onChange={(e) => setNewPassword(e.target.value)} className="form-control form-control-lg" />
                  
                </div>
          {/* Submit button */}
          <button type="reset" className="btn btn-danger btn-lg " style={{marginLeft:'70px'}}>Annuler</button><><> </></>
          <button type="submit" className="btn btn-success btn-lg ">Réinitialiser</button> 
           
        
        
        </form>
      </div>
    </div>
  </div>
</section>


    </div>)
    
}
export default RestPasswordPh;
