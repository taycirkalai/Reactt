import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";

export default function ViewMedia() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [media, setMedia] = useState({
    description: "",
    imagePath:"",
    videoPath:"",
    id_event:{
      id_event:"",
      nombre_colab:"",
      date_event:"",
      centre:{
        name_centre:"",
        lieu_centre:""
      },
      personneMorale:{
        nom_entreprise:"",
        localisation:""
      }
    }
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    loadMedia();
  },[]);
  const loadMedia = async () => {
    const result = await axios.get(`http://localhost:8080/api/media/media/${id}`);
    setMedia(result.data);
  };
  const divStyle1 = {
    color: '#34AFE4',
    marginLeft: '25%'
  };
  const imgStyle={
    width:"250px",
    height:"250px",
    marginLeft:'50px'
  }
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle1}className="text-center m-4">Media Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>IDENTIFIANT :  </b> 
                  {media.id_media}
                </li>
                <li className="list-group-item">
                  <b>DESCRIPTION :  </b><br></br>
                  <textarea style={{textAlign: 'justify'}}value={media.description} cols={55}rows={5}></textarea>
                </li>
                <li className="list-group-item">
                  <b>DATE EVENT :  </b>
                  {new Date(media.id_event.date_event).toLocaleDateString()}
                </li>
                <li className="list-group-item">
                  <b>CENTRE ET LOCALISATION :  </b><br></br>
                  {media.id_event.centre.name_centre} {media.id_event.centre.lieu_centre}
                </li>
                <li className="list-group-item">
                  <b>NOM ENTREPRISE ET LOCALISATION :  </b><br></br>
                  {media.id_event.personneMorale.nom_entreprise}  à {media.id_event.personneMorale.localisation}
                </li>
                <li className="list-group-item">
                  <b>NOMBRE DE COLLABORATEUR :  </b><br></br>
                  {media.id_event.nombre_colab}
                </li>
                <li className="list-group-item">
               <b>IMAGE :   </b><br></br>
               
                {media.imagePath.split(',').map((imagePath, index) => (
                  <img
                    key={index}
                    style={{ width: '200px', height: '200px' ,marginRight: '10px' }}
                    src={`http://localhost:8080/${imagePath}`}
                    alt={imagePath}
                  />                ))} 
              </li>
              <li className="list-group-item">
               <b>VIDEO :   </b><br></br>
                {media.videoPath ? (
                
                  <video width="200" height="190" controls>
                 <source src={`http://localhost:8080/${media.videoPath}`} type="video/mp4" />
                </video>
                    ) : (
                   <li>Aucune vidéo disponible</li>
                  )           }

                </li>
               
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ListMedia"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}