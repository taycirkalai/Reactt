import Footer from "./Footer";
import Header from "./Header";

function DonPlaquette (){
  const img1={
    height:'80px',
    weidth:'80px'
   
}
    const img={
        width : '1500px' ,
        height :'420px',
        marginTop:'-8%'
    }
    const jus={
      textAlign: 'justify'
    }
    const test={
        width : '1500px' ,
        height :'420px'
    }
    const text={
        marginTop:'-30%'
    }
    const plq={
      width : '400px' ,
      height :'450px',
      marginTop:'-60%',
      marginLeft:'110%',

    }
    const cadre ={
      height:'280px',
      weidth:'120px'
  }
return (
    <div>
<Header/>
<div>

<section className="page-title bg-1" style ={test}>

  <div className="overlay" >
  <img style ={img}src="images/plaquette.png"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white">DONNER</span>
          <h1 className="text-capitalize mb-5 text-lg">LE DON DE PLAQUETTES</h1>
          <span className="text-white">Les plaquettes sont utiles pour les patients transplantés, atteints de cancer ou de maladies du sang comme la leucémie.
          <br/> Elles sont souvent transfusées après une chimiothérapie ou une radiothérapie.</span>
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
          <h3 className="mt-5 mb-4">Qu'est-ce que les plaquettes ?</h3>
          <div className="divider my-4" />
          <p className="" style={jus}>Les plaquettes « thrombocytes » sont produites dans la moelle osseuse et jouent un rôle primordial dans la prévention ou l’arrêt des saignements. Elles s’agglutinent, forment un caillot et permettent de stopper les hémorragies.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    
    <div className="row">
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">comment obtenues les plaquettes?</h3>
          <div className="divider my-4" />
          <p className="" style={jus}>Les plaquettes peuvent être obtenues à partir d’un don de sang total ou par cytaphérèse. L’avantage de la cytaphérèse est qu’elle nous permet de récolter, en un seul don, autant de plaquettes que 5 à 10 dons de sang.
Une fois prélevées, les plaquettes se conservent à une température de 20-24°C, sous agitation constante. Leur durée de conservation est de 5 jours. Pour cette raison, il n’est pas possible de constituer des stocks importants. Il est donc indispensable d’avoir, au quotidien, suffisamment de prélèvements afin de pouvoir soigner les patients et faire face à la demande des hôpitaux.</p>
<center><img style ={plq}src="images/extractionpalquette.jpg"></img></center>

        </div>
      </div>
    </div>
  </div>
  <div className="container">

    <div className="row">
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Pourquoi donner des plaquettes ?</h3>
          <div className="divider my-4" />
          <p className="" style={jus}>Les plaquettes sont souvent nécessaires pour les personnes atteintes de certaines maladies ou subissant certains traitements qui affectent leur production de plaquettes. Par exemple, les personnes atteintes de cancer peuvent avoir besoin de transfusions de plaquettes pour aider à prévenir les saignements causés par les effets secondaires des traitements contre le cancer, tels que la chimiothérapie. Les personnes atteintes de troubles de la coagulation ou de maladies du sang, comme la thrombocytopénie ou la leucémie, peuvent également avoir besoin de transfusions de plaquettes.
En bref, les transfusions de plaquettes sont nécessaires pour aider à prévenir les saignements chez les personnes atteintes de maladies ou de traitements qui affectent leur production de plaquettes, et peuvent donc être essentielles pour sauver des vies ou améliorer la qualité de vie des patients.</p>
        </div>
      </div>
    </div>
  </div>
 
  <br/>
  <br/>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
        <div className="section-title">
          <h2>À qui servent les plaquettes ?</h2>
          <div className="divider mx-auto my-4" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
           <img  style={img1} src ="images/patient.png"></img>
            <h4 className="mt-3 mb-3">PATIENTS TRANSPLANTÉS</h4>
          </div>
          <div style={cadre}>
            <p style={jus}>
              <br/>
            La transfusion de plaquettes est vitale pour les patients transplantés.

            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
           <img  style={img1} src ="images/cancer.png"></img>
            <h4 className="mt-3 mb-3">PERSONNES ATTEINTES D'UN CANCER</h4>
          </div>
          <div style={cadre}>
            <br/>
            
            <p style ={jus}>Les traitements par chimiothérapie sont des traitements lourds qui entraînent la destruction des cellules cancéreuses en même temps que la destruction temporaire des cellules de la moelle osseuse. Dès lors, l’organisme ne peut plus renouveler seul les cellules sanguines. Pour pallier à ces effets toxiques, on a recours à des transfusions de plaquettes et de globules rouges afin de reconstituer les cellules issues de la moelle osseuse.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
           <img  style={img1} src ="images/maladie.png"></img>
            <h4 className="mt-3 mb-3">PERSONNES ATTEINTES DE MALADIES HÉMATOLOGIQUES</h4>
          </div>
          <div style={cadre}>
            <p style ={jus}>Ces maladies touchent la moelle osseuse et affectent la production des cellules sanguines. Les patients souffrant de ces maladies ont besoin de transfusions régulières et d'une grande quantité de globules rouges, de plaquettes ou de plasma, selon les cas.</p>
          </div>
        </div>
      </div>
  
      
        
  
    </div>
  </div>

 

</div>





<Footer/>

    </div>
);
}
export default DonPlaquette;