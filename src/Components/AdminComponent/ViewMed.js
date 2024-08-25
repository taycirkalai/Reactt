import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";

export default function ViewMed() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [Med, setMed] = useState({
    name: "",
    email: "",
    centre:{
      name_centre:"",
      lieu_centre:"",
    }
  });

  const { id_med } = useParams();
  useEffect(() => {
    loadMed();
  }, []);
  const loadMed = async () => {
    const result = await axios.get(`http://localhost:8080/api/medecin/${id_med}`);
    setMed(result.data);
  };
  const divStyle1 = {
    color: '#34AFE4',
    marginLeft: '25%'
  };
  const cont={
    marginTop:'60px'
  }
 
  return (
    <div className="container"style={cont}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle1}className="text-center m-4">MEDECIN DETAILS</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>IDENTIFIANT :  </b> 
                  {Med.id_med}
                </li>
                <li className="list-group-item">
                  <b>NOM :  </b>
                  {Med.name}
                </li>
                <li className="list-group-item">
                  <b>EMAIL  : </b>
                  {Med.email}
                </li>
                <li className="list-group-item">
                  <b>CENTRE OU IL TRAVAIL  : </b> 
                  {Med.centre.name_centre} 
                </li>
                <li className="list-group-item">
                  <b>LIEU DE CENTRE : </b> 
                  {Med.centre.lieu_centre} 
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ListMed"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}