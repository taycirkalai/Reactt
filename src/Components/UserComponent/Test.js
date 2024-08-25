import React, { useState } from 'react';
import moment from 'moment'; // Importez moment.js
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";
function Test() {
  const [showSecondPart, setShowSecondPart] = useState(false);
  const [birthdate, setBirthdate] = useState(''); // Ajoutez un état pour la date de naissance
  const [weight, setWeight] = useState(''); // Ajoutez un état pour le poids
  const [isMale, setIsMale] = useState(''); // Ajoutez un état pour la question "Êtes-vous un homme ou une femme ?"
  const [Voyage, setVoyage] = useState('');
  const [Enceinte, setEnceinte] = useState('');
  const [Infection, setInfection] = useState('');
  const [Medicaments, setMedicaments] = useState('');
  const [Vaccine, setVaccine] = useState('');
  const [Endoscopie, setEndoscopie] = useState('');
  const [Dentiste, setDentiste] = useState('');
  const [Tatouage, setTatouage] = useState('');
  const [Drouge, setDrouge] = useState('');

  
  const navigate = useNavigate();
  const handleDrougeChange = (event) => {
    setDrouge(event.target.value);
  };
  const handleDentisteChange = (event) => {
    setDentiste(event.target.value);
  };
  const handleTatouageChange = (event) => {
    setTatouage(event.target.value);
  };
  const handleEndoscopieChange = (event) => {
    setEndoscopie(event.target.value);
  };
  const handleVaccineChange = (event) => {
    setVaccine(event.target.value);
  };
  const handleRadioChange = (event) => {
    setIsMale(event.target.value);
  };
  const handleMedicamentsChange = (event) => {
    setMedicaments(event.target.value);
  };
  const handleInfectionChange = (event) => {
    setInfection(event.target.value);
  };
  const handleEnceinteChange = (event) => {
    setEnceinte(event.target.value);
  };
  const handleVoyageChange = (event) => {
    setVoyage(event.target.value);
  };
  const handleDateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();

    // Calculez l'âge en utilisant moment.js
    const age = moment().diff(birthdate, 'years');

    if (age >= 18 && weight > 50 &&
      (Voyage === 'yes' || Enceinte === 'yes' || Infection === 'yes' || Medicaments === 'yes' || 
       Vaccine === 'yes' || Endoscopie === 'yes' || Dentiste === 'yes' || Tatouage === 'yes' || Drouge === 'yes')) {
      navigate('/Echec');
  } else if (age >= 18 && weight > 50 &&
             Voyage === 'no' && Enceinte === 'no' && Infection === 'no' && Medicaments === 'no' && 
             Vaccine === 'no' && Endoscopie === 'no' && Dentiste === 'no' && Tatouage === 'no' && Drouge === 'no') {
      navigate('/Succes');
  } else {
      alert('Vous devez avoir au moins 18 ans et peser plus de 50 kg pour continuer.');
  }
  
  };

  const img={
    width : '1500px' ,
    height :'420px',
    marginTop:'-8%'
}
const test={
    width : '1500px' ,
    height :'420px'
}
const text={
  marginTop:'-25%'
}
  const cadre ={

    height:'1220px',
    width:'1000px',
    marginLeft:'17%'

    }
  const handleClick = () => {
    setShowSecondPart(true);
  };
  const handleBackClick = () => {
    setShowSecondPart(false);
    };
  return (
    <div>
      <Header/>

<section className="page-title bg-1" style ={test}>


<div className="overlay" >
<img style ={img}src="images/questionnaire.jpg"></img>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="block text-center" >
          <div style={text}>
          <span className="text-white"></span>
        <h1 className="text-capitalize mb-5 text-lg">TEST : PUIS-JE DONNER MON SANG ?</h1>
        <span className="text-white">Ce questionnaire est indicatif et ne remplace ni le questionnaire médical, ni l’examen médical réalisé par un médecin avant le don. </span>
          </div>
      
      </div>
    </div>
  </div>
</div>
</section>
      <div className="container">
        {!showSecondPart && 
        
        <form onSubmit={handleSubmit}>
        <table className="table mb-0">
      <br/><br/>
          <tbody>
            <tr className="fw-normal">

              <th>
                <img src="images/hommefemme.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2">Êtes-vous un homme ou une femme ?</span>
              </th>
              <td className="align-middle">
                <span>

                  <label>
                  <input type="radio" value="yes" checked={isMale === 'yes'} onChange={handleRadioChange}  className="form-check-label" />
                    Femme &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                  </label>
                  <label>
                  <input type="radio" value="no" checked={isMale === 'no'} onChange={handleRadioChange}  className="form-check-label" />
                    homme
                  </label>
                </span>
              </td>
            </tr>

            <tr className="fw-normal">


              <th>
                <img src="images/date.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2"> Quelle est votre date de naissance ? </span>
              </th>
              <td className="align-middle">
                <span>
                  <label>
                  <input type="date" value={birthdate} onChange={handleDateChange} />
                  </label>
                </span>
              </td>
            </tr>

            <tr className="fw-normal">



              <th>
                <img src="images/poids.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2"> Quel est votre poids ? </span>
              </th>
              <td className="align-middle">
                <span>
                  <label>
               <input type="number" value={weight} onChange={handleWeightChange} />
                  </label>
                </span>
              </td>
            </tr>
            <tr className="fw-normal">


              <th>
                <img src="images/voyage.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2"> Avez-vous voyagé hors de la Tunisie ces 6 derniers mois ? </span>
              </th>
              <td className="align-middle">
                <span>
                  <label>
                  <input type="radio" value="yes" checked={Voyage === 'yes'} onChange={handleVoyageChange}  />
                    Oui &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                  </label>
                  <label>
                  <input type="radio" value="no" checked={Voyage === 'no'} onChange={handleVoyageChange}  />
                    Non
                  </label>
                </span>
              </td>
            </tr>
            <tr className="fw-normal">



              <th>

                <img src="images/grossesse.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2"> Êtes-vous enceinte ou avez-vous accouché dans les 6 derniers mois ? </span>
              </th>
              <td className="align-middle">
                <span>
                  <label>
                  <input type="radio" value="yes" checked={Enceinte === 'yes'} onChange={handleEnceinteChange} />
                    Oui &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                  </label>
                  <label>
                  <input type="radio" value="no" checked={Enceinte === 'no'} onChange={handleEnceinteChange} />
                    Non
                  </label>
                </span>
              </td>
            </tr>

            <tr className="fw-normal">
              <th>
                <img src="images/malade.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2"> Avez-vous eu récemment de la fièvre ou une infection 
               <br/><div style={{marginLeft:'9%'}}> (bronchite, infection urinaire...) ? </div></span>
              </th>
              <td className="align-middle">
                <span>
                  <label>
                  <input type="radio" value="yes" checked={Infection === 'yes'} onChange={handleInfectionChange}  />
                    Oui &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                  </label>
                  <label>
                  <input type="radio" value="no" checked={Infection === 'no'} onChange={handleInfectionChange}  />
                    Non
                  </label>
                </span>
              </td>
            </tr>
              </tbody>
            </table>
            </form>}
        {showSecondPart && 
        
        <form onSubmit={handleSubmit}>
        <table className="table mb-0">
      <br/><br/>
          <tbody>
           
            <tr className="fw-normal">

              <th>
                <img src="images/medicaments.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2">
                  Prenez-vous des médicaments ?
                  </span></th>
                  <td className="align-middle">
                    <span>
                      <label>
                      <input type="radio" value="yes" checked={Medicaments === 'yes'} onChange={handleMedicamentsChange}  />
                        Oui  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                      </label>
                      <label>
                      <input type="radio" value="no" checked={Medicaments === 'no'} onChange={handleMedicamentsChange}  />
                        Non
                      </label>
                    </span>
                  </td>
     </tr>

     <tr className="fw-normal">

              <th>
                <img src="images/vaccins.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2">Avez-vous été vacciné.e il y a moins d’un mois ?
                </span></th>
              <td className="align-middle">
                <span>
                <label>
                <input type="radio" value="yes" checked={Vaccine === 'yes'} onChange={handleVaccineChange}  />
                           Oui &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                      </label>
                 <label>
                 <input type="radio" value="no" checked={Vaccine === 'no'} onChange={handleVaccineChange}  />
                     Non
                 </label>
                </span>
              </td>
 </tr>
   

      
     <tr className="fw-normal">

              <th>
                <img src="images/endoscopie.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2">Avez-vous subi une endoscopie (arthroscopie, gastroscopie, coloscopie…) 
                <br/> <div style={{marginLeft:'9%'}}>ou une opération dans les 4 derniers mois ?
                </div>
                </span></th>
              <td className="align-middle">
                <span>
                <label>
                <input type="radio" value="yes" checked={Endoscopie === 'yes'} onChange={handleEndoscopieChange}  />
                           Oui &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                      </label>
                 <label>
                 <input type="radio" value="no" checked={Endoscopie === 'no'} onChange={handleEndoscopieChange}  />
                     Non
                 </label>
                </span>
              </td>
 </tr>

   
 <tr className="fw-normal">


              <th>
                <img src="images/dentiste.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2">Êtes-vous allé.e chez le dentiste au cours des 7 derniers jours ?
            </span></th>
              <td className="align-middle">
                <span>
                <label>
                <input type="radio" value="yes" checked={Dentiste === 'yes'} onChange={handleDentisteChange}  />
                           Oui &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                      </label>
                 <label>
                 <input type="radio" value="no" checked={Dentiste === 'no'} onChange={handleDentisteChange}  />
                     Non
                 </label>
                </span>
              </td>
 </tr>

    
 <tr className="fw-normal">

              <th>
                <img src="images/tatouage.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2">Avez-vous fait un piercing (y compris boucles d’oreilles) 
                ou un tatouage<br/><div style={{marginLeft:'9%'}}>(y compris maquillage permanent) durant ces 4 derniers mois ?</div> 
              </span></th>
              <td className="align-middle">
                <span>
                <label>
                <input type="radio" value="yes" checked={Tatouage === 'yes'} onChange={handleTatouageChange}  />
                           Oui &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                      </label>
                 <label>
                 <input type="radio" value="no" checked={Tatouage === 'no'} onChange={handleTatouageChange}  />
                     Non
                 </label>
                </span>
              </td>
 </tr>

 <tr className="fw-normal">


              <th>
                <img src="images/drogue.jpg" className="shadow-1-strong rounded-circle" alt="avatar 1" style={{ width: 55, height: 'auto' }} />
                <span className="ms-2">Avez-vous déjà consommé de la drogue ?
                </span></th>
              <td className="align-middle">
                <span>
                <label>
                <input type="radio" value="yes" checked={Drouge === 'yes'} onChange={handleDrougeChange}  />
                           Oui &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                      </label>
                 <label>
                 <input type="radio" value="no" checked={Drouge === 'no'} onChange={handleDrougeChange}  />
                     Non
                 </label>
                </span>
              </td>
 </tr>
 

<button type="submit" className="btn btn-danger" style={{marginTop:'5%' , marginLeft:'100%'}}>Envoyer</button>


 <button className="btn btn-danger" style={{marginLeft:'2%' , marginTop:'-7%'}} onClick={handleBackClick}>Retour</button>

              </tbody>
            </table>
            </form>
       
       }
       <br/>
       <br/>
        {!showSecondPart && <button style={{marginLeft:'90%'}} className="btn btn-danger" onClick={handleClick}>Next</button>}
      
      </div>
      <br/>
      <Footer/>

    </div>
  );
}

export default Test;
