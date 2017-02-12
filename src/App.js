import React, { Component } from 'react';
import {Projects} from './Projects.js'
import {Title} from './Title.js'
import {Work} from './Work.js'
import {OperatingSystems, Frameworks, Databases, Tools} from './SideMenu.js';

class App extends Component {
  render() {
    return (
    	<div className="App">
      	<div >
       		<Title title={this.props.data}/>
       		<Work work={this.props.data.experience}/>
       		<Projects projects={this.props.data.projects} />
		</div>
		<div>
       		<OperatingSystems />
	   		<Frameworks />
	   		<Databases />
	   		<Tools />
	   	</div>
      </div>
    );
  }
}

export default App;
