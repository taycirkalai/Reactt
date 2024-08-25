import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";

export default function ViewDmdAmb() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginR')
    }
  }, [])
  const [demandeAmb, setDmdAmb] = useState({
    personnePhysique:{
      nom:"",
      prenom:"",
      email:"",
      mobile:"",
      date_nais:"",
      sexe:"",
      type_sang:""

    },
    experience: "",
    date_dmd: "",
    etat_demande: "",

  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    loadDmdAmb();
  },[]);
  const loadDmdAmb = async () => {
    const result = await axios.get(`http://localhost:8080/api/demandeAm/${id}`);
    setDmdAmb(result.data);
  };
  
  const divStyle1 = {
    color: '#34AFE4',
    marginLeft: '25%'
  };
  const imgStyle={
    width:"350px",
    height:"300px"
  }
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle1}className="text-center m-4">Details De demande d'ambassadeur</h2>

          <div className="card">
            <div className="card-header">
              
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>IDENTIFIANT :  </b> 
                  {demandeAmb.id_am}
                </li>
                <li className="list-group-item">
                  <b>NOM :  </b>
                  {demandeAmb.personnePhysique.nom}
                </li>
                <li className="list-group-item">
                  <b>PRENOM :  </b>
                  {demandeAmb.personnePhysique.prenom}
                </li>
                <li className="list-group-item">
                  <b>EMAIL :  </b>
                  {demandeAmb.personnePhysique.email}
                </li>
                <li className="list-group-item">
                  <b>MOBILE :  </b>
                  {demandeAmb.personnePhysique.mobile}
                </li>
                <li className="list-group-item">
                  <b>DATE DE NAISSANCE :  </b>
                  {new Date(demandeAmb.personnePhysique.date_nais).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}
                </li>
                <li className="list-group-item">
                  <b>SEXE :  </b>
                  {demandeAmb.personnePhysique.sexe}
                </li>
                <li className="list-group-item">
                  <b>TYPE DE SANG :  </b>
                  {demandeAmb.personnePhysique.type_sang}
                </li>
                <li className="list-group-item">
                  <b>EXPERIENCE :  </b>
                  {demandeAmb.experience}
                </li>
                <li className="list-group-item">
                  <b>DATE DE DEMANDE :  </b>
                  {new Date(demandeAmb.date_dmd).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}
                </li>
                <li className="list-group-item">
                  <b>ETAT DE DEMANDE :  </b>
                  {demandeAmb.etat}
                </li>
              
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ListAmbAccepter"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}