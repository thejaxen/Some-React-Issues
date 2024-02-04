
import logo from "./logo192.png";

const Header = () => {
    return(
        <div>
            <MainHeader/>
            
        </div>
    );
}

function MainHeader(){
    return(
        <div>
            <img src={logo} style={{height:"40px",verticalAlign:"top"}}></img>
            <span style={{backgroundColor:"black",color:"cyan"}}>React Countopedia</span>
        </div>
    );
}

export default Header;