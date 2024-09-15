import React from 'react';
import { FooterContainer, FooterText, SocialLink, SocialLinks, StyledButton, StyledFontsize, StyledInput, StyledInputAndFontsizeContainer, StyledList, StyledPrincipalDivContainer, StyledText, StyledTextIntrodution, UlLetterContainer } from '../style';
import { useState } from 'react';

const CreateLetter = () => {

    const [textWrited, setTextWrited] = useState('Digite um texto para começar.');
    const [activeItem, setActiveItem] = useState('arial');
    const [fontSize, setFontSize] = useState(18)

    const letterOptions = ["Playwrite CU", "Dancing Script", "Lobster", "Lobster Two", "Ribeye Marrow", "Caveat", "Great Vibes", "Twinkle Star"]

    const handleItemClick = (item) => {
        setActiveItem(item);
    }

return(
<StyledPrincipalDivContainer>
    <StyledTextIntrodution>
        Transforme Suas Palavras com Estilo!<br />
        Descubra o poder da tipografia e inspire-se com o nosso app de escrita!

        Digite o que quiser e veja seu texto ganhar vida com fontes elegantes e únicas!
        Escolha entre uma variedade de fontes sofisticadas para tornar suas palavras ainda mais especiais.
        Ideal para cadernos, diários e qualquer outro lugar onde suas palavras possam brilhar!

        Experimente agora e veja como uma boa fonte pode transformar sua escrita!
    </StyledTextIntrodution>
    <UlLetterContainer>
        {letterOptions.map((letter, index) => (
            <StyledList key={index}>
                <StyledButton
                key={letter}
                isActive={activeItem === letter}
                fontFamily={letter}
                onClick={() => handleItemClick(letter)}
                >{letter}</StyledButton>
            </StyledList>
        ))}
    </UlLetterContainer>
    
    <StyledInputAndFontsizeContainer>
        <StyledInput placeholder='Digite seu texto aqui' type='text' onChange={(e) => setTextWrited(e.target.value)}/>
        <StyledFontsize type='number' value={fontSize} onChange={(e) => setFontSize(e.target.value)}></StyledFontsize>
    </StyledInputAndFontsizeContainer>
   

    <StyledText fontFamily={activeItem} fontSize={fontSize}>{textWrited}</StyledText>

    <FooterContainer>
      <FooterText>© 2024 Tayane Cristina. Todos os direitos reservados.</FooterText>
      <SocialLinks>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
        <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</SocialLink>
      </SocialLinks>
    </FooterContainer>

</StyledPrincipalDivContainer>

)
}
export default CreateLetter;