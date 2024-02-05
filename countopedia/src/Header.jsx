
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
            
            <span style={{backgroundColor:"white",color:"cyan",fontWeight:"bold",fontSize:"20px",textAlign:"center"}}>
            <img src={logo} style={{height:"40px",verticalAlign:"top"}}></img>
                React Course - Countopedia</span>
        </div>
    );
}
export default Header;