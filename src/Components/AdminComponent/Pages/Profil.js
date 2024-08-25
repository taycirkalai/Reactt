import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";

export default function ProfilAdmin() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [admin, setAdmin] = useState({
    id: "", 
    email: "",
    password:""
  });
  const { id } = useParams();
  console.log(id);
  
  useEffect(() => {
    if (id) {
      loadAdmin();
    } else {
      // Gérer le cas où l'ID est manquant
      console.log("ID manquant");
    }
  }, [id]);
  
  
  const loadAdmin = async () => {
    if (id) {
      const result = await axios.get(`http://localhost:8080/api/admin/1`);
      setAdmin(result.data);
    }
  };
  
  
  
  
  
  const divStyle1 = {
    color: '#34AFE4',
    marginLeft: '25%'
  };
  const divStyle = {
    marginLeft: '2%',
    marginTop:'60px'
  };
  const stylebtn={
    marginTop:"5%"
   }
  return (
    <div className="container" style={divStyle}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle1}className="text-center m-4">MON PROFIL</h2>

          <div className="card">
         
            <div className="card-header">
            
            <br/>
            MON IDENTIFIANT  : {admin.id}

              <ul className="list-group list-group-flush">
             
                <li className="list-group-item">
                  <b>EMAIL :  </b>
                  {admin.email}
                </li>
                <li className="list-group-item">
               <b>PASSWORD :   </b>
                     {admin.password}
                  </li>
              </ul>
              <br/>
              <div className="row">
            
            <p className="mb-0"> <Link 
              to={`/ChangerPasswordAdm/${id}`}
            >Paramétre avancé</Link> </p>
         
        </div>
              <Link   to={"/wlcAd"}>
          <i style={stylebtn}class="fa fa-chevron-left"></i>
          </Link>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}