import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react"
export default function AddCentre() {
  //let navigate = useNavigate();
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [centre, setCentre] = useState({
    name_centre: "",
    lieu_centre: "",
  });

  const { name_centre, lieu_centre} = centre;

  const onInputChange = (e) => {
    setCentre({ ...centre, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/centre/ajout", centre);
    navigate("/ListCentre");
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
          <h2 style={divStyle1}className="text-center m-4">AJOUTER CENTRE</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="name_centre" className="form-label">
                Nom centre
              </label>
              <input 
              required
                type={"text"}
                className="form-control"
                placeholder="Donner le nom du centre"
                name="name_centre"
                value={name_centre}
                onChange={(e) => onInputChange(e)} 
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lieu_centre" className="form-label">
                Lieu center
              </label>
              <input required
                type={"text"}
                className="form-control"
                placeholder="Donner le lieu du centre"
                name="lieu_centre"
                value={lieu_centre}
                onChange={(e) => onInputChange(e)} 
                autoComplete="off"
              />
            </div>
            <button style={divStyle}type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/ListCentre">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}