import React, {Component} from 'react'

class HomeMe extends Component {
    state = { 
        img: "../../img/Abdulkarim.jpg",
        name: "Hi, mein Name ist Abdulkarim,",
        job : "Ich bin Web-Entwikcler ",
        title: "Ich hatte meine Weiterbildung als Web-Entwickler bei Supercode Gmbh in Düsseldorf absolviert.",
        btnText: "Zu Projekte",
    }
    render() { 
        return ( 
            <div className="HomeMe">
                <div>
                    <h1>{this.state.name}</h1>
                    <h2>{this.state.job}</h2>
                    <p>{this.state.title}</p>
                    <a href="/project">{this.state.btnText}</a>
                </div>
                <div>
                  <img src={this.state.img}></img>
                </div>
            </div>
         );
    }
}
 
export default HomeMe;