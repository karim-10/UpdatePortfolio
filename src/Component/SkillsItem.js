import React from 'react'
import '../App.css'
const SkillsItem = (props)=>{
    return (
        <div className="Skills">
            <h1>Skills</h1>
            <div className="Skills1">
                <div>
                    <h2>{props.name}</h2>
                    <div>
                        <img src={props.htmlIcon}></img>
                        <img src={props.cssIcon}></img>
                        <img src={props.jsIcon}></img>
                        <img src={props.bootstrapIcon}></img>
                        <img src={props.sassIcon}></img>
                        <img src={props.reactIcon}></img>
                        <img src={props.nextIcon}></img>
                        <img src={props.wordIcon}></img>
                        <img src={props.uxIcon}></img>
                        <img src={props.figmaIcon}></img>
                    </div>
                </div>
                <div>
                    <h2>{props.name1}</h2>
                    <div>
                    <img src={props.nodeIcon}></img>
                        <img src={props.mongoIcon}></img>
                        <img src={props.apiIcon}></img>
                        <img src={props.expressIcon}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsItem ;