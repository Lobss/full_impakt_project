import React from 'react';
import axios from 'axios';

export default initialValue => {
  const [clients, setClients] = React.useState(initialValue);
  const [state, setState] = React.useState('loading');

  const fetchClients = () => {
    setState('loading')

    const data = axios.get('http://best-videos360.com/api/client/lire.php');

    data.then(function (response) {
      setClients(response.data.client)
      setState('loaded')
    })
  }

  React.useEffect(
    () => {
      if (state === 'loading') {
        fetchClients()
      }
    },
    [state]
  )


  const addClient = (client) => {
   
    axios({
      method: 'POST',
      url: 'http://best-videos360.com/api/client/creer.php',
      data: client
    })
    .then(response => {
      console.log(response);
      console.log(response.data);
      fetchClients()
      
    })
  }
  
  const deleteClient = (clientId) => {

    axios.delete(`http://best-videos360.com/api/client/supprimer.php`, {data: {id: clientId} })
      .then(() => {
        fetchClients()
      })

  }


  return {
    state,
    fetchClients,
    clients,
    addClient,
    deleteClient
  };
};
