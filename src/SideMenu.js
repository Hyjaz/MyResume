import React from 'react';
import './style.css';
const divStyle = {
	width:341,
	textAlign:'center',
	marginTop: 0,
	marginBottom: 0
}
const divL = {
	marginTop:-412
}
const divF = {
	marginTop:-218
}
export const OperatingSystems = () => (

	<div className="side-subtitle" style={divL}>
		<p  style={divStyle}>LANGUAGES</p>
		<hr className="side-subtitles"/>
		<div className="languages">
			<p className="side-menu">C++</p>
			<p className="side-menu">Java</p>
			<p className="side-menu">C#</p>
			<p className="side-menu">Python</p>
			<p className="side-menu">BASH</p>
		</div>
	</div>

	)
export const  Frameworks= () => (

	<div className="side-subtitle" style={divF}>
		<p  style={divStyle}>FRAMEWORKS</p>
		<hr className="side-subtitles"/>
		<div className="languages">
			<p className="side-menu">Reactjs</p>
			<p className="side-menu">Flask</p>
			<p className="side-menu">Nodejs</p>
			<p className="side-menu">Express</p>
			<p className="side-menu">Javascript</p>
			<p className="side-menu">JQuery</p>
		</div>
	</div>

	)
export const  Databases= () => (

	<div className="side-subtitle">
		<p  style={divStyle}>DATABASES</p>
		<hr className="side-subtitles"/>
		<div className="languages">
			<p className="side-menu">MongoDB</p>
			<p className="side-menu">PostgreSQL</p>
			<p className="side-menu">MySQL</p>
		</div>
	</div>

	)

export const  Tools= () => (

	<div className="side-subtitle">
		<p  style={divStyle}>TOOLS</p>
		<hr className="side-subtitles"/>
		<div className="languages">
		<p className="side-menu">Git</p>
			<p className="side-menu">Visual Studio</p>
			<p className="side-menu">Eclipse</p>
			<p className="side-menu">BlocksNote</p>
			<p className="side-menu">JetBrains</p>
			<p className="side-menu">Unix</p>
			<p className="side-menu">Webpack</p>
		</div>
	</div>

	)