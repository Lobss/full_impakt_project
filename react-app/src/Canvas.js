import React, { useState } from 'react';
import Iframe from 'react-iframe';
import YouTube from 'react-youtube';

export default function Canvas({canvas}) {

    return (
        <div style={{ padding: 0, flex: '1 1 auto', background: 'transparent', color: 'white' }}>

            {canvas.type === "iframe" ? 

                <Iframe url={canvas.ressource}
                    width="100%"
                    height="700px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                /> 
                
                :
                
                <YouTube videoId={canvas.ressource}
                    opts={
                        {
                            width:"100%",
                            height:"700px"
                        }
                    }
                />
            }

        </div>
    )

}

