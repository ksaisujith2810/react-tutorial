import React from 'react';

import { data } from './data';

function Dummy(props) {
    return(
        <>
            {
                data.map((obj,index) => {
                    // console.log(obj);

                    // Object Destructuring - ES6
                    const{altText,imgUrl,headerThree} = obj;

                    return(
                        <>
                            <img
                            src={imgUrl}
                            alt={altText}
                            style={{width:'200px'}}
                            /> 

                            <h3>
                                {headerThree}
                            </h3>

                            <hr/>
                        </>
                    )
                })
            }

        </>
    )
}

export default Dummy;