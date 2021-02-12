import React, {Component} from 'react'
import '../App.css'
class Kontakt extends Component {
    state = { 
        gitUrl: "https://github.com/karim-10?tab=repositories",
        gitIcon: "../../img/github.png",
        linkedinIcon: "../../img/linkedin.png",
     }
    render() { 
        return ( 
            <div className="Kontakt">
                
                <div className="container">
                    <h1>Kontakt</h1>
                <form action="">
                    <input type="text" id="fname" name="firstname" placeholder="Vorname"></input>
                    <input type="text" id="lname" name="lastname" placeholder="Nachname"></input>
                    <input type="Email" id="email" name="email" placeholder="Email"></input>
                    <textarea id="subject" name="subject" placeholder="worum geht es?"></textarea>
                    <input type="submit" value="Senden"></input>
                </form>
               </div>
               <div className="Social">
                   <a href={this.state.gitUrl}><img src={this.state.gitIcon}></img></a>
                   <a><img src={this.state.linkedinIcon}></img></a>
               </div>
            </div>
         );
    }
}
 
export default Kontakt;