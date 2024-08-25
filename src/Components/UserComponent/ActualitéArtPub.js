import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function ActualiteArtPub() {
  const [articles, setArticles] = useState([]);
  const [pubs, setPublications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/article/articles?etat=publier")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);
  const filteredArticles = articles.filter((article) =>
  article.titre.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredPubs = pubs.filter((pub) =>
  pub.titre.toLowerCase().includes(searchTerm.toLowerCase())
);
  useEffect(() => {
    fetch("http://localhost:8080/api/pub/pubs?etat=publier")
      .then((response) => response.json())
      .then((data) => setPublications(data))
      .catch((error) => console.error(error));
  }, []);
  const jus={
    textAlign: 'justify'
  }
  const articleBlocks = filteredArticles.map((article) => (

    
    <div className="col-lg-12 col-md-12 mb-5" key={article.id}>
      <div className="blog-item">
        <div className="blog-thumb">
          <div className="blog-item-content">
            <h2 className="mt-3 mb-3">{article.titre}</h2>
            <img className="img-fluid" src={`http://localhost:8080/${article.imagePath}`} alt={article.imagePath} style={{ width: '518px', height: '300px', marginLeft: '10px' }}></img>
            <p className="mb-4" style={jus}>{article.description}</p>
        
          </div>
        </div>
      </div>
      
   </div>
  ));
  const pubBlocks = filteredPubs.map((pub) => (
    <div className="col-lg-12 col-md-12 mb-5" key={pub.id_pub}>
      <div className="blog-item">
        <div className="blog-thumb">
          <img className="img-fluid" src={`http://localhost:8080/${pub.imagePath}`} alt={pub.imagePath}></img>
          <div className="blog-item-content">
          <div class="blog-item-meta mb-3 mt-4">
										<span class="text-muted text-capitalize mr-3">
                    <i class="fa fa-calendar-check" aria-hidden="true">    </i> 
                        {new Date(pub.date_debut).toLocaleDateString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric'})}
                      </span>  
										<span class="text-black text-capitalize mr-3">
                    <i class="fa fa-calendar-times" aria-hidden="true"></i>
                      {new Date(pub.date_fin).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}
                      </span>
									</div>

            <h2 className="mt-3 mb-3">{pub.titre}</h2>
            <p className="mb-4" style={jus}>{pub.description}</p>
          
          </div>
        </div>
      </div>
      
   </div>
  ));


  const img = {
    width: '1500px',
    height: '430px',
    marginTop: '-8%'
  }

  const text = {
    marginTop: '-22%',
    marginLeft:'-5%'
  }
  const test = {
    width: '1500px',
    height: '430px'
  }
  return (
    <div>
      <Header />
      <section className="page-title bg-1" style ={test}>
  


  <div className="overlay" >
  <img style ={img}src="images/article.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
          <h1 className="text-capitalize mb-5 text-lg">Les Publications & Les Articles</h1>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>
      
<section class="section blog-wrap">
    <div class="container">
        <div class="row">
        <div className="block text-center" >
          <h1 style={{marginTop:'0px'}}  className="text-capitalize mb-5 text-lg">Les Publications & Les Articles<div className="divider mx-auto my-4" /> </h1></div>
            <div class="col-lg-8">
                <div class="row">
                <div style={{marginTop:'5px'}}className="card-deck">{pubBlocks}</div>
          <div style={{marginTop:'20px'}}className="card-deck">{articleBlocks}</div>
         
            
          </div>
        </div>
      
        <div class="col-lg-4">
					<div class="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
						<div class="sidebar-widget search  mb-3 ">
							<h5>Chercher ici</h5>
							<form action="#" class="search-form">
              <input type="text" class="form-control" placeholder="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
								<i class="ti-search"></i>
							</form>
						</div>
		

					</div>
				</div>
        </div>
        </div>
        </section>
       
      <Footer />
    </div>
  );
}

export default ActualiteArtPub;
