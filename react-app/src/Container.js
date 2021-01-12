import React from 'react';
import './Container.css';
import './Sidebar.css';
import Sidebar from './Sidebar'
import Canvas from './Canvas'
import { Twirl as Hamburger } from 'hamburger-react';
import axios from 'axios';


console.log(window.location)
const params =  new URLSearchParams(window.location.search);
const clientId =  params.get('clientId');

export default function Container() {
    console.log(clientId);
    const [client, setClient] = React.useState({});
    const [isOpen, setIsOpen] = React.useState(false);
    const [canvas, setCanvas] = React.useState({type:"iframe", ressource:client.accueil})

    const fetchClient = () => {
        axios.get('http://best-videos360.com/api/client/lire_un.php', {params:{clientId: clientId}})

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
                vv3Label={client.vv3_label} 
                vg={client.vg} 
                vgLabel={client.vg_label}
                v360={client.v360}
                v360Label={client.v360_label} 
            />
        </div>
    )
}





