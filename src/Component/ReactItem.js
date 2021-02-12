import React from 'react'


const ReactItem = (props)=>{
    return (
        <div className="ProjectItemMainCss">
        <div>
            <h1>{props.type}</h1>
        </div>          
        <div className="ProjectItemCss">
            <div>
                <a href={props.url} target="_blank">
                <img src={props.img}></img>
                 </a>
             </div>
             <div>
                <h1>{props.ProjectName}</h1>
                <a href={props.gitUrl} target="_blank">Link zum Github</a>
                <h3>{props.title}</h3>  
                <div className="icons">
                    <img src={props.ReactIcon}></img> 
                </div>   
            </div>      
        </div>
    </div>
    )

}

export default ReactItem;