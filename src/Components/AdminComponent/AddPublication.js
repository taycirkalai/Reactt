import React, { useState}  from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import axios from "axios";
function AddPubForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date_debut, setDateDebut] = useState("");
  const [date_fin, setDateFin] = useState("");
  const [lieu, setLieu] = useState("");
  const [image, setFile] = useState(null);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date(); // obtenir la date système actuelle
const dateDebut = new Date(date_debut); // convertir la date_debut en objet Date
const dateFin = new Date(date_fin); // convertir la date_fin en objet Date
if (dateDebut.getTime() < currentDate.getTime()) {
  setShowAlert1(true); // Set showAlert to true si date_debut est inférieure à la date courante
  return;
} else if (dateDebut.getTime() > dateFin.getTime()) {
  setShowAlert(true); // Set showAlert2 to true si date_debut est supérieure à date_fin
  return;
}

    
    
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    formData.append("date_debut", date_debut);
    formData.append("date_fin", date_fin);
    formData.append("lieu", lieu);
    formData.append("file", image);

    
      try {
        const response = await axios.post("http://localhost:8080/api/pub/ajout", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
    
        console.log(response.data);
        navigate('/ListPub')
      } catch (error) {
        console.log(error);
      }
    };
   
  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  const divStyle1 = {
    color: '#F4192A',
    marginLeft: '25%'
  };
  const divStyle = {
    marginLeft: '180px'
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 style= {divStyle1} className="text-center m-4">AJOUTER PUBLICATION</h2>
          {showAlert && ( 
            <div className="alert alert-warning" role="alert">
              La date de début doit être inférieure à la date de fin
            </div>
          )}
          {showAlert1 && ( 
            <div className="alert alert-warning" role="alert">
              La date de début doit être suppérieure ou égale à la date d'aujourd'huis
            </div>
          )}
      <form  onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="titre" className="form-label">
                Titre
              </label>
              <input
              required
              type="text"
              className="form-control"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
              className="form-control"
              required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="date_debut" className="form-label">
                date debut
              </label>
              <input
              required
              type="datetime-local"
              className="form-control"
              value={date_debut}
              onChange={(e) => setDateDebut(e.target.value)}
            />
            </div>
            <div className="mb-3">
              <label htmlFor="date_fin" className="form-label">
                date fin
              </label>
              <input
              required
              type="datetime-local"
              className="form-control"
              value={date_fin}
              onChange={(e) => setDateFin(e.target.value)}
            />
            </div>
            <div className="mb-3">
              <label htmlFor="lieu" className="form-label">
                lieu
              </label>
              <input
              required
              type="text"
              className="form-control"
              value={lieu}
              onChange={(e) => setLieu(e.target.value)}
            />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label> <br/>
              <input type="file" onChange={handleFileInputChange} />
            
            </div>
            <button style={divStyle} type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/ListPub">
              Cancel
            </Link>
          </form>
    </div>
      </div>
    </div>
  );
}
export default AddPubForm;