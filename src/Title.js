import React from 'react';
import './style.css';

export const Title = (props) => (
	<div style={{marginBottom:14}}>
		<title>Hyjaz Loudin</title>
		<div className="titles">{props.title.Name}</div>
		<div className="title-subtitle"> {props.title.Year} | 
			<a href="https://users.encs.concordia.ca/~a_loudin/resume.pdf">
				{props.title.resume}
			</a>
		</div>
		<i className="fa fa-mobile" aria-hidden="true"><a href="tel:514-885-3207">(514) 885-3207</a></i>
		<i className="fa fa-envelope" aria-hidden="true"><a href="mailto:hyjaz.loudin@gmail.com">hyjaz.loudin@gmail.com</a></i>
		<i className="fa fa-github" aria-hidden="true"><a href="https://github.com/Hyjaz">github.com/Hyjaz</a></i>
		<i className="fa fa-gitlab" aria-hidden="true"><a href="https://gitlab.com/PuzzlePuzzling">gitlab.com/PuzzlePuzzling</a></i>
		<i className="fa fa-linkedin" aria-hidden="true"><a href="https://ca.linkedin.com/in/HyjazLoudin">HyjazLoudin</a></i>
	</div>
	)

