import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react"
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
function AjouterMedia() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginPM');
    }
  }, []);
  const [showAlert, setShowAlert] = useState(false);
  const { id_event } = useParams();
  const [description, setDescription] = useState("");
  
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  //const MAX_FILE_SIZE = 10485760;
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);

    for (let i = 0; i < image.length; i++) {
      // Parcourir le tableau de fichiers d'image et les ajouter un par un
      formData.append("image", image[i]);
    }

    if (video !== null) {
      formData.append("video", video);
    }        try {
          const response = await axios.post(`http://localhost:8080/api/media/add/${id_event}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
      
          console.log(response.data);
          setShowAlert(true);

        } catch (error) {
          console.log(error);
          alert("Une erreur s'est produite lors de l'envoi du média.");
        }
      };

  const divStyle1 = {
    color: '#061D73',
    marginLeft: '25%',
   
    
  };

  const divStyle = {
    marginLeft: '130px'
  };

const cont={
    marginTop:'50px',
   // backgroundImage:"url('./images/blog/blog-8.jpg')",
    //backgroundRepeat:'no-repeat',
}
const back={
    backgroundColor:'#EEECEE',
}
const handleImageInputChange = (event) => {
    setImage(event.target.files);
  };

  const handleVideoInputChange = (event) => {
    setVideo(event.target.files[0]);
  };
  return (
    <div>
    <Header/>
    <div style={cont}>
    
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"style={back}>
            
            <h2 style={divStyle1} className="text-center m-4">AJOUTER MEDIA D'EVENEMENT</h2>
            <form onSubmit={handleFormSubmit}>
            {showAlert && (
            <div className="alert alert-success" role="alert">
                 Votre média a été ajouté avec succès !
              </div>
              )}
              <div className="mb-3">
                <label htmlFor="description" style={{color:'black'}}className="form-label" >
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
                <label htmlFor="image" style={{color:'black'}} className="form-label">
                  Image
                </label><br></br>
                <input type="file" onChange={handleImageInputChange}multiple  />
              </div>
              <div className="mb-3">
                <label htmlFor="video"  style={{color:'black'}}className="form-label">
                  Video
                </label><br></br>
                <input type="file" onChange={handleVideoInputChange} />
              </div>
            <button style={divStyle} type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/ConsulterdmdCollecte">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
     
</div>
<br/>
<br/>
<Footer/>

    </div>
  );
}

export default AjouterMedia;
