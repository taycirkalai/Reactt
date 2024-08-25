import Footer from "./Footer";
import Header from "./Header";

function Sousse (){
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
          <h1 className="text-capitalize mb-5 text-lg">Crts-sousse</h1>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

<div>

<section className="section contact-info pb-0">
    
    <div className="container" style ={{marginLeft:'25%'}}>
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
            <i className="icofont-live-support" />
            <h5>Appelez-nous</h5>
            +216 73209093 <br/> +216 73214200
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
            <i className="icofont-location-pin" />
            <h5>Localisation</h5>
            A l ‘intérieur de l’hôpital Farhat Hached Sousse
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section department-single">
  
  <div className="container">
   
    <div className="row">
      
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Le Centre Régional de Transfusion Sanguine de Sousse (CRTS de Sousse)
</h3>

          
          <div className="divider my-4" />
          <p><i class="icofont-brand-fitbit"></i> Le centre régional universitaire comprend deux services :</p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" /> Service Qualification biologique du don.</li>
            <li><i className="icofont-check mr-2" />Service Gestion des produits sanguins.</li>
  
          </ul>

          <p><i class="icofont-brand-fitbit"></i><b> Activités :</b></p>
          <p>Le CRTS Sousse est chargé de :</p>
          <ul className="list-unstyled department-service">
            <li  style={jus}><i className="icofont-check mr-2" />La collecte du sang homologue soit au sein du CRTS soit lors des sorties programmées.</li>
            <li  style={jus}><i className="icofont-check mr-2" />La collecte des plaquettes par cytaphérèse (CPA). </li>
            <li  style={jus}><i className="icofont-check mr-2" />Les prélèvements thérapeutiques .</li>
            <li  style={jus}><i className="icofont-check mr-2" />La préparation des différents produits sanguins labiles (PSL) avec différentes qualifications et transformations.</li>
            <li  style={jus}><i className="icofont-check mr-2" />La collecte du sang homologue soit au sein du CRTS soit lors des sorties programmées.</li>
            <li  style={jus}><i className="icofont-check mr-2" />La qualification biologique du don : Groupage ABO RhD ; Phénotypage Rh Kell ; Dépistage de l’antigène HBs ; Dépistage des antigènes HIV et anticorps anti-HIV ; Dépistage des antigènes HCH et anticorps anti-HCV ; Dépistage des anticorps anti-tréponème (TPHA). </li>
            <li  style={jus}><i className="icofont-check mr-2" />Distribution des PSL pour les établissements de soins étatiques et privés de la région.</li>
            <li  style={jus}><i className="icofont-check mr-2" />Exécution des examens immuno-hématologiques pour les malades :</li>
            <li style={jus}><i class="icofont-minus"></i> Test de compatibilité érythrocytaire.</li>
            <li style={jus}><i class="icofont-minus"></i>Phénotypage érythrocytaire.</li>
            <li style={jus}><i class="icofont-minus"></i>Recherche des agglutinines irrégulières.</li>
            <li style={jus}><i class="icofont-minus"></i>Test de Coombs direct…</li>
            <li  style={jus}><i className="icofont-check mr-2" />Typage HLA à la recherche de donneur de moelle HLA identique.</li>
            <li  style={jus}><i className="icofont-check mr-2" />Cytométrie en flux : suivi des malades HIV positifs par détermination du taux CD4/CD8.</li>
            <li  style={jus}><i className="icofont-check mr-2" />Encadrement et recherche.</li>

          
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
export default Sousse;