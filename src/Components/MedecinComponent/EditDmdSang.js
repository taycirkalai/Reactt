import React, { useState}  from "react";
import { Link } from 'react-router-dom';
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';

function EditeDmdSang() {
  const navigate = useNavigate();
  const { id_dmd } = useParams();

  const [date_operation, setDateOperation] = useState("");
  const [type_sang, setTypeSang] = useState("");
  const [centres, setCentres] = useState([]);
  const [id_centre, setIdCentre] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/api/demandesang/${id_dmd}`);
        const data = response.data;

        setDateOperation(format(new Date(data.date_operation), "yyyy-MM-dd HH:mm:ss"));
        setTypeSang(data.type_sang);
        setIdCentre(data.centre.id_centre);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id_dmd]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/centre/all")
      .then(response => {
        setCentres(response.data);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }, []);

  const handleCentreChange = (event) => {
    setIdCentre(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      type_sang: type_sang,
      centre: id_centre,
      date_operation: format(new Date(date_operation), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
    };

    try {
      const response = await axios.put(`http://localhost:8080/api/demandesang/${id_dmd}`, requestData);
      console.log(response.data);
      navigate("/listdmd");
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
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style= {divStyle1} className="text-center m-4">MODIFIER DEMANDE DE SANG</h2>

      <form  onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="titre" className="form-label">
                type de sang
              </label>
              <input
              type="text"
              className="form-control"
              value={type_sang}
              onChange={(e) => setTypeSang(e.target.value)}
            />
            </div>
            <div className="mb-3">
              <label htmlFor="centre" className="form-label">
                Centre
              </label>
              <select
                className="form-select"
                id="centre"
                name="centre"
                onChange={handleCentreChange}
                value={id_centre}
              >
                <option value="">-- Sélectionnez un centre --</option>
                {centres.map(centre => (
                  <option key={centre.id_centre} value={centre.id_centre}>
                    {centre.name_centre} ({centre.lieu_centre})
                  </option>
                ))}
              </select>
              </div>
            <div className="mb-3">
              <label htmlFor="date_debut" className="form-label">
                date operation
              </label>
              <input
                type="datetime-local"
                 className="form-control"
                value={date_operation}
                onChange={(e) => setDateOperation(e.target.value)}
              />
           
            </div>
           
            <button style={divStyle} type="submit" className="btn btn-outline-primary">
              Envoyer
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/listdmd">
              Annuler
            </Link>
          </form>
    </div>
      </div>
    </div>
  );
}
export default EditeDmdSang;