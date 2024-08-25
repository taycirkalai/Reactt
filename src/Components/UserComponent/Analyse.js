import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export default function Analyse() {

  const [rendezvous, setRendezVous] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginPH')
    }
  }, [])
  useEffect(() => {
    const fetechDemandeRdvByPH = async () => {
      const idpp = localStorage.getItem("id_user");
      const response = await axios.get(`http://localhost:8080/api/rdv/personneph?userId=${idpp}`)
      setRendezVous(response.data);
    };
    fetechDemandeRdvByPH();
  }, []);



  return (

    <div>
      <Header />
      <div>
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-12 col-xl-10">
                <div className="card">
                  <div className="card-header p-3">
                    <h5 className="mb-0"><i className="fas fa-tasks me-2" />MES Analyses</h5>
                  </div>
                  <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: 400 }}>
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Date & Heure de don</th>
                          <th scope="col">Nom médecin</th>
                          <th scope="col">Résultat Analyse</th>

                        </tr>
                      </thead>
                      <tbody>
                        {rendezvous.map((rdv, index) => (
                          <tr className="fw-normal" key={index}>
                            <th>
                              <span className="ms-2" scope="row">{index + 1}</span>
                            </th>



                            <td className="align-middle">
                              <h6 className="mb-0">
                                {rdv.date_rdv ? new Date(rdv.date_rdv).toLocaleString('fr-FR', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }) : 'non affectée'}</h6>
                            </td>
                            <td className="align-middle">
                              <h6 className="mb-0">
                                {rdv.medecin ? <span>{rdv.medecin.name}</span> : <span>Non affecté</span>}
                              </h6>
                            </td>

                            <td>
                              {rdv.pdf_url ? (
                                <a href={rdv.pdf_url} download>
                                  <button className="btn btn-primary">Télécharger</button>
                                </a>
                              ) : (
                                <p>Non disponible</p>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
      <Footer />

    </div>
  )
}