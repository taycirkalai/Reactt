import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";

export default function ViewCentre() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [centre, setCentre] = useState({
    name_centre: "",
    lieu_centre: "",

  });
  const { id_centre } = useParams();
  console.log(id_centre);
  useEffect(() => {
    loadCentre();
  },[]);
  const loadCentre = async () => {
    const result = await axios.get(`http://localhost:8080/api/centre/${id_centre}`);
    setCentre(result.data);
  };
  
  const divStyle1 = {
    color: '#34AFE4',
    marginLeft: '25%'
  };
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle1}className="text-center m-4">Centre Details</h2>

          <div className="card">
            <div className="card-header">
              
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>IDENTIFIANT :  </b> 
                  {centre.id_centre}
                </li>
                <li className="list-group-item">
                  <b>NOM :  </b>
                  {centre.name_centre}
                </li>
                <li className="list-group-item">
                  <b>LIEU :  </b>
                  {centre.lieu_centre}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ListCentre"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}