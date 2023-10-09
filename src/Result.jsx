import React,{useContext,useState,useEffect} from 'react';
import { DataContext } from './DataProvider';
import {Box,styled} from '@mui/material';
const Container=styled(Box)`
height:37vh;
`
const Result= () =>{
    const[src ,setSrc]=useState(' ');
    const v=useContext(DataContext);
    const srcCode=`
    <html>
    <body>${v.html}
    <style>${v.css}</style>
    <script>${v.js}</script>
    </body>
    </html>
    `;
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setSrc(srcCode);
        },1000);
      return ()=> clearTimeout(timeout);
      //eslint-disable-next-line
    },[v.html,v.css,v.js]);
    return(
         <Container>
            <iframe srcDoc={src} sandbox='allow-scripts' title='Output' height='100%' width='100%'>
            </iframe>
         </Container>
    )
}

export default Result;