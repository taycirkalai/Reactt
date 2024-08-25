import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export default function ListRdvAccepter() {
  const [rdv, setRdv] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [etatDon, setEtatDon] = useState("Pas encore");

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginM')
    }
  }, [])
  useEffect(() => {
    const fetchRDVByCentre= async () => {
      const centreId = localStorage.getItem("id_centre");
      const doctorId = localStorage.getItem("id_med");
      const response = await axios.get(`http://localhost:8080/api/rdv/accepter/centre?centreId=${centreId}&medecinId=${doctorId}&etat=Accepter`);
      setRdv(response.data);
    };
    fetchRDVByCentre();
  }, []);
  const loadRDV = async()=>{
    navigate('/ListRDVAccepter')
};
const handleFileSubmit = async (event, rdvId) => {
  event.preventDefault();

  if (!selectedFile) {
    alert('Veuillez sélectionner un fichier avant de l\'envoyer.');
    return;
  }

  if (!selectedFile.type.includes('pdf')) {
    alert('Veuillez sélectionner un fichier PDF.');
    return;
  }

  try {
    const formData = new FormData();
    formData.append("file", selectedFile);

    await axios.put(`http://localhost:8080/api/rdv/${rdvId}/analyse`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    alert('Le fichier a été envoyé avec succès.');
    window.location.reload();
  } catch (error) {
    console.log(error);
    alert('Une erreur s\'est produite lors de l\'envoi du fichier.');
  }
};
const deleteRDV = async (id) => {
  await axios.delete(`http://localhost:8080/api/rdv/${id}`);
  window.location.reload();
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};
const EtatDon = (id) => {
  axios.put(`http://localhost:8080/api/rdv/${id}/etat_don?etat_don=Effectue`)
    .then(response => {
      // Mise à jour de l'état du patient spécifique
      setRdv(prevRdv => prevRdv.map(rdv => {
        if (rdv.id_rdv === id) {
          return {...rdv, etatDon: 'effectue'}
        } else {
          return rdv
        }
      }));
      window.location.reload();
    })
    .catch(error => {
      console.log(id)
      console.log(error)
    })
}

const filteredRdV = rdv.sort((a, b) => new Date(b.date_demande) - new Date(a.date_demande));




const divStyle = {
  color: '#88D0F4',
  marginLeft: '29%',
  marginTop:'1%',
};
const stylebnt = {
  marginTop:"0"
};
const tabstyle={
  marginTop:"1%"
}
const divSerach={
  width:'20%',
  marginLeft:'',
  marginTop:"2%",
  marginBottom: "0"
}
const formStyle = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  marginBottom: "1rem"
}
return (
    <div className="container">
    <div className="py-4">
      <h3 style={divStyle}> LISTE DE MES RENDEZ-VOUS </h3>
      <div>
      <form style={formStyle}>
          <input
           style={divSerach}
            className="form-control border-0"
            type="search"
            placeholder="Recherche"
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
        </div>
      <table style={tabstyle} className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Date demande</th>
            <th scope="col">Date Rdv</th>
            <th scope="col">Etat don</th>
            <th scope="col">Nom Analyse</th>
            <th scope="col">RS Analyse</th>
            <th scope="col">Ajouter Analyse</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredRdV.map((rdv, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                    <td>{rdv.personnePhysique.nom}</td>
                    <td>{rdv.personnePhysique.prenom}</td>
                    <td>{new Date(rdv.date_demande).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    <td>{new Date(rdv.date_rdv).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    <td>{rdv.etatDon}</td>
                    <td>
                      {rdv.nomanalyse}
                    </td>
                    <td>
                      {rdv.analysePath ? (
                         <a href={`http://localhost:8080/${rdv.analysePath} `} download>
                            <i className="fas fa-file-pdf" style={{color:'red'}}></i> {/* Utiliser la classe d'icône pour un fichier PDF de Font Awesome */}
                          </a>
                          ) : (
                          <span>Non affecté</span>
                          )}
                        </td>
                    <td>
                    <form onSubmit={(e) => handleFileSubmit(e,rdv.id_rdv)}>
                       <input
                         type="file"
                         onChange={(e) => setSelectedFile(e.target.files[0])}
                       />
                       <br/>
                       <br/>
                       <button type="submit" className="btn btn-danger" style={{width:"90px" , height:"40px"
                      }}> <div style={{marginLeft:"-15px"}}>Envoyer</div></button>
                      </form>
                    </td>
              <td>
             
              <Link style={{color:"#37980A"}}>
    <i className="fas fa-check" onClick={() => EtatDon(rdv.id_rdv)}></i>
</Link>

                  
                </td>
                          
                  </tr>
               
              
            
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
 }