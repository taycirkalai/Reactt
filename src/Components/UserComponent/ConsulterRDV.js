import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import logo from'../pics/donneur.png'
import tuni from'../pics/tuni.svg'
import DON from'../pics/donn.png'
import qr from'../pics/qr.jpg'

export default function ConsulterRDV() {

 const [rendezvous, setRendezVous] = useState([]);
 const [nbDons, setNbDons] = useState(0);

 const navigate = useNavigate()
 useEffect(() => {
  if (!localStorage.getItem('token')) {
    navigate('/loginPH')
  }
}, [])
 useEffect(() => {
  const fetechDemandeRdvByPH=async()=>{
    const idpp = localStorage.getItem("id_user");
    const response=await axios.get(`http://localhost:8080/api/rdv/personneph?userId=${idpp}`)
    setRendezVous(response.data);
    setNbDons(response.data.filter(rdv => rdv.etatDon === "donné").length);
  };
  fetechDemandeRdvByPH();
}, []);
const deleteRDV = async (id) => {
  await axios.delete(`http://localhost:8080/api/rdv/${id}`);
  window.location.reload();
};

const [selectedOptions, setSelectedOptions] = useState({});

function handleSelectChange(event) {
  const { id, value } = event.target;
  setSelectedOptions(prevSelectedOptions => ({
    ...prevSelectedOptions,
    [id]: value
  }));
}

async function handleSaveClick(id) {
  
  const selectedOption = document.getElementById(`analyse-select-${id}`).value || document.getElementById(`analyse-select-${id}`).defaultValue;
  if (!selectedOption) {
  console.log(selectedOption)  
  alert('Veuillez sélectionner une option.');
  return;
}

if (selectedOption === "") {
  alert('Veuillez sélectionner une option valide.');
  return;
}else{
  alert('Votre analyse ajouter avec succées');
}

window.location.reload();
const body = {
  "nomanalyse": selectedOption
};

// Envoi de la requête POST vers l'API
const response = await fetch(`http://localhost:8080/api/rdv/analyse/save/${id}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "nomanalyse": selectedOption
  })
});
console.log(selectedOptions)
const data = await response.json();
console.log(data);

// Mise à jour de l'état des rendez-vous
const updatedRdv = rendezvous.map(rdv => {
  if (rdv.id === id) {
    return { ...rdv, analyse: body.nomanalyse };
  }
  return rdv;
});
setRendezVous(updatedRdv);
}
const nbreDon = rendezvous.length > 0 ? rendezvous[0].personnePhysique?.nbre_don : 0;
return (
  
  <div>
  <Header/>
  <div>
 
<section className="page-title bg-1" style={{backgroundColor: '#eee'}}>
<section className="vh-400" >
  <div className="container py-5 h-200">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-15 col-xl-20">
        <div className="card">
          
          <div className="card-header p-3">
            <h5 className="mb-0"><i className="fas fa-tasks me-2" />MES RENDEZ-VOUS</h5>
          </div>
          <br/>
          
          <p style={{color:'red' , marginLeft:"15px"}}><i style={{fontSize:"150%"}} class="icofont-heart-beat-alt"></i>

&nbsp; Si vous avez fait 3 dons ou plus, vous pouvez recevoir une carte de donneur au-dessous list rendez-vous.</p>
<div>
    <p style={{color:'black' , marginLeft:'25px'}}>Vous avez fait : {nbreDon} don(s)</p>
   
  </div>


            
          <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: 'auto' }}>
          {rendezvous.length === 0 ? (
            <p>Vous n'avez aucun rendez-vous</p>
          ) : (
            <table className="table mb-0">

              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Etat</th>
                  <th scope="col">Date & Heure<br/>
                                 </th>
                  <th scope="col">Médecin</th>
                  <th scope="col">Centre</th>
                  <th scope="col">Choix analyse</th>
                  <th scope="col">Analyse</th>
                  <th>Action</th>
                </tr>
              </thead>
            

              <tbody>
              {rendezvous.slice(0, 10).map((rdv, index) => (
                
                <tr className="fw-normal"key={index}>
                  <th>
                    <span className="ms-2"scope="row">{index + 1}</span>
                  </th>
                  <td className="align-middle">
                      <h6 className={`mb-0 ${rdv.etat === "Accepter" ? "text-success" : rdv.etat === "En attente" ? "text-warning" : "text-danger"}`}>
                             {rdv.etat}
                             </h6>
                        </td>
                       
                  
                  <td className="align-middle">
                  <h6 className="mb-0">
                  {rdv.date_rdv ? new Date(rdv.date_rdv).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'}) : 'non affectée'}</h6>
                  </td>
                  <td className="align-middle">
                  <h6 className="mb-0">
                        {rdv.medecin ? <span>{rdv.medecin.name}</span> : <span>Non affecté</span>}
                    </h6>
                  </td>
                  <td className="align-middle">
                    <h6 className="mb-0"><span >{rdv.centre.name_centre}</span></h6>
                  </td>
                  <td>
                  <select id={`analyse-select-${rdv.id_rdv}`} onChange={(event) => handleSelectChange(event, rdv.id_rdv)} required disabled={rdv.analysePath}>
  <option value="">Sélectionnez une analyse</option>
  <option value="nfs">NFS</option>
  <option value="glycemie">Glycémie</option>
  <option value="Hepatique">Hépatique</option>
  {rdv.personnePhysique?.nbre_don === 3 && <option value="Rapport">Rapport</option>}
</select>

<br/>
 
  <button className="btn btn-danger" style={{width:"110px"}} onClick={() => handleSaveClick(rdv.id_rdv)}><div style={{marginLeft:"-22px"}}>Enregistrer</div></button>
</td>

                  <td className="align-middle">
                {rdv.nomanalyse}
                 <br/>
                      {rdv.analysePath ? (
                         <a href={`http://localhost:8080/${rdv.analysePath} `} download>
                            <i className="fas fa-file-pdf" style={{color:'red'}}></i> {/* Utiliser la classe d'icône pour un fichier PDF de Font Awesome */}
                          </a>
                          ) : (
                          <span style={{color:'#05148D'}}>Non affecté</span>
                          )}

                  </td>
                  <td className="align-middle">
                    <a href="#!" data-mdb-toggle="tooltip" title="Supprimer demande">
                    <Link
                    onClick={() => deleteRDV(rdv.id_rdv)}style={{color:"#E34724"}}
                  >
                      <i className="fas fa-trash-alt text-danger" /></Link></a>
                  </td>
                  
                </tr>
               ))}
              </tbody>
              <tr>
                
              </tr>
            </table>

)}
          </div>
         </div>
      </div>
    </div>
  </div>
