import Footer from "./Footer";
import Header from "./Header";

function Jandouba (){
    const jus={
        textAlign: 'justify'
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
        marginTop:'-25%'
    }
return (
    <div>
<Header/>
<div>

<section className="page-title bg-1" style ={test}>
  


  <div className="overlay" >
  <img style ={img}src="images/centre.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
          <h1 className="text-capitalize mb-5 text-lg">Crts-jandouba</h1>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>
<section className="section contact-info pb-0">
    
    <div className="container" style ={{marginLeft:'25%'}}>
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
            <i className="icofont-live-support" />
            <h5>Appelez-nous</h5>
            +216 78 604 558 / +216 78 604 569
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
            <i className="icofont-location-pin" />
            <h5>Localisation</h5>
            Boulevard du Grand Maghreb
</div>
        </div>
      </div>
    </div>
  </section>
<div>


  <section className="section department-single">
  
  <div className="container">
   
    <div className="row">
      
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Le Centre Régional de Transfusion Sanguine de Jandouba (CRTS de Jandouba)
</h3>

          
          <div className="divider my-4" />
     
          <p><i class="icofont-brand-fitbit"></i>Activités du centre :</p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" />Le centre assure des collectes de sang en intramuros et extramuros.</li>
            <li><i className="icofont-check mr-2" />Il couvre les besoins des gouvernorats de Jendouba, Béja, Kef, Seliana en produits sanguins labiles.</li>
            <li><i className="icofont-check mr-2" />Il approvisionne aussi bien les cliniques privées que les structures publiques.</li>
          </ul>
        </div>
      </div>
    
    
    </div>
  </div>
</section>

    
</div>


</div>





<Footer/>

    </div>
);
}
export default Jandouba;