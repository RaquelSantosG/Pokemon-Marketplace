import React from 'react';
import * as S from './styled';
import logo from "../../assets/p.jpg";

function Profile() {
    return (<S.Container>
        <S.Content>
            <S.ProfilePic>
                <S.ImageProfile src={logo} alt="foto perfil" />

            </S.ProfilePic>

            <S.ProfileForm>

                <S.ProfileTitle>Meu Perfil</S.ProfileTitle>
                <S.ProfileRow1>
                    <S.ProfileQ>
                        <S.ProfileLabel>
                            Nome Completo                           
                        </S.ProfileLabel>
                         <S.ProfileText onChange={()=>""} value="Ash Ketchum" />
                        
                    </S.ProfileQ>

                    <S.ProfileQ>
                        <S.ProfileLabelTwo>
                            Sexo
                        </S.ProfileLabelTwo>
                        <S.ProfileSelect onChange={()=>""}>
                            
                            <option>Homem</option>
                            <option>Mulher</option>
                            <option>Outro</option>
                        </S.ProfileSelect >
                    </S.ProfileQ>

                </S.ProfileRow1>

                <S.ProfileRow2>
                    <S.ProfileQ>
                        <S.ProfileLabel>
                            Origem
                        </S.ProfileLabel>
                        <S.ProfileSelect2 onChange={()=>""}>
                            
                            <option>Brasil</option>
                            <option>Estados Unidos</option>
                            <option>Africa do sul</option>
                            <option>Russia</option>
                            <option>China</option>
                            <option>Japão</option>


                        </S.ProfileSelect2>

                    </S.ProfileQ>

                    <S.ProfileQ>
                        <S.ProfileLabel>
                            Mestre Pokemon
                        </S.ProfileLabel>
                        <S.ProfileText value="Mestre Pokemon" onChange={()=>""}/>
                    </S.ProfileQ>
                </S.ProfileRow2>


                <S.ProfileRow3>
                  <S.ProfileQ>
                      <S.ProfileButton>Salvar</S.ProfileButton>
                  </S.ProfileQ>

                  <S.ProfileQ>
                      <S.ProfileButton2>Cancelar</S.ProfileButton2>
                  </S.ProfileQ>

                </S.ProfileRow3>

            </S.ProfileForm>
        </S.Content>
    </S.Container>);
}

export default Profile;
