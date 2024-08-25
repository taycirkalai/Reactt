import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export default function ConsulterAMB() {

 const [amb, setAmb] = useState([]);
 const navigate = useNavigate()
 useEffect(() => {
  if (!localStorage.getItem('token')) {
    navigate('/loginPH')
  }
}, [])
 useEffect(() => {
  const fetechDemandeAmbByPH=async()=>{
  const idpp = localStorage.getItem("id_user");
  const response=await axios.get(`http://localhost:8080/api/demandeAm/personneph?phId=${idpp}`)
  setAmb(response.data);
  };
  fetechDemandeAmbByPH();
}, []);

const deleteAmb = async (id) => {
  await axios.delete(`http://localhost:8080/api/demandeAm/${id}`);
  window.location.reload();
};

return (
  
  <div>
  <Header/>
  <div>
  <section className="vh-400" style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-200">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-15 col-xl-20">
        <div className="card">
          <div className="card-header p-3">
            <h5 className="mb-0"><i className="fas fa-tasks me-2" />MES DEMANDE D'AMBASSADEUR</h5>
          </div>
          <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: 'auto' }}>
          {amb.length === 0 ? (
            <p>Vous n'avez aucune demande</p>
          ) : (
            <table className="table mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Etat</th>
                  <th scope="col">Centre</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {amb.map((Amb, index) => (
                <tr className="fw-normal"key={index}>
                  <th>
                    <span className="ms-2"scope="row">{index + 1}</span>
                  </th>
                  <td className="align-middle">
                      <h6 className={`mb-0 ${Amb.etat === "Accepter" ? "text-success" : Amb.etat === "En attente" ? "text-warning" : "text-danger"}`}>
                             {Amb.etat}
                             </h6>
                        </td>

                  <td className="align-middle">
                    <h6 className="mb-0"><span >{Amb.centre.name_centre}</span></h6>
                  </td>
                  <td className="align-middle">
                    <a href="#!" data-mdb-toggle="tooltip" title="Supprimer demande">
                    <Link
                    onClick={() => deleteAmb(Amb.id_am)}style={{color:"#E34724"}}
                  >
                      <i className="fas fa-trash-alt text-danger" /></Link></a>
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