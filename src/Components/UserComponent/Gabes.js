import Footer from "./Footer";
import Header from "./Header";

function Gabes (){
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
          <h1 className="text-capitalize mb-5 text-lg">Crts-Gabes</h1>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

<div>



<section className="section contact-info pb-0">
    <div className="container"  style ={{marginLeft:'25%'}}>
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
            <i className="icofont-live-support" />
            <h5>Appelez-nous</h5>
            +261 75 211 032 /
            +216 98 724 942
          </div>
        </div>
     
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
            <i className="icofont-location-pin" />
            <h5>Localisation</h5>
            À coté de l’hôpital régional de Gabès.</div>
        </div>
      </div>
    </div>
  </section>
  <section className="section department-single">
  
  <div className="container">
   
    <div className="row">
      
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Le Centre Régional de Transfusion Sanguine de Gabes (CRTS de Gabes)
</h3>

          
          <div className="divider my-4" />
          <p><i class="icofont-brand-fitbit"></i> Activités du CRTS de Gabès :</p>
          <p>Le CRTS assure :</p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" />Les collectes de sang</li>
            <li><i className="icofont-check mr-2" />La préparation de CGR, PFC et CSP à partir des poches de sang.</li>
            <li><i className="icofont-check mr-2" />La validation immunohématologique du don ( ABO RhD ).</li>
            <li><i className="icofont-check mr-2" />La validation sérologique du don ( HIV, HBs, HCV, Syphilis).</li>
            <li><i className="icofont-check mr-2" />Phénotypage des poches de sang.</li>
            <li><i className="icofont-check mr-2" />Stockage et distribution des produits sanguins.</li>


          </ul>

          <p>Le CRTS approvisionne :</p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" />Les hôpitaux</li>
            <li><i className="icofont-check mr-2" />Les cliniques</li>
            <li><i className="icofont-check mr-2" />Les centres de dialyse des gouvernorats du Sud Est.</li>
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
export default Gabes;