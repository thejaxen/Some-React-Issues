import background from "./images/background.png";

function Header(){
    return(
      <div>
      <MainHeader/>
      <SubHeader/>
      </div>
    );
  }
  function MainHeader(){
    return(
      <div className= "pt-3 p1-2"   style={{backgroundColor:"white"}}>
        <img src={background} style={{height:"35px",verticalAlign:"top"}}></img>
        <h1 className="heading1" >React Course</h1>
      </div>
    );
  }
  function SubHeader(){
    return(
      <p style={subHeaderStyle}>This is a subheader.</p>
    );
  }
  const subHeaderStyle={
    color:"red",
    backgroundColor:"black"
  }

  export default Header;