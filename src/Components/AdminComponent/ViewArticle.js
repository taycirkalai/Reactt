import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";

export default function ViewArticle() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [article, setArticle] = useState({
    titre: "",
    description: "",
    image: "",

  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    loadArt();
  },[]);
  const loadArt = async () => {
    const result = await axios.get(`http://localhost:8080/api/article/${id}`);
    setArticle(result.data);
  };
  
  const divStyle1 = {
    color: '#34AFE4',
    marginLeft: '25%'
  };
  const imgStyle={
    width:"270px",
    height:"250px"
  }
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle1}className="text-center m-4">Article Details</h2>

          <div className="card">
            <div className="card-header">
              
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>IDENTIFIANT :  </b> 
                  {article.id}
                </li>
                <li className="list-group-item">
                  <b>TITRE :  </b>
                  {article.titre}
                </li>
                <li className="list-group-item">
                  <b>DESCRIPTION :  </b><br></br>
                  <div style={{ overflow: 'auto', maxHeight: '200px', width: '100%' ,textAlign: 'justify'}}>
                         {article.description}
                 </div>
                </li>
                <li className="list-group-item">
               <b>IMAGE :   </b><br></br>
               <img style={imgStyle}src={`http://localhost:8080/${article.imagePath}`} alt={article.imagePath}></img>
                  </li>

              
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ListArticle"}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}