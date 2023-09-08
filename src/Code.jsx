import React,{useContext} from 'react';
import {Box,styled} from '@mui/material';
import Editor from './Editor';
import {DataContext} from './DataProvider';

const Container=styled(Box)`
display:flex;
background:#060606;
height:54vh;
`;
const Code=()=>{
  const v =useContext(DataContext);
  return(
      <Container>
     <Editor heading="HTML" symbol="/" color="#FF3C41" value={v.html} onChange={v.setHtml}/>
     <Editor heading="CSS" symbol="*" color="rgb(0 190 255)" value={v.css} onChange={v.setCss}/>
     <Editor heading="JS" symbol="()" color="#FCD000" value={v.js} onChange={v.setJs}/>
     </Container>
  )
}
export default Code;