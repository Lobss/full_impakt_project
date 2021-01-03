import './App.css';
import React from 'react';
import ClientList from './ClientList';
import Form from './Form';
import CircularProgress from '@material-ui/core/CircularProgress';
import useClientState from './useClientState';


const App = () => {


  const { clients, addClient, deleteClient, state } = useClientState([]);


  return (
    <div className="App">

      <Form
        // addClient={addClient}
        saveClient={
          (client) => {
            addClient(client)
          }
        }
      />

      {
        state === 'loading' ? <CircularProgress /> :

          <ClientList
            clients={clients}
            deleteClient={deleteClient}
          />
      }

    </div>
  );
}

export default App;

