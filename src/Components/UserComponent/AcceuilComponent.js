import { Link} from 'react-router-dom';

function Acceuil(){
  const event={
    color:'#d9013e',
    marginLeft:'20px'

  }
const image =  {
    height:'450px',
    weidth:'560px'
}
const color={
  color:'white'
}
const img1={
  height:'150px',
  weidth:'150px',
  marginLeft:'330%',
  marginTop:"1%",

}
    const img={
        height:'80px',
        weidth:'80px'
       
    }
    const jus={
      textAlign: 'justify'
    }
    const cadre ={
        height:'270px',
        weidth:'120px'
    }
    const video={
      marginLeft:'-60%',
      marginTop:'-20%'
    }
const titre={
  marginLeft:'-100%',

}
const handleClick = () => {
  const role = localStorage.getItem('role'); // Récupérer le rôle de l'utilisateur depuis le localStorage
  if (role === 'personne morale') {
    alert('Vous devez ouvrir un compte en tant que personne physique.');
  } else {
    // Rediriger l'utilisateur vers la page de prise de rendez-vous
    window.location.href = '/Rdv';
  }
};

    return(
  <div>
  <section className="banner">

    <div className="container">
      
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xl-7">
          <div className="block">
            <div className="divider mb-3" />
            <img style = {image} src="images/bg.png"></img>
          </div>
        </div>
      </div>
    </div>
  </section>
<section className="features">
  


  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="feature-block d-lg-flex">
          <div className="feature-item mb-5 mb-lg-0">
            <div className="feature-icon mb-4">
              <i className="icofont-surgeon-alt" />
            </div>
            <span>Service 24 heures sur 24</span>
            <h4 className="mb-3">Rendez-vous en ligne</h4>
            <p className="mb-4">Obtenez un soutien à tout moment en cas d'urgence..</p>
            <a className="btn btn-main btn-roundfull"onClick={handleClick}><Link style={color} >Prendre rendez-vous </Link></a>
          </div>
          <div className="feature-item mb-5 mb-lg-0">
            <div className="feature-icon mb-4">
              <i className="icofont-ui-clock" />
            </div>
            <span>Horaire</span>
            <h4 className="mb-3">Heures d'ouverture</h4>
            <ul className="w-hours list-unstyled">
              <li className="d-flex justify-content-between">Lun - Jeu : <span>8:00 - 17:00</span></li>
              <li className="d-flex justify-content-between">Ven - Sam : <span>8:00 - 12:00</span></li>
              <li className="d-flex justify-content-between">Dim - Dim : <span>Journée de repos</span></li>
            </ul>
          </div>
          <div className="feature-item mb-5 mb-lg-0">
            <div className="feature-icon mb-4">
              <i className="icofont-support" />
            </div>
            <span>Cas d'urgence</span>
            <h4 className="mb-3"> 71 573 884</h4>
            <p>Obtenez une assistance à tout moment en cas de besoin du sang en urgence.Connectez-vous avec nous pour toute urgence.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="section appoinment">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 ">
        <div className="appoinment-content">
          <img src="images/affiche.png" alt className="img-fluid" />
        
        </div>
      </div>
      <div className="col-lg-6 col-md-10 ">
        <div className="appoinment-wrap mt-5 mt-lg-0">
          <h2 className="mb-2 title-color">Analyse gratuite !</h2>
          <br/>
          <h5 className="mb-2 title-color"> Rejoignez-nous dans notre mission pour améliorer la santé et le bien-être de tous !"</h5>
          <br/>
          <p className="mb-4" style={jus}>
          Donner son sang est un acte de générosité qui peut sauver des vies.
           En plus de faire une différence pour ceux qui ont besoin de transfusions sanguines,
            vous pouvez également bénéficier d'un avantage personnel. Lorsque vous donnez votre sang,
             nous offrons des analyses gratuites pour vous aider à surveiller votre santé. 
             En faisant don de votre sang, vous faites un geste d'entraide pour la communauté tout 
             en recevant 
          un bilan de santé gratuit pour vous-même. C'est un choix <b>gagnant-gagnant</b> pour tous !"
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


<section className="cta-section ">
  <div className="container">
    <div className="cta position-relative">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-stat">
            <i class="icofont-blood-drop"></i>
            <span className="h3">200</span>mille + 
            <p>Litres de sang</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-stat">
          <i class="icofont-user-alt-2"></i>
            <span className="h3">750</span>+
            <p>Donneur par jour</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-stat">
          <i class="icofont-users-social"></i>
                      <span className="h3">274</span> mille+
            <p>Donneur par ans</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-stat">
          <i class="icofont-blood"></i>
          <span className="h3">370</span>mille
            <p>Poches de sang</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section service gray-bg">

  
  
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
        <div className="section-title">
          <h2>Don du sang</h2>
          <div className="divider mx-auto my-4" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
          <div className="icon d-flex align-items-center">
           <img  style={img} src ="images/test.png"></img>
            <h4 className="mt-3 mb-3">TEST : PUIS-JE DONNER DU SANG ? </h4>
          </div>
          <div style={cadre}>
            <p >Envie de savoir si vous pouvez donner du sang avant de vous rendre en collecte?

            <center> Faites le test <i class="icofont-arrow-right"></i></center>

            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
           <img  style={img} src ="images/sang.png"></img>
            <h4 className="mt-3 mb-3">COMMENT SE PASSE LE DON DE SANG ? </h4>
          </div>
          <div style={cadre}>
            <p >Vous désirez donner du sang, mais vous vous demandez comment ça se passe ?</p>
           <center> Les étapes du don<i class="icofont-arrow-right"></i></center>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
           <img  style={img} src ="images/delai.png"></img>
            <h4 className="mt-3 mb-3">DÉLAI ENTRE 2 DONS</h4>
          </div>
          <div style={cadre}>
            <p >Le délai entre deux dons varie en fonction du type de don que vous souhaitez effectuer.</p>
           <center> Plus d'informations <i class="icofont-arrow-right"></i></center>
          </div>
        </div>
      </div>
      <div className="section-title">
          <center><h2>Pourquoi donner son sang ?</h2></center>
          <div className="divider mx-auto my-4" />
        </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
       
        <div className="icon d-flex align-items-center">
           <img  style={img} src ="images/vie.png"></img>
            <h4 className="mt-3 mb-3">3 VIES </h4>
          </div>
          <div style={cadre}>
            <p><br/></p>
            <p ><br/><br/>Parce qu'en 30 minutes, vous pouvez sauver  3 vies !</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
           <img  style={img} src ="images/personne.png"></img>
            <h4 className="mt-3 mb-3">1 PERSONNE SUR 7 </h4>
          </div>
          <div style={cadre}>
            <p >Parce que moins d'1 personne sur 10 donne du sang alors qu'1 personne sur 7 en aura un jour besoin.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
           <img  style={img} src ="images/vital.png"></img>
            <h4 className="mt-3 mb-3">VITAL</h4>
          </div>
          <div style={cadre}>
            <p><br/></p>
            <p ><br/><br/>Parce qu'à l'heure actuelle, rien ne remplace le sang.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="ratio ratio-16x9" style={{ width: '900px', height: '500px', marginLeft:'300px'}}>
  <iframe src="images/sang2.mp4" title="Don du sang vidéo" autoplay></iframe>
</div>

<section className="section about">

  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4 col-sm-6">
        <div className="about-img">
          <img src="images/about/img-1.jpg" alt className="img-fluid" />
          <img src="images/about/img-2.jpg" alt className="img-fluid mt-4" />
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="about-img mt-4 mt-lg-0">
          <img src="images/about/img-3.jpg" alt className="img-fluid" />
        </div>
      </div>
    
      <div className="col-lg-4">
        <div className="about-content pl-4 mt-4 mt-lg-0">
          <h2 className="title-color">Engager mon entreprise<br />&amp; Organisation</h2>
          <p className="mt-4 mb-5"  style={jus}>Envie de mobiliser votre entreprise, organisation ou école en organisant une collecte de sang ? Contactez-nous et nous vous accompagnerons dans cette belle démarche ! </p>
          <p><Link to="/nosevents" style={event}><b>Voir nos évenements</b></Link></p>
          <a href="" className="btn btn-main-2 btn-round-full btn-icon"><Link to="/OrganiseCollect"style={color} >Plus d'informations </Link><i className="icofont-simple-right ml-3" /></a>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section clients">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="section-title text-center">
          <h2>Partenaires qui nous soutiennent</h2>
          <div className="divider mx-auto my-4" />
          <p></p>
        </div>
      </div>
    </div>
  </div>
  <div className="container" style={{display:'flex'}}>
         <center> <img style={img1} src="images/about/2.png" alt className="img-fluid" /></center>
  </div>
</section>


<section className="section about-page">

  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <h2 className="title-color">8 Avril Journée Nationale :</h2>
      </div>
      <div className="col-lg-8">
        <p style={jus}>	Le 8 avril de chaque année, la Tunisie célèbre la Journée nationale
de don du sang sous le signe“Donner du sang pour la vie donner
un sens à la vie”. Cette journée est destinée à promouvoir le don du
sang volontaire, bénévole et régulier. La Tunisie a besoin de 210
mille flacons de sang par an.</p>
        <img src="images/national.png" alt className="img-fluid" />
      </div>
    </div>
  </div>
</section>

<section className="section testimonial">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-6">
        <div className="section-title">
         <center><h2 style={titre}>Donner son sang c'est offrir la vie !</h2></center> 
          <div className="divider  my-4" />
        </div>
        <video style={video} width={700} height={500} controls>
       <source src="images/Give Blood African French[Mpgun.com].mp4" />

          </video>
      </div>
    </div>
  
  </div>
</section>

</div>
    );

}

export default Acceuil;