import {AppBar , Toolbar ,Box, styled} from '@mui/material';
 import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const Container = styled(AppBar)`
background: #060606;
width:100%;
height:9vh;
border-bottom: 1px solid #2f2f2f;
`;
const Tool=styled(Toolbar)`
display:flex;
align-items:center;
justify-content:space-between;
padding-left:10px;
padding-right:25px;
`;
const Title=styled(Box)`
  font-size:25px;
  padding-left:5px;
  display:inline-block;
  vertical-align:middle;
`;
const LeftSide=styled(Box)`
      font-weight: 700;
    display: 'inline-block';
    verticalAlign: 'middle';
`;
const RightSide=styled(Box)`
font-size:17px;
`;
const SignUp=styled(Box)`
padding:14px;
margin-right:10px;
background:#444857;
border-radius:5px;
`;
const LogIn=styled(Box)`
padding:14px;
color:'#000000';
background:#4FCF73;
border-radius:5px;
hover:{
  color:'#fff',
  background:'#002D0B'
}
`;
const Header =() =>{
    return (<>
        <Container position='static'>
        <Tool>
          <LeftSide component='span'>
           <ModeEditOutlineIcon style={{
             display:'inline-block',
             verticalAlign:'middle'
           }}/>
           <Title>CodePen</Title>
           </LeftSide>
           <RightSide component='span'>
                <SignUp component='span'>Sign Up</SignUp>
                <LogIn component='span'>Log In</LogIn>
           </RightSide>
        </Tool>
        </Container>
        </>
      )
}
export default Header;