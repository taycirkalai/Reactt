import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";

export default function ViewUser() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

  const { id_user } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/personnem/m/${id_user}`);
    setUser(result.data);
  };
  const divStyle1 = {
    color: '#34AFE4',
    marginLeft: '25%'
  };
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle1}className="text-center m-4">PERSONNE MORALE DETAILS</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>IDENTIFIANT :  </b> 
                  {user.id_user}
                </li>
                <li className="list-group-item">
                  <b>NOM :  </b>
                  {user.nom}
                </li>
                <li className="list-group-item">
                  <b>PRENOM :  </b>
                  {user.prenom}
                </li>
                <li className="list-group-item">
                  <b>EMAIL  : </b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>DATE DE NAISSANCE  : </b>
                  {new Date(user.date_nais).toLocaleDateString()}
                </li>
                <li className="list-group-item">
                  <b>TELEPHONE  : </b>
                  {user.mobile}
                </li>
                <li className="list-group-item">
                  <b>TYPE DE SANG  : </b>
                  {user.type_sang}
                </li>
                <li className="list-group-item">
                  <b>SEXE  : </b>
                  {user.sexe}
                </li>
                <li className="list-group-item">
                  <b>NOM D'ENTREPRISE  : </b>
                  {user.nom_entreprise}
                </li>
                <li className="list-group-item">
                  <b>LOCALISATION D'ENTREPRISE  : </b>
                  {user.localisation}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ListUserspm"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}