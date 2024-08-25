import React, { useState}  from "react";
import { Link } from 'react-router-dom';
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';

function EditPublication() {
  const navigate = useNavigate();

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date_debut, setDateDebut] = useState("");
  const [date_fin, setDateFin] = useState("");
  const [lieu, setLieu] = useState("");
  const [image, setFile] = useState(null);
  
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/api/pub/${id}`);
        const data = response.data;
        setTitre(data.titre);
        setDescription(data.description);
        setDateDebut(format(new Date(data.date_debut), 'yyyy-MM-dd HH:mm:ss'));
        setDateFin(format(new Date(data.date_fin), 'yyyy-MM-dd HH:mm:ss'));
        setLieu(data.lieu);
        setFile(data.image);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    formData.append("date_debut", format(new Date(date_debut), "yyyy-MM-dd'T'HH:mm"));
    formData.append("date_fin", format(new Date(date_fin), "yyyy-MM-dd'T'HH:mm"));
    formData.append("lieu", lieu);
    formData.append("file", image);
  
    try {
      const response = await axios.put(`http://localhost:8080/api/pub/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      navigate("/ListPub");
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
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style= {divStyle1} className="text-center m-4">MODIFIER PUBLICATION</h2>

      <form  onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="titre" className="form-label">
                Titre
              </label>
              <input
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="date_debut" className="form-label">
                date debut
              </label>
              <input
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
              type="text"
              className="form-control"
              value={lieu}
              onChange={(e) => setLieu(e.target.value)}
            />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image 
              </label><br></br>
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
export default EditPublication;