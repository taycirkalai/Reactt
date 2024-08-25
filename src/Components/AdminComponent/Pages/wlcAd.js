function Wlc(){
    const divStyle1 = {
        marginLeft: '25%'
      };
      const img = {
        height: '80%',
        width:'70%',
        marginTop:'1%',
        marginLeft:"-5%"
      };
      const bn = {
        color:"#f20034",
        marginLeft:"10%",
        marginTop:'4%'
      };
    return(
<div style={divStyle1} >
<h1 class="mb-4" style={bn}>BIENVENUE ADMIN</h1>
      <img src="images/admine.jpg"alt="wlc" style={img}></img>
      <h1 class="mb-4"></h1>
       

    </div>

             
)
}
export default Wlc;