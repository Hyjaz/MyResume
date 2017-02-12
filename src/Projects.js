import React from 'react';
import './style.css';

export const Projects = (props) => (
 <div className="container">
        <p className="subtitle">PROJECTS</p>
        <hr className="subtitles"/>

        <ul className="left-box"> 
    	{props.projects.map((info,i) =>
            <li key={i} className="top">
                <div className="year">
                        <h4 className="date">{info.Date}</h4>
                </div>
                <div className="box-content" >
                    <h4 className="sameHeightTitle">{info.Title}</h4>
                    <p className="sub-sameHeightTitle"><a href={info.Url}>{info.Url}</a></p>
                    <ul className="left-box-content">
                    {info.Description.map((newDesc, o)=>
                        <li key={o}>
                        {newDesc}
                        </li>
                        )}

                    </ul>

                </div>
            </li>
    )}
    </ul>
    </div>
    );
