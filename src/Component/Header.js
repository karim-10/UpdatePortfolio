import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 


class Header extends Component {
    render() { 
        return ( 
            <div className="Header">
                <ul className="">
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/skills">Skills</Link> </li>
                    <li><Link to="/project">Projekte</Link></li>
                    <li><Link to="/Kontakt">Kontakt</Link></li>
                </ul>
            </div>
         );
    }
}
 
export default Header;