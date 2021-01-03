import React from 'react';
import './App.css';



export default class Nav extends React.Component {

    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }




    render() {

        const style1 = {
            fontSize: '20',
            cursor: 'pointer'
        }

        return (
            <div>
                <span style={style1} className="closebtn" onClick={this.openNav}>&#9776;</span>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" style={style1} className="closebtn" onClick={this.closeNav}> &#9776;</a>
                    <a href="#">Vue générale</a>
                    <a href="#">Visites Virtuelles</a>
                    <a href="#">Vue aérienne</a>
                    <a href="#">Vidéos</a>
                    <a href="#">Photos</a>
                </div>
            </div>
        )
    }
}