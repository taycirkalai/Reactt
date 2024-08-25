import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";

export default function ViewPublication() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [publication, setPublication] = useState({
    titre: "",
    description: "",
    date_debut: "",
    date_fin:"",
    lieu:"",
    imagePath:""
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    loadPublication();
  },[]);
  const loadPublication = async () => {
    const result = await axios.get(`http://localhost:8080/api/pub/${id}`);
    setPublication(result.data);
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
          <h2 style={divStyle1}className="text-center m-4">Publications Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>IDENTIFIANT :  </b> 
                  {publication.id_pub}
                </li>
                <li className="list-group-item">
                  <b>TITRE :  </b>
                  {publication.titre}
                </li>
                <li className="list-group-item">
                  <b>DESCRIPTION :  </b><br></br>
                  <textarea style={{textAlign: 'justify'}}value={publication.description} cols={55}rows={5}></textarea>
                </li>
                <li className="list-group-item">
                  <b>DATE DEBUT :  </b>
                  {new Date(publication.date_debut).toLocaleDateString()}
                </li>
                <li className="list-group-item">
                  <b>DATE FIN :  </b>
                  {new Date(publication.date_fin).toLocaleDateString()}
                </li>
                <li className="list-group-item">
                  <b>LIEU :  </b>
                  {publication.lieu}
                </li>
                <li className="list-group-item">
               <b>IMAGE :   </b><br></br>
               <img style={imgStyle}src={`http://localhost:8080/${publication.imagePath}`} alt={publication.imagePath}></img>
                  </li>
                
              
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ListPub"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}