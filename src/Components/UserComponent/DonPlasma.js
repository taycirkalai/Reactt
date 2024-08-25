import Footer from "./Footer";
import Header from "./Header";

function DonPlasma (){
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
    const cadre ={
      height:'300px',
      }
  const img1={
    marginTop:'3%'

  }
  const texte ={
    marginTop:'10%',
    fontWeight : 'bold',
    color:'black'
    }
    const jus={
      textAlign: 'justify'
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
            <span className="text-white">DONNER</span>
          <h1 className="text-capitalize mb-5 text-lg">LE DON DE PLASMA</h1>
          <span className="text-white">Les protéines présentes dans le plasma sont utilisées pour traiter certains troubles de la coagulation sanguine 
          <br/>et immunitaires et pour contrôler les saignements abondants.</span>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

  <div className="container">

    <div className="row">
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <br/>
<h3 className="mt-5 mb-4">Qu'est ce que le plasma ?</h3>          
<div className="divider my-4" />
  <div className="container">
    <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-6">

        <div className="service-block mb-5" style={cadre}>

          <p style={texte}>Le plasma est la partie liquide du sang dans laquelle se trouvent des protéines essentielles pour l'organisme. 
            Il transporte les globules rouges, les globules blancs et les plaquettes</p>
        </div>
      </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
           <div className="service-block mb-6" style={cadre}>
             <img style={img1}src="images/plasmaa.png" alt className="img-fluid" />
             
             </div>
        </div>
     </div></div></div></div></div></div>   
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Comment se passe L'extraction du plasma ?</h3>
          <div className="divider my-4" />
          <p className="lead" style={jus}>L'extraction du plasma du sang est une procédure médicale courante utilisée pour séparer les composants liquides du sang. Le plasma est la partie liquide du sang qui contient des protéines, des nutriments, des électrolytes, des hormones, des enzymes et d'autres substances importantes pour le corps. Voici les étapes détaillées de la procédure d'extraction du plasma :</p>
          <ul className="list-unstyled department-service">
            <li style={jus}><i class="icofont-minus"></i>Préparation du patient : Avant de commencer la procédure, le patient doit être examiné par un professionnel de la santé pour s'assurer qu'il est en mesure de subir une extraction de plasma. Le patient doit être informé des risques et des avantages de la procédure et donner son consentement éclairé.</li>
            <li style={jus}><i class="icofont-minus"></i>Prélèvement de sang : Une fois que le patient est prêt, une aiguille est insérée dans une veine de son bras ou de sa main pour prélever une petite quantité de sang. La quantité de sang prélevée dépend du volume de plasma requis.</li>
            <li style={jus}><i class="icofont-minus"></i>Séparation du plasma : Le sang prélevé est ensuite placé dans une centrifugeuse, une machine qui tourne rapidement pour séparer les composants liquides du sang. Le plasma est séparé des cellules sanguines et recueilli dans un sac ou un flacon stérile.</li>
            <li style={jus}><i class="icofont-minus"></i>Collecte du plasma : Le plasma collecté est traité pour éliminer les cellules et autres impuretés, puis il est conservé au froid pour une utilisation ultérieure.</li>
            <li style={jus}><i class="icofont-minus"></i>Restitution des autres composants sanguins : Après que le plasma a été collecté, les cellules sanguines restantes sont réinjectées dans le corps du patient par la même aiguille utilisée pour le prélèvement de sang. Cela aide à minimiser la perte de cellules sanguines et réduit le risque d'anémie.</li>
          </ul>
          <p className="" style={jus}>L'extraction de plasma est généralement une procédure sûre et efficace, mais elle peut comporter certains risques, notamment des douleurs, des saignements ou des infections. Les professionnels de la santé suivent des protocoles stricts pour minimiser ces risques et assurer la sécurité et le confort des patients.</p>
          <center><img src="images/extraction.jpg"></img></center>
        </div>
      </div>
   
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Pourquoi donner du plasma ?</h3>
          <div className="divider my-4" />
          <p className="lead" style={jus}>Certains médicaments ne peuvent être fabriqués qu’à partir du plasma humain et sont indispensables à la survie et au mieux-être de nombreux patients. Sous sa forme naturelle ou sous forme de médicaments, le plasma sert à traiter un grand nombre de pathologies.
            Le don de plasma peut être bénéfique dans plusieurs cas :

          </p>
          <ul className="list-unstyled department-service">
            <li  style={jus}><i className="icofont-check mr-2" />Pour aider les personnes atteintes de maladies auto-immunes ou de troubles de la coagulation du sang : Les personnes atteintes de ces maladies peuvent avoir besoin de recevoir du plasma pour obtenir des protéines spécifiques ou des facteurs de coagulation manquants dans leur propre sang.</li>
            <li  style={jus} ><i className="icofont-check mr-2" />Pour aider les personnes atteintes de brûlures, de blessures graves ou de choc : Les patients atteints de brûlures ou de blessures graves peuvent perdre une grande quantité de sang, ce qui peut entraîner une diminution de la pression artérielle et des niveaux de plasma. Le plasma peut être administré pour restaurer les niveaux de liquide et de protéines dans le corps.</li>
            <li  style={jus}><i className="icofont-check mr-2" />Pour aider les personnes atteintes de maladies infectieuses : Le plasma peut être utilisé pour aider à traiter les infections virales, telles que la grippe, ou pour fournir des anticorps à une personne atteinte d'une infection grave comme le COVID-19. Les anticorps présents dans le plasma de personnes qui se sont remises de la maladie peuvent être transférés à une personne atteinte de la même maladie pour aider à combattre l'infection.</li>
          </ul>
                    <center><img src="images/PlasmaSang.jpg"></img></center>
                    <br/>
        </div>
      </div>
   
    </div>
  </div>
</div>

<Footer/>

    </div>
);
}
export default DonPlasma;