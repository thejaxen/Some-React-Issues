import React from 'react';
import Header from '../../Layout/Header';
import Addrandomcontact from './Addrandomcontact';
import Removeallcontact from './Removeallcontact';
import Addcontact from './Addcontact';
import Favoritecontacts from './Favoritecontacts';
import Generalcontact from './Generalcontact';
import Footer from "../../Layout/Footer";

class Contactindex extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <Addrandomcontact/>
                        </div>
                        <div className="col-4 ">
                            <Removeallcontact/>
                        </div>
                        <div className="row py-2">
                            <Addcontact/>
                        </div>
                        <div className="row py-2">
                            <Favoritecontacts/>
                        </div>
                        <div className="row py-2">
                            <Generalcontact/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contactindex;