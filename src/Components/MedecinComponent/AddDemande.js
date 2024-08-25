import axios from 'axios';
import { useState ,useEffect } from "react";
import { useNavigate , Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
function DemandeSangComponent() {
  const navigate1 = useNavigate();
  const [idMed, setIdMed] = useState(null);
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate1('/loginM');
    } else {
      setIdMed(jwt_decode(localStorage.getItem('token')).sub);
    }
  }, []);

  useEffect(() => {
    if (idMed) {
      console.log("idMed: ", idMed);
    }
  }, [idMed]);

  const [date_operation, setDateOperation] = useState("");
  const [type_sang, setTypeSang] = useState("");
  const [id_centre, setIdCentre] = useState("");
  const [centres, setCentres] = useState([]);
  const navigate = useNavigate();

  const API_BASE_URL="http://localhost:8080/api/demandesang/ajout";

  useEffect(() => {
    axios.get('http://localhost:8080/api/centre/all')
      .then(response => {
        setCentres(response.data);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id_centre) {
      console.error("Centre ID cannot be null");
      return;
    }
    const id_med = localStorage.getItem('id_med');
if (!id_med) {
  console.error("Medecin ID not found");
  return;
}

    const data = {
      date_operation: date_operation,
      type_sang: type_sang,
      centre: {
        id_centre: id_centre
      },
      medecin :{
        id_med: parseInt(id_med)
      }
    };
    axios.post(`${API_BASE_URL}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log(response.data);
      navigate('/listdmd');
    })
    .catch(error => console.error(error));
  };

  const handleCentreChange = (event) => {
    setIdCentre(event.target.value);
  };

  const divStyle1 = {
    color: '#1E77B2',
    marginLeft: '25%',
  };
  
  const divStyle2={
    marginTop:'5%',
    marginLeft: '-5px',
  };
  
  return (
    <div className="container" style={divStyle2} >
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle1} className="text-center m-4">AJOUTER DEMANDE DE SANG</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="date_operation"  className="form-label">
              Date d'opération :
            </label>
            <input type="date" id="date_operation" className="form-control" name="date_operation" onChange={(event) => setDateOperation(event.target.value)} />
            <label htmlFor="type_sang"  className="form-label">
              Type de sang :
            </label>
            <input type="text" id="type_sang" className="form-control" name="type_sang" onChange={(event) => setTypeSang(event.target.value)} />

            <label htmlFor="centre"  className="form-label">
              Centre :
            </label>
            <div className="form-floating mb-3">
              <select className="form-select" id="centre" name="centre" onChange={handleCentreChange}>
                <option value="">-- Sélectionnez un centre --</option>
                {centres.map(centre => (
                  <option key={centre.id_centre} value={centre.id_centre}>{centre.name_centre} ({centre.lieu_centre})</option>
                ))}
              </select>
            </div>


        <button type="submit" className="btn btn-outline-primary">Enregistrer</button>
      </form>
    </div>
    </div>
    </div>
  );
}


export default DemandeSangComponent;