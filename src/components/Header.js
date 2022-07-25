import React from "react";
import { ReactDOM } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { Stack } from "@mui/material";


function Header(props){

    //convert name to color

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

      //get the initials to generate the avatar
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }


return ( <div className="heading"> <header> <h3 className="player1"> <Avatar {...stringAvatar('Petros Stergiou')} /> Score: 0 </h3> Player {props.player} turn <h3 className="player2"> <Avatar {...stringAvatar('Alexandros Dardas')} /> Score: 0 </h3> </header> </div>)





}

export default Header;