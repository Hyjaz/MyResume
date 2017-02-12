import React from 'react';
import './style.css';

export const Work = (props) => (
 <div className="container">
        <p className="subtitle">WORK EXPERIENCE</p>
        <hr className="subtitles"/>

        <ul className="left-box"> 
    	{props.work.map((info,i) =>
            <li key={i} className="top">
                <div className="year">
                        <span className="sub-sub-title"> {info.Location}</span>
                        <h4 className="date">{info.Date}</h4>
                </div>
                <div className="box-content" >
                    <h4 className="sameHeightTitle">{info.Company}</h4>
                    <p className="sub-sameHeightTitle">{info.Title}</p>
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
