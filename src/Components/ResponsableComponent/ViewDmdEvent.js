import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";

export default function ViewDmdEvent() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginR')
    }
  }, [])
  const [demandeEvent, setDmdEvent] = useState({
    nom_entreprise: "",
    localisation: "",
    nombre_colab: "",
    commentaire: "",
    etat_demande: "",
    date_demande:"",
    date_event:"",

  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    loadDmdEvent();
  },[]);
  const loadDmdEvent = async () => {
    const result = await axios.get(`http://localhost:8080/api/event/${id}`);
    setDmdEvent(result.data);
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
          <h2 style={divStyle1}className="text-center m-4">Details D'une demande d'évenement</h2>

          <div className="card">
            <div className="card-header">
              
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>IDENTIFIANT :  </b> 
                  {demandeEvent.id_event}
                </li>
                <li className="list-group-item">
                  <b>NOM D'ENTREPRISE :  </b>
                  {demandeEvent.personneMorale?.nom_entreprise}
                </li>
                <li className="list-group-item">
                  <b>LOCALISATION :  </b>
                  {demandeEvent.personneMorale?.localisation}
                </li>
                <li className="list-group-item">
                  <b>NOMBRE DE COLLABORATEURS :  </b>
                  {demandeEvent.nombre_colab}
                </li>
                <li className="list-group-item">
                  <b>COMMENTAIRE :  </b>
                  {demandeEvent.commentaire}
                </li>
                <li className="list-group-item">
                  <b>ETAT DE DEMANDE :  </b>
                  {demandeEvent.etat_demande}
                </li>
                <li className="list-group-item">
                  <b>DATE D'EVENEMENT :  </b>
                  {new Date(demandeEvent.date_event).toLocaleDateString()}
                </li>
                <li className="list-group-item">
                  <b>DATE DE DEMANDE :  </b>
                  {new Date(demandeEvent.date_demande).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}
                </li>
                

              
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/listdmdEventResp"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}