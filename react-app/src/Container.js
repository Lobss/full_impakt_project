import React from 'react';
import './Container.css';
import './Sidebar.css';
import Sidebar from './Sidebar'
import Canvas from './Canvas'
import { Twirl as Hamburger } from 'hamburger-react';
import axios from 'axios';

const fakeClient = {
    id:1,
    name: "ok",
    logo:'joli',
    accueil:'https://s3.eu-west-1.amazonaws.com/media.habiteo.com/models/z/zwP5R4LUk6lCQM0ZZGepu/general/0001.jpg',
    vv3: 'https://my.matterport.com/show/?m=hcUyyRZdc3R',
    vg:'https://www.google.com/maps/embed?pb=!4v1606412256100!6m8!1m7!1sCAoSLEFGMVFpcE1VdTQyVlgyTTkxOTZscnBmSmRmcHQyVHZlY1oybW9fY2RTM3Fm!2m2!1d43.57922427528444!2d3.949080672525156!3f191.53!4f-5.989999999999995!5f0.7820865974627469',
    v360:'qbvUgxWLnkY'
}

console.log(window.location)
const params =  new URLSearchParams(window.location.search);
const clientId =  params.get('clientId');

export default function Container() {
    console.log(clientId);
    const [client, setClient] = React.useState({});
    const [isOpen, setIsOpen] = React.useState(false);
    const [canvas, setCanvas] = React.useState({type:"iframe", ressource:client.accueil})

    const fetchClient = () => {
        axios.get('http://localhost:8888/impakt/admin/api/client/lire_un.php', {params:{clientId: clientId}})

            .then(response => {
                console.log(response);
                setClient(response.data)
            })
    }

    React.useEffect(
        () => { fetchClient() },
        []
    )

    const setIdVideo = (idVideo) => {
        setCanvas({type:"youtube", ressource:idVideo})
    }

    const setUrl = (url) => {
        setCanvas({type:"iframe", ressource:url})
    }

    return (
        <div id="container">
            <Canvas canvas={canvas} />

            <div className="hamburger-menu" style={{ right: isOpen ? 200 : 130, border: isOpen ? "none" : "solid 1px", zIndex: 1 }} >
                <Hamburger className="btn" toggled={isOpen} toggle={() => setIsOpen(!isOpen)}  size={20} duration={0.8} />
            </div>

            <Sidebar 
                isOpen={isOpen} 
                setUrl={setUrl} 
                setIdVideo={setIdVideo} 
                logo={client.logo} 
                accueil={client.accueil} 
                accueilLabel={client.accueil_label}  
                vv3={client.vv3}
                vv3Label={client.vv3Label} 
                vg={client.vg} 
                vgLabel={client.vgLabel}
                v360={client.v360}
                v360Label={client.vgLabel} 
            />
        </div>
    )
}





