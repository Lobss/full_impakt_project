import React, { useState } from "react";
import "./Sidebar.css";

const menuWidth = 250;

export default function Sidebar({
  isOpen,
  setUrl,
  setIdVideo,
  logo,
  accueil,
  accueilLabel,
  vv3,
  vv3Label,
  vg,
  vgLabel,
  v360,
  v360Label

}) {

  return (
    <div className="side-nav" style={{ position: 'relative' }}>

      <div style={{ display: 'flex' }}>

        <nav className="side-bar" style={{ width: isOpen ? menuWidth : 0 }}>

          <img
            id='logo'
            src={logo}
            style={{ width: 150, height: 100, marginTop: 20, marginLeft: 50, position: "relative", display: "flex", alignItems: "center", justifyItems: "center" }}
          />

          <ul id="menu-vertical" style={{ width: menuWidth }}>

            <li className="border__shadow">
              <a href="#">
                {/* <span className="icon-holder">
                  <i className="icon"></i>
                </span> */}
                <span onClick={() => setUrl(accueil)} className="text-menu" >
                  {accueilLabel}
                </span>
              </a>
            </li>

            {
              vv3 &&
              <li className="border__shadow">
                <a href="#">
                  {/* <span className="icon-holder">
                      <i className="icon"></i>
                    </span> */}
                  <span onClick={() => setUrl(vv3)} className="text-menu">
                    {vv3Label}
                  </span>
                </a>

                {/* <ul>
                    <li>
                      <a className="sub-menu">
                        <span onClick={() => setUrl(vv3)}>
                          Exemple 1
                          </span>
                      </a>
                    </li>
                    <li><a className="sub-menu"> Exemple 2 </a></li>
                    <li><a className="sub-menu"> Exemple 3 </a></li>
                  </ul> */}
              </li>
            }

            {
              vg &&
              <li className="border__shadow">
                <a href="#">
                  {/* <span className="icon-holder">
                      <i className="icon"></i>
                    </span> */}
                  <span onClick={() => setUrl(vg)} className="text-menu">
                    {vgLabel}
                  </span>
                </a>

                {/* <ul>
                    <li>
                      <a className="sub-menu">
                        <span onClick={() => setUrl("https://www.google.com/maps/embed?pb=!4v1606412256100!6m8!1m7!1sCAoSLEFGMVFpcE1VdTQyVlgyTTkxOTZscnBmSmRmcHQyVHZlY1oybW9fY2RTM3Fm!2m2!1d43.57922427528444!2d3.949080672525156!3f191.53!4f-5.989999999999995!5f0.7820865974627469")}>
                          Exemple 1
                        </span>
                      </a>
                    </li>
                    <li><a className="sub-menu"> Exemple 2 </a></li>
                    <li><a className="sub-menu"> Exemple 3 </a></li>
                  </ul> */}
              </li>
            }

            {
              v360 &&
              <li className="border__shadow">
                <a href="#">
                  {/* <span className="icon-holder">
                      <i className="icon"></i>
                    </span> */}
                  <span onClick={() => setIdVideo(v360)} className="text-menu">
                    {v360Label}
                  </span>
                </a>

                {/* <ul>
                    <li>
                      <a className="sub-menu">
                        <span onClick={() => setIdVideo("qbvUgxWLnkY")}>
                          Exemple 1
                        </span>
                      </a>
                    </li>
                    <li><a className="sub-menu"> Exemple 2 </a></li>
                    <li><a className="sub-menu"> Exemple 3 </a></li>
                  </ul> */}

              </li>
            }

            {/* <li className="border__shadow">
              <a href="#">
                
                <span onClick={() => setUrl("https://impakt.shapespark.com/sogea_t2/")} className="text-menu">
                  Photos
                 </span>
              </a>
            </li> */}
            <footer>
              © Impakt 360
            </footer>
          </ul>

        </nav>
      </div>

    </div>
  );
}


