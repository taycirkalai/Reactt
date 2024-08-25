import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import axios from "axios";
function AddArticleForm() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  
  const [image, setFile] = useState(null);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    formData.append("file", image);

        try {
          const response = await axios.post("http://localhost:8080/api/article/ajout", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
      
          console.log(response.data);
          navigate('/ListArticle');
        } catch (error) {
          console.log(error);
        }
      };

  const divStyle1 = {
    color: '#F4192A',
    marginLeft: '25%'
  };

  const divStyle = {
    marginLeft: '180px'
  };


  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <div style={{marginTop:"10dp"}}>
    <div className="container" >
      <div className="row">
        <div  className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow" >
          <h2 style={divStyle1} className="text-center m-4">Ajouter article</h2>
          <form onSubmit={handleFormSubmit}>
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
                cols={5}
                rows={5}
                className="form-control"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label><br/>
              <input type="file" onChange={handleFileInputChange} />
            </div>
            <button style={divStyle} type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/ListArticle">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddArticleForm;
