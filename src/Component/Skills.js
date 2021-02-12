import React, {Component} from 'react';
import SkillsItem from './SkillsItem';
import data4 from './SkillsItemData';
class Skills extends Component {
    state = { 
        data4: data4
     }
    render() { 
        return ( 
            <div>
                {this.state.data4.map((elt)=>(
                <SkillsItem 
                key={elt.i}
                name={elt.name}
                htmlIcon={elt.htmlIcon}
                cssIcon={elt.cssIcon}
                jsIcon={elt.jsIcon}
                bootstrapIcon={elt.bootstrapIcon}
                sassIcon={elt.sassIcon}
                reactIcon={elt.reactIcon}
                nextIcon={elt.nextIcon}
                wordIcon={elt.wordIcon}
                uxIcon={elt.uxIcon}
                figmaIcon={elt.figmaIcon}
                name1={elt.name1}
                nodeIcon={elt.nodeIcon}
                mongoIcon={elt.mongoIcon}
                apiIcon={elt.apiIcon}
                expressIcon={elt.expressIcon}
                />
                ))}
                
            </div>
         );
    }
}
 
export default Skills;