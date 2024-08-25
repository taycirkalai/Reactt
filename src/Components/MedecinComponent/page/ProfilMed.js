import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";

export default function ProfilMed() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginM')
    }
  }, [])
  const [medecin, setMed] = useState({
    email: "",
    name: "",
    centre:{
        name_center:""
    } ,
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    loadMed();
  },[]);
  const loadMed = async () => {
    const result = await axios.get(`http://localhost:8080/api/medecin/${id}`);
    setMed(result.data);
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
            <Link 
                  to={`/EditMed/${id}`}>
            <i class="icofont-pencil-alt-2" style={{marginLeft:"450px" , marginTop:"20px"}}></i></Link>
            <br/>
            MON IDENTIFIANT  : {medecin.id_med} 
            
              <ul className="list-group list-group-flush">
             
                <li className="list-group-item">
                  <b>EMAIL :  </b>
                  {medecin.email}
                </li>
                <li className="list-group-item">
                  <b>NOM :  </b>
                  {medecin.name}
                </li>
                <li className="list-group-item">
               <b>CENTRE :   </b>
                     {medecin.centre.name_centre}
                  </li>

              
              </ul>
              <br/>
              
              <div className="row">
            
            <p className="mb-0"> <Link 
              to={`/ChangerPasswordMed/${id}`}
            >Paramétre avancé</Link> </p>
         
        </div>
              <Link   to={"/wlcMed"}>
          <i style={stylebtn}class="fa fa-chevron-left"></i>
          </Link>
            </div>
          </div>
         
        </div>
      </div>
      
    </div>
  );
}