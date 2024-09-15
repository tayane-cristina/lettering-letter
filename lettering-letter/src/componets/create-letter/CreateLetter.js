import React from 'react';
import { StyledButton, StyledInput, StyledList, StyledText, UlLetterContainer } from '../style';

const CreateLetter = () => {

    const letterOptions = ["letter 1", "letter 2", "letter 3", "letter 4", "letter 5", "letter 6"]

return(
<div>
    <UlLetterContainer>
        {letterOptions.map((letter, index) => (
            <StyledList key={index}>
                <StyledButton>{letter}</StyledButton>
            </StyledList>
        ))}
    </UlLetterContainer>
    
    <StyledInput placeholder='Digite seu texto aqui' type='text'/>

    <StyledText>Vazio</StyledText>
</div>

)
}
export default CreateLetter;

/*fontes

Dramaturgo Cuba
Roteiro de dança - dancing script
Pacifico
Lobster
Ribeye Marrow
caveatamatic sc
great vibesyanone kaffeesatz
lobster two

inspiração jessica Hische
*/