</section>
<h3 style={{marginLeft:"195px" , fontSize:"30px"}} className="mb-0"><i>Carte donneur :</i></h3>
<br/>
<p style={{marginLeft:"195px" , fontSize:"15px" ,textAlign: 'justify' , color:"black"}}>
les cartes de donneurs de sang peuvent être utilisées pour aider à coordonner les dons de sang dans les communautés locales, en identifiant les donneurs potentiels <br/>et en organisant 
des campagnes de don de sang.les cartes de donneurs de sang peuvent également servir de pièce d'identité pour les donneurs de sang lorsqu'ils 
<br/>se présentent pour donner du sang, ce qui peut accélérer le processus d'inscription et de vérification de l'admissibilité.Dans l'ensemble, les cartes de donneurs  de <br/>sang sont un outil utile pour promouvoir le don 
de sang et assurer la sécurité et l'efficacité des transfusions sanguines.</p>
{rendezvous.filter(rdv => rdv.personnePhysique?.nbre_don === 3).length > 0 ? (
  <div>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-md-9 col-lg-7 col-xl-5">
        <div className="card" style={{borderRadius: 15}}>
          <div className="">
            <section className="">
              <div className="container">
                <div className="">
                  <div className="col col-md-9 col-lg-7 col-xl-5">
                    <div className="">
                      <div className="card-body p-4">
                        <div className="d-flex text-black">
                          <div className="flex-shrink-0">
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <img src={logo} style={{width:"220px" ,  marginLeft:"-40px"}}></img>
                            <img src={tuni} style={{width:"60px" , marginLeft:"420px" , marginTop:"-100px"}}></img>
                            <br/>
                            <center><h3 className="mb-1"><i>Carte de donneur de sang</i></h3></center>
                           <br/>
                            {rendezvous.filter(rdv => rdv.personnePhysique?.nbre_don === 3)
                              .slice(0, 1) // get the first donor with three donations
                              .map((rdv, index) => (
                                <div key={index}>
                              
                              <div>
                                <img src={DON} style={{width:"90px" , marginTop:"10px" , marginLeft:"50px"   }}></img>
                                <p style={{color:"black" , fontSize:"13px" ,  marginLeft:"50px"}}><b>ID:</b>&nbsp;{rdv.personnePhysique?.id_citoyen}</p> 

                                <div style={{marginLeft:"230px" , marginTop:"-140px"}}>
                                <p style={{color:"black" , fontSize:"18px"}}><b>Nom :</b>&nbsp; {rdv.personnePhysique?.nom}</p> 
                                  <p style={{color:"black" , fontSize:"18px"}}><b>Prénom:</b> &nbsp;{rdv.personnePhysique?.prenom}</p>
                                  <p style={{color:"black" , fontSize:"18px"}}><b>Type de sang:</b>&nbsp;{rdv.personnePhysique?.type_sang}</p>
                                </div>
                                </div>          
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
) : (
  <div>
    <p style={{color:'red' , marginLeft:"200px"}}><i class="icofont-warning-alt"></i>Vous n’avez pas fait le don trois fois.</p>
  </div>
)}

</section>
</div>

<Footer/>

    </div>
)
 }