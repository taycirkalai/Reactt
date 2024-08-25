import Footer from "./Footer";
import Header from "./Header";
import { useNavigate , Link} from 'react-router-dom';

function DonPlasma (){
    const video={
        marginLeft:'-60%',
        marginTop:'-20%'
      }

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
        marginTop:'-30%'
    }
    
    const jus={
      textAlign: 'justify'
    }
    const icone ={
        width : '80%' ,
        height :'80%'
    }
return (
    <div>
<Header/>
<div>

<section className="page-title bg-1" style ={test}>
    
  <div className="overlay" >
  <img style ={img}src="images/plasma.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white">QUI PEUT DONNER ?</span>
          <h1 className="text-capitalize mb-5 text-lg">CONTRE-INDICATIONS</h1>
          <span className="text-white">Voyages, médicaments, maladies ou encore tatouage sont quelques-unes des contre-indications temporaires <br/>ou définitives au don de sang, de plasma ou de plaquettes. Découvrez les principales ci-dessous.
</span>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section department-single">
  
  <div className="container">
   
    <div className="row">
      <div className="">
        <div className="">
          <h2 className="mt-5 mb-4">Contre-indications</h2>
          <div className="divider my-4" />
          <p className="lead" style={jus}>Voici une liste de critères reprenant certaines contre-indications. Attention, cette liste est indicative et non exhaustive. Seul l’entretien médical avant le don ainsi que le questionnaire médical comptent. Dès lors, il se peut que le médecin ne vous autorise pas à donner du sang pour assurer votre sécurité ou celle du receveur. Cette sécurité est la priorité du Service du Sang.</p>
          
        </div>
       
      </div>
    </div>
  </div>
</section>




  <div className="container">    
    <div className="row shuffle-wrapper portfolio-gallery">
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img style = {icone} src="images/covid19.png" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>COVID 19</p></center>
                </div> 
          </div>
          
        </div>
      </div>
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img style = {icone} src="images/age.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Âge</p></center>
                </div> 
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/grossesse.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Grossesse</p></center>
                </div> 
          </div>
        
        </div>
      </div>
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/poids.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Poids</p></center>
                </div> 
          </div>
         
        </div>
      </div>
      <br/>
   
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img style = {icone}src="images/comportements.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Comportements sexuels</p></center>
                </div> 
          </div>
          
        </div>
      </div>
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/mst.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>MST</p></center>
                </div> 
          </div>
          
        </div>
      </div>
      
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/vaccins.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Vaccins</p></center>
                </div> 
          </div>
        
        </div>
      </div>
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/medicaments.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Médicaments</p></center>
                </div> 
          </div>
       
        </div>
      </div>
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/malade.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Maladie</p></center>
                </div> 
          </div>
        
        </div>
      </div>
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/dentiste.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Dentiste</p></center>
                </div> 
          </div>
        
        </div>
      
      </div>
      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/drogue.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Drogue</p></center>
                </div> 
          </div>
           
        </div>
      
      </div>

      <div className="col-lg-2 col-sm-5 col-md-5 mb-3 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
        <div className="position-relative doctor-inner-box">
          <div className="doctor-profile">
            <div className="doctor-img">
              <img src="images/tatouage.jpg" alt="doctor-image" className="img-fluid w-100" />
            </div>
            <div class="">
                	<center><p>Piercing et tatouage</p></center>
                </div> 
          </div>
           
        </div>
      </div>
      
    </div>
  </div>
  <br/>
  <br/>
  <div className="section-title">
         <center><h2>EN 30 MINUTES, VOUS POUVEZ SAUVER 3 VIES</h2></center> 
          <div className="divider  my-4" />
        </div>


</div>

<Footer/>

    </div>
);
}
export default DonPlasma;