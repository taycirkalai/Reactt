import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("question", question);
    formData.append("email", email);
    try {
      const response = await axios.post("http://localhost:8080/api/message/ajout", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      alert("message envoyer avec succes ")
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/message/messages?etat=publier")
      .then((response) => response.json())
      .then((data) => setMessage(data))
      .catch((error) => console.error(error));
  }, []);
  const filteredMsg = message.filter((msg) =>
    msg.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const msgsBlocks = filteredMsg.map((msg) => (
    <div class="row">
      <div class="col" key={msg.id_msg}>
        <div class="d-flex flex-start">
          <img class="rounded-circle shadow-1-strong me-3"
            src="https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg" alt="avatar" width="65"
            height="65" />
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-1">
                <b style={{ color: 'black' }}>Question : </b>    
                <span class="small" style={{ marginLeft: '10px' }}>
                  -- {new Date(msg.date_question).toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric', year: 'numeric' })}  --
                </span>
              </p>
            </div>
            <p class="small mb-0">
            {msg.question}
            </p>
          
          <div class="d-flex flex-start mt-4">
                      <a class="me-3" href="#">
                      <img class="rounded-circle shadow-1-strong me-3"
            src="./images/favicon.ico" alt="avatar" width="65"
            height="65" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-1">
                            <b style={{ color: 'black' }}>Reponse : </b>
                            <span class="small" style={{ marginLeft: '10px' }}>
                  -- {new Date(msg.date_reponse).toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric', year: 'numeric' })}  --
                </span>    
                            </p>
                          </div>
                          <p class="small mb-0">
                          {msg.reponse}
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
        </div>
        <br></br>
      </div>
     
    </div>

  ));

  const img = {
    width: '1500px',
    height: '420px',
    marginTop: '-8%'
  }
  const test = {
    width: '1500px',
    height: '420px'
  }

  const text = {
    marginTop: '-25%'
  }
  return (
    <div>
      <Header />
      <div>

        <section className="page-title bg-1" style={test}>


          <div className="overlay" >
            <img style={img} src="images/connexion.jpg"></img>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center" >
                  <div style={text}>
                    <span className="text-white">UNE DEMANDE ? <br /></span>
                    <h1 className="text-capitalize mb-5 text-lg">Contactez-nous</h1>
                    <span className="text-white">Vous venez de faire un don et vous avez des questions, contactez le 71 561 920.
                      <br /> Pour toute autre question, contactez le 71 573 884  ou remplissez le formulaire ci-dessous.</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <section className="section contact-info pb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="contact-block mb-4 mb-lg-0">
                    <i className="icofont-live-support" />
                    <h5>Appelez-nous</h5>
                    +261 71 561 920
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="contact-block mb-4 mb-lg-0">
                    <i className="icofont-support-faq" />
                    <h5>Email</h5>
                    dondusangdonnevie@gmail.com
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="contact-block mb-4 mb-lg-0">
                    <i className="icofont-location-pin" />
                    <h5>Localisation</h5>
                    Bab Saadoun station - Tunisia
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div style={{marginTop:'70px'}} className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 className="text-md mb-2">MESSAGES</h2>
              <div className="divider mx-auto my-4" />
            </div>
          </div>
        </div>
        <section class="gradient-custom" style={{marginTop:'-120px'}}>
          <div class="container my-5 py-5">
            <div class="row d-flex justify-content-center">
              <div class="col-md-12 col-lg-10 col-xl-8"style={{backgroundColor:'#CFD7F8'}}>
                <div class="card">
                  <div class="card-body p-4">
                    <h4 class="text-center mb-4 pb-2"> 
                    <form>
                        <input

                          className="form-control border-0"
                          type="search"
                          placeholder="Recherche"
                          value={searchTerm}
                          onChange={handleSearch}
                        /></form>
                    </h4>
                    <div class="row" >
                      {msgsBlocks }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <section className="contact-form-wrap section"style={{backgroundColor:'#ECEEF8'}}>
            <div className="container">
              <div className="row justify-content-center"  style={{marginTop:'-80px'}}>
                <div className="col-lg-6">
                  <div className="section-title text-center">
                    <h2 className="text-md mb-2">Contactez-nous</h2>
                    <div className="divider mx-auto my-4" />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <form id="contact-form" className="contact__form " onSubmit={handleFormSubmit}>
                    {/* form message */}

                    <div className="row">

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Votre Adresse Email "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <textarea
                            name="question"
                            id="question"
                            className="form-control"
                            rows={8}
                            placeholder="Votre message"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                          />
                        </div>
                      </div>

                    </div>
                    <div className="text-center">
                      <input className="btn btn-main btn-round-full" name="submit" type="submit" defaultValue="Send Messege" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
       
      </div>
      <br></br>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.566172422665!2d10.155108914898385!3d36.80495067994756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd339e90c9f481%3A0xd9b67502b8aeb544!2sCentre%20national%20de%20transfusion%20sanguine!5e0!3m2!1sfr!2stn!4v1679660560055!5m2!1sfr!2stn" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
      </div>
      <br />
      <Footer />

    </div>
  );
}
export default Contact;