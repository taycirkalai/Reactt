import logo from'../pics/logo.png'

function Footer(){
  const img={
    height:'80px',
    weidth:'80px'
}
  return(
 <footer className="footer section gray-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mr-auto col-sm-6">
        <div className="widget mb-5 mb-lg-0">
          <div className="logo mb-4">
            <img style={img} src={logo} />
          </div>
          <p>Le Service du Sang organise de nombreuses collectes de sang partout en Tunisie. Chaque jour, nous avons besoin de votre générosité !</p>
          <ul className="list-inline footer-socials mt-4">
            <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="icofont-facebook" /></a></li>
            <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="icofont-twitter" /></a></li>
            <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="icofont-linkedin" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="widget mb-5 mb-lg-0">
          <h4 className="text-capitalize mb-3">DONNER</h4>
          <div className="divider mb-4" />
          <ul className="list-unstyled footer-menu lh-35">
            <li><a href="#">Don de sang</a></li>
            <li><a href="#">Délai entre 2 dons</a></li>
            <li><a href="#">Plus sur le sang</a></li>
            <li><a href="#">Notre mission</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="widget mb-5 mb-lg-0">
          <h4 className="text-capitalize mb-3">Action</h4>
          <div className="divider mb-4" />
          <ul className="list-unstyled footer-menu lh-35">
            <li><a href="#">Centre de prélèvement</a></li>
            <li><a href="#">Organiser une collecte</a></li>
            <li><a href="#">Devenir ambassaseur</a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="widget widget-contact mb-5 mb-lg-0">
          <h4 className="text-capitalize mb-3">Contactez-nous</h4>
          <div className="divider mb-4" />
          <div className="footer-contact-block mb-4">
            <div className="icon d-flex align-items-center">
              <i className="icofont-email mr-3" />
              <span className="h6 mb-0">Disponible pour 24/7</span>
            </div>
            <h4 className="mt-2"><a href="tel:+23-345-67890">dondusangdonnevie@gmail.com</a></h4>
          </div>
          <div className="footer-contact-block">
            <div className="icon d-flex align-items-center">
              <i className="icofont-support mr-3" />
              <span className="h6 mb-0">lundi au samedi: 08:30-18:00</span>
            </div>
            <h4 className="mt-2"><a href="tel:+23-345-67890">+216 71 568 903</a></h4>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-btm py-4 mt-5">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6">
          <div className="copyright">
             Copyright ©<span className="text-color">2023 Tous droits réservés.</span>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
            <form action="#" className="subscribe">
              <input type="text" className="form-control" placeholder="Your Email address" />
              <a href="#" className="btn btn-main-2 btn-round-full">Subscribe</a>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <a className="backtop js-scroll-trigger" href="#top">
            <i className="icofont-long-arrow-up" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
}
export default Footer;