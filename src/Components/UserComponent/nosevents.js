import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function NosEvent() {
  const [media, setMedia] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/media/medias?etat=publier")
      .then((response) => response.json())
      .then((data) => setMedia(data))
      .catch((error) => console.error(error));
  }, []);
  const filteredMedia = media.filter((media) =>
  media.description.toLowerCase().includes(searchTerm.toLowerCase())
);
const jus={
  textAlign: 'justify'
}

  const MediaBlocks = filteredMedia.map((media) => (
    <div className="col-lg-12 col-md-12 mb-5" key={media.id_media}>
      <div className="blog-item">
        <div className="blog-thumb">
        <h2 className="mt-3 mb-3">Dans {media.id_event.personneMorale.nom_entreprise} à {media.id_event.personneMorale.localisation}</h2>
        <center>
        {media.imagePath.split(',').map((imagePath, index) => (
  <img
    className="rounded float-left"
    key={index}
    style={{ width: '518px', height: '300px', marginLeft: '10px' }}
    src={`http://localhost:8080/${imagePath}`}
    alt={imagePath}
  />
))}
{media.videoPath && (
  <video width="500" height="300" controls>
    <source
      src={`http://localhost:8080/${media.videoPath}`}
      type="video/mp4"
      className="rounded float-right"
    />
  </video>
)}
</center>
 <div className="blog-item-content">
          <div class="blog-item-meta mb-3 mt-4">
										<span class="text-muted text-capitalize mr-3">
                    <i class="fa fa-calendar-check" aria-hidden="true">    </i> 
                        {new Date(media.id_event.date_event).toLocaleDateString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric'})}
                      </span> </div>
                <br/>
            <p className="mb-4"  style={jus}>{media.description} </p>
            
          </div>
         
        </div>
      </div>
      
   </div>
   
  ));
  const test={
    width : '1500px' ,
    height :'420px'
  }
  
  const text={
    marginTop:'-25%'
  }

  const img={
    width : '1500px' ,
    height :'420px',
    marginTop:'-8%'
}
  return (
    <div>
      <Header />
     
      <section className="page-title bg-1" style ={test}>
        
  


  <div className="overlay" >
  <img style ={img}src="images/event.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
          <h1 className="text-capitalize mb-5 text-lg">Nos évenements</h1>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>
      <section class="section blog-wrap">
    <div class="container">
        <div class="row">
        
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
           <div class="container">
        <div class="row">
        
				
            <div class="row">
             
             <div style={{marginTop:'20px'}}className="card-deck">{MediaBlocks}</div>
    
					
				</div>
        </div>
        </div>
        </section>
          



      



       
      <Footer />
    </div>
  );
}

export default NosEvent;
