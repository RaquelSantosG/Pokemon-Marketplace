import React from 'react';
import * as S from './styled';
import loadImg from '../../assets/5FBP.gif'
import Load from '../../assets/Load.gif'


function Loading(){
    return(
      <S.Container>
         <S.Content>
             <S.Text>
                 <S.tittle src={Load}/>                                          
            </S.Text>
             <S.LoadImage src={loadImg}/>
         </S.Content>
      </S.Container>

    );}

export default Loading;