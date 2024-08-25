import Footer from "./Footer";
import Header from "./Header";

function Contact (){
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
          <h1 className="text-capitalize mb-5 text-lg">Crts-sfax</h1>
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
            +216 74245462 <br/> +216 74245433
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
            <i className="icofont-location-pin" />
            <h5>Localisation</h5>
            Croisement Avenue MajidaBoulila et rte El Aïn Km 0,5. 3029 Sfax ,Tunisie.
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
          <h3 className="mt-5 mb-4">Le Centre Régional de Transfusion Sanguine de Sfax (CRTS de Sfax)
</h3>

          
          <div className="divider my-4" />
          <p className="" style={jus}>Le Centre Régional de Transfusion Sanguine (CRTS) de Sfax est un centre universitaire. C’est la seule structure transfusionnelle dans la région de Sfax.</p>
     
          <p className="" style={jus}>Le CRTS de Sfax se compose d’une direction, d’un service de gestion des produits sanguins labiles et d’un service de laboratoire. Dans un souci de qualité, le CRTS de Sfax dispose de procédures écrites depuis 2000 et est informatisé depuis Juin 2008.</p>
          <p className="" style={jus}>Les structures qui bénéficient des prestations du CRTS de Sfax sont : les deux CHU de Sfax, le centre de maternité de Sfax, plus de 19 cliniques privées basées à Sfax, mais aussi les hôpitaux régionaux de Kerkennah, Mahares et Jebéniana. Le CRTS de Sfax fournit 
          de façon régulière des produits sanguins labiles au Centre et au Sud de la Tunisie.
          <br/>
          Les prestations fournies par le CRTS de Sfax sont :
          </p>
          <p><i class="icofont-brand-fitbit"></i> Prestations fournies par le service de gestion des produits sanguins labiles:</p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" />Prélèvement de 30 000 à 35 000 donneurs de sang par an.</li>
            <li><i className="icofont-check mr-2" />Distribution d’environ 60 000 produits sanguins labiles par an.</li>
            <li><i className="icofont-check mr-2" /> Aphérèses donneurs (concentrés plaquettaires d’aphérèse) et patients (échanges érythrocytaires et plasmatiques respectivement pour les patients drépanocytaires leur garantissant une meilleure qualité de vie, et les patients présentant des atteintes neurologiques et autres…)</li>
            <li><i className="icofont-check mr-2" />Préparation, stockage et gestion des produits sanguins labiles</li>
          </ul>

          <p><i class="icofont-brand-fitbit"></i> Prestations fournies par le service laboratoire :</p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" />Examens biologiques immuno-hématologiques et sérologiques pour les donneurs, le suivi des patients et des femmes enceintes.</li>
            <li><i className="icofont-check mr-2" />Examens biologiques d’hémostase et de biologie moléculaire.</li>
            <li><i className="icofont-check mr-2" />Contrôle de qualité continu des produits sanguins labiles et des réactifs.</li>
            <li><i className="icofont-check mr-2" />Immunophénotypage des hémopathies malignes pour tous les patients de Sfax et du Sud.</li>
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
export default Contact;