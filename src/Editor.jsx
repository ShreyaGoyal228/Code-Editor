import React from 'react';
import {useState} from 'react';
import {Box,styled} from '@mui/material';

import {Controlled as ControlledEditor} from 'react-codemirror2';
 import 'codemirror/lib/codemirror.css';
 import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
const Container=styled(Box)
`flex-grow: 1;
flex-basis: 0px;
display:flex;
flex-direction:column;
padding:0 8px 8px;
`;
const Heading=styled(Box)
`background: #1d1e22;
display:flex;
padding:9px 12px;
`;
const Header=styled(Box)
`color: #AAAEBC;
display:flex;
background:#060606;
justify-content:space-between;
align-items:center;
`
const Editor=(props)=>{

    const[open,setOpen]=useState(true);
    const handleChange =(editor,data,value)=>{
          props.onChange(value);
    }
    return(
        <Container style={open ? {flexGrow:1} : {flexGrow:0}}>
            <Header>
           <Heading>
            <Box component="span" style={{background:`${props.color}`,
            color:'#000',
        height:20,
        width:20,
        display:'flex',
        fontWeight:'bold',
        placeContent:'center',
        borderRadius:5,
        paddingTop:1,
        paddingBottom:1,
        marginRight:5}}>
                {props.symbol}
            </Box>
            {props.heading}
           </Heading>
           <CloseFullscreenIcon 
            fontSize='small'
            onClick={()=>{
             setOpen(prevState => !prevState);
           }} 
            />
            </Header>
            <ControlledEditor className='controlled-editor'
            value={props.value}
            onBeforeChange={handleChange}
            options={{
                theme: 'material',
                lineNumbers: true
              }}/>
        </Container>
    )
}
export default Editor;