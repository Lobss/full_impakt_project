import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const ClientList = ({clients, deleteClient}) => {


    return (
        <List>
            Liste clients
            {clients.map((client, index) => (
                <ListItem key={index.toString()} dense button>
                    <Checkbox tabIndex={-1} disableRipple />
                    <ListItemText primary={`${client.id}: ${client.name}`} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={()=>{deleteClient(client.id)}}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
};


export default ClientList;
