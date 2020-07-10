import React from 'react';
import './loader.css';

export default function Loader({loading}) {
    return(

            loading===true?
                <div className="spinner-container" >
                    <div className="spinner">
                        <div className="loader">&nbsp;</div>
                    </div>
                </div>
                :<div>&nbsp;</div>


    )
}
