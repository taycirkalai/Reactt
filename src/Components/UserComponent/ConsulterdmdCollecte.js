import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export default function ConsulterdmdCollecte() {

 const [demandeEvent, setDemandeEvent] = useState([]);
 const navigate = useNavigate()
 useEffect(() => {
  if (!localStorage.getItem('token')) {
    navigate('/loginPM')
  }
}, [])
 useEffect(() => {
  const fetechDemandeEventByPm=async()=>{
  const idpm= localStorage.getItem("id_user");
  const response=await axios.get(`http://localhost:8080/api/event/personnepm?userId=${idpm}`)
  setDemandeEvent(response.data);
  };
  fetechDemandeEventByPm();
}, []);

const deleteDmdEvent = async (id) => {
  await axios.delete(`http://localhost:8080/api/event/${id}`);
  window.location.reload();
};

return (
  
  <div>
  <Header/>
  <div>
  <section className="vh-400" style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-10">
        <div className="card">
          <div className="card-header p-3">
            <h5 className="mb-0"><i className="fas fa-tasks me-2" />MES DEMANDES DES DEVENEMENTS</h5>
          </div>
          <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: 'auto' }}>
          {demandeEvent.length === 0 ? (
            <p>Vous n'avez aucune demande</p>
          ) : (
            <table className="table mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Etat</th>
                  <th scope="col">Date Event</th>
                  <th scope="col">Au Centre</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {demandeEvent.map((event, index) => (
                <tr className="fw-normal"key={index}>
                  <th>
                    <span className="ms-2"scope="row">{index + 1}</span>
                  </th>
                  <td className="align-middle">
                      <h6 className={`mb-0 ${event.etat_demande === "Accepter" ? "text-success" : event.etat_demande === "En attente" ? "text-warning" : "text-danger"}`}>
                             {event.etat_demande}
                             </h6>
                        </td>
                    <td className="align-middle">
                    {new Date(event.date_demande).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}
                        </td>
                  <td className="align-middle">
                    <h6 className="mb-0"><span >{event.centre.name_centre}</span></h6>
                  </td>
                  <td className="align-middle">
                    <a href="#!" data-mdb-toggle="tooltip" title="Supprimer demande">
                    <Link
                    onClick={() => deleteDmdEvent(event.id_event)}style={{color:"#E34724"}}>
                      <i className="fas fa-trash-alt text-danger" />
                  </Link></a>

                      <a href="#!" data-mdb-toggle="tooltip" title="Ajouter des media">
                    <Link  to={`/AjouterMedia/${event.id_event}`} style={{color:"#479E3B"}} >
                      <i class="fa fa-plus-square" aria-hidden="true"/></Link></a>
                  </td>
                </tr>
               ))}
              </tbody>
            </table>
            )}
          </div>
         </div>
      </div>
    </div>
  </div>
</section>

 
</div>
<Footer/>

    </div>
)
 }