import React,{Component} from 'react';
import data from './ProjectData';
import data1 from './ProjectData1';
import data2 from './MongoDbData';
import data3 from './ExpressItemData';
import data5 from './ReactData';
import ProjectItem from './ProjectItem';
import ProjectItem1 from './ProjectItem1';
import MongoDbItem from './MonogDbItem';
import ExpressItem from './ExpressItem';
import ReactItem from './ReactItem';


class Project extends Component {
    state = { 
        data: data,
        data1: data1,
        data2: data2,
        data3 :data3,
        data5 :data5,
    }
    
    render() { 
        return ( 
            <div className="Project">
                {this.state.data.map((elt,i) =>(
                    <ProjectItem
                    key={elt.i}
                    img={elt.img}
                    url={elt.url}
                    ProjectName={elt.ProjectName}
                    title={elt.title}
                    htmlIcon={elt.htmlIcon}
                    cssIcon={elt.cssIcon}
                    /* jsIcon={elt.jsIcon} */
                    gitUrl={elt.gitUrl}
                    type={elt.type}
                    />
                    ))}

                {this.state.data1.map((elt) =>(
                    <ProjectItem1 
                    key={elt.i}
                    img={elt.img}
                    url={elt.url}
                    ProjectName={elt.ProjectName}
                    title={elt.title}
                    htmlIcon={elt.htmlIcon}
                    cssIcon={elt.cssIcon}
                    jsIcon={elt.jsIcon}
                    gitUrl={elt.gitUrl}
                    type={elt.type}
                    />
                ))}
                  {this.state.data3.map((elt)=>(
                    <ExpressItem 
                    key={elt.i}
                    img={elt.img}
                    url={elt.url}
                    ProjectName={elt.ProjectName}
                    title={elt.title}
                    nodeIcon={elt.nodeIcon}
                    expressIcon={elt.expressIcon}
                    apiIcon={elt.apiIcon}
                    gitUrl={elt.gitUrl}
                    type={elt.type}/>
                ))}
                {this.state.data2.map((elt)=>(
                    <MongoDbItem 
                    key={elt.i}
                    img={elt.img}
                    url={elt.url}
                    ProjectName={elt.ProjectName}
                    title={elt.title}
                    nodeIcon={elt.nodeIcon}
                    mongoIcon={elt.mongoIcon}
                    expressIcon={elt.expressIcon}
                    apiIcon={elt.apiIcon}
                    gitUrl={elt.gitUrl}
                    type={elt.type}
                    />
                ))}
               {this.state.data5.map((elt)=>(
                    <ReactItem 
                    key={elt.i}
                    img={elt.img}
                    url={elt.url}
                    ProjectName={elt.ProjectName}
                    title={elt.title}
                    ReactIcon={elt.ReactIcon}
                    gitUrl={elt.gitUrl}
                    type={elt.type}
                    />
                ))}
            </div>
         );
    }
}
 
export default Project;