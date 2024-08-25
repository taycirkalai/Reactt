import axios from 'axios';
import { useState  } from "react";
import { useNavigate } from 'react-router-dom';
function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate();
  const navigate = useNavigate();
  const ADMIN_API_BASE_URL="http://localhost:8080/api/admin";
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${ADMIN_API_BASE_URL}/login`, { email, password },
      {
        headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    }})
    .then((response) => {
      navigate('/wlcAd');
      console.log(response.data);
      localStorage.setItem('token' ,response.data )      })
    .catch((error) => {
      //alert ('error')
  
        console.error("email or password invalid");
        alert('verifier votre donner')
      
    });
  };
  const img={
        height:'80px',
        weidth:'80px',
        marginLeft:'120px'
  }
  const sin={
    marginTop:'10px',
    marginLeft:'105px'
}

    return(
       <div className="container-fluid">
  <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
      <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
      <img style={img}src="images/Logo_Ministère.png" alt="img" ></img>
        <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 style={sin}>Connexion</h3>
         
          <br></br>
        </div>

        <form action="#" className="space-y-6"onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" value={email}onChange={(event) => setEmail(event.target.value)}id="floatingInput" required />
          <label htmlFor="floatingInput">Adresse Email</label>
        </div>
        <div className="form-floating mb-4">
          <input type="password" className="form-control"value={password}  onChange={(event) => setPassword(event.target.value)} id="floatingPassword" required/>
          <label htmlFor="floatingPassword">Mot de passe </label>
        </div>
       
        <button type="submit" className="btn btn-danger py-3 w-100 mb-4">Connexion</button>
        </form>
      </div>
    </div>
  </div>
</div>

    )
    }

export default LoginComponent;