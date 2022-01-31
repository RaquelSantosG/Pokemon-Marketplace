import styled from 'styled-components';

export const Container = styled.div `
 
 margin-top: 3rem;
 height: 25rem;
 background-color: #b5c9f9;
 border-radius: 10px;
 display:flex;
 justify-content: center; 
 align-items: center;
`;

export const Content = styled.div `

 height: 18rem;  //17
 background-color: #fff;
 width: 30rem; //30
 border-radius:15px;
 display: flex;
 padding:2rem;
 box-shadow: 0px 7px 9px 5px rgba(0,0,0,0.57);
 
 
 
`;

export const ProfilePic = styled.div `

display: flex;
flex-direction: column;
margin-top: 3rem;




`;

export const ProfileForm = styled.div `
margin-left: 3rem;



`;

export const ImageProfile = styled.img `
 height: 6rem;
 width: 6rem;
 clip-path: circle();

`;

export const ProfileTitle = styled.h4`
margin-bottom: 1.1rem;

`;


export const ProfileRow1 = styled.div`
display:flex;

`;

export const ProfileRow2= styled.div`
display:flex;
margin-top: 0.5rem;

`;

export const ProfileRow3= styled.div`
display:flex;
margin-top: 0.5rem;

`;

export const ProfileText = styled.input`
margin-top:0.4rem;
padding: 0.4rem 1rem;
border-radius:5px;
border: none;
outline: 1px solid #000;
background: #F0F0F0;
font-size: 11px;
outline: none;
width: 9rem; //5
height: 35px; //23
font-weight: 400;







`;

export const ProfileSelect = styled.select`
margin-left: 1rem;
margin-top:0.4rem;
width: 6rem; //5
height: 35px; //23
border-radius:5px;
border: none;
outline: 1px solid #000;
background: #F0F0F0;
cursor: pointer;
font-size: 10px;
color:#292929;
outline: none;
padding-left: 1.3rem;

`;

export const ProfileSelect2 = styled.select`

margin-top:0.4rem;
width: 6rem;
border-radius:5px;
border: none;
height: 35px;
outline: 1px solid #000;
background: #F0F0F0;
margin-right: 1rem;
cursor: pointer;
color:#292929;
font-size: 8px;
outline: none;
font-size: 10px;
padding-left: 0.7rem;
`;

export const ProfileLabel = styled.label `
margin-top:0.8rem;
font-size: 11px;
color: #717171;


 
`;

export const ProfileLabelTwo = styled.label`
margin-left: 1rem;
margin-top:0.8rem;
font-size: 11px;
color: #717171;


`;

export const ProfileQ = styled.div `
display: flex;
flex-direction: Column;
`;

export const ProfileButton = styled.button `

margin-top: 1rem;
margin-right: 1em;
background-color: #292929;
border-radius: 5px;
color:white;
border: 1px solid #717171;
box-sizing: border-box;
width: 5rem;
height: 30px;
font-size : 12px;
transition: all 0.5s;

 &:hover {
  opacity: 0.7;
     
 }
`;

export const ProfileButton2 = styled.button `

font-size : 12px;
margin-top: 1rem;
background-color: #FFFFFF;
border-radius: 5px;
width: 5rem;
height: 30px;
border: 1px solid #717171;
box-sizing: border-box;
color:white;
color: #717171;
transition: all 0.5s;

 &:hover {
  opacity: 0.7;
  background-color: #292929;
  color: #FFFFFF;
     
 }

`;