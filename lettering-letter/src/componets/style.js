import styled from 'styled-components';

export const StyledPrincipalDivContainer = styled.div `
    
`

export const StyledInputAndFontsizeContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const StyledInput = styled.input`
    width: 70%;
    height: 3rem;
    font-size: 25px;
    margin-top: 2rem;
    padding: 10px;
`

export const StyledFontsize = styled.input `
    align-item: center;
    width: 5%;
    height: 3rem;
    font-size: 18px;
    margin-top: 2rem;
    padding: 10px;
`

export const StyledTextIntrodution = styled.p `
    font-family: arial;
    font-size: 30px;
    width: 80%;
    margin: auto;
    padding: 3rem;
    line-height: 2.3rem;
`

export const StyledButton = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    transition: 0.3s;
    font-size: 30px;
    font-family: ${(props) => props.fontFamily};

    &:hover {
     background-color: rgba(128, 128, 128, 0.274);
    }

    /*Estilo para quando um botão estiver ativado*/
    background-color: ${(props) => (props.isActive ? 'black' : 'transparent')};
    color: ${(props) => (props.isActive ? 'white' : 'black')};

`

export const UlLetterContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    margin: auto;
`

export const StyledText = styled.p`
    font-size: ${props => `${props.fontSize}px`};
    line-height: 1.5;
    font-family: ${(props) => props.fontFamily};
    width: 70%;
    margin: auto;
    margin-top: 5rem;
    height: 50vh;
    padding: 10px;
    margin-bottom: 3rem;
`

export const StyledList = styled.li`
    list-style: none;
    margin: 10px;
`

export const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const SocialLinks = styled.div`
  margin-top: 10px;
`;

export const SocialLink = styled.a`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
