import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditCentre() {
  //let navigate = useNavigate();
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const { id_centre } = useParams();
  console.log(id_centre);

  const [centre, setCentre] = useState({
    name_centre: "",
    lieu_centre: "",
   
  });

  const { name_centre, lieu_centre} = centre;

  const onInputChange = (e) => {
    setCentre({ ...centre, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCentre();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/centre/${id_centre}`, centre);
    navigate("/ListCentre");
  };
  const loadCentre = async () => {
    const result = await axios.get(`http://localhost:8080/api/centre/${id_centre}`);
    setCentre(result.data);
  };
  const divStyle = {
    color: '#F4192A',
    marginLeft: '25%'
  };
  const divStyle1 = {
    marginLeft: '35%'
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle}className="text-center m-4">EDIT CENTRE</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name_centre" className="form-label">
                NOM 
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Donner le nom "
                name="name_centre"
                value={name_centre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lieu_centre" className="form-label">
                Lieu
              </label>
              <textarea cols={5} rows={5}
                type={"text"}
                className="form-control"
                placeholder="Donner le lieu"
                name="lieu_centre"
                value={lieu_centre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button style={divStyle1} type="submit" className="btn btn-outline-primary">
              Envoyer
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/ListCentre">
              Annuler
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}