import React from 'react'
import Icon1 from '../../images/webstuff.svg'
import Icon2 from '../../images/react.svg'
import Icon3 from '../../images/programmer.svg'
import {SkillsContainer, SkillsH1, SkillsWrapper, SkillsCard, SkillsIcon, SkillsH2, SkillsP} from './SkillsElements';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
        <SkillsH1>My Skills</SkillsH1>
        <SkillsWrapper>
            <SkillsCard>
                <SkillsIcon src={Icon1}/>
                <SkillsH2>Languages I Speak</SkillsH2>
                <SkillsP>HTML, CSS, JavaScript, Java, Python, SQL, PHP, Git</SkillsP>
            </SkillsCard>
            <SkillsCard>
                <SkillsIcon src={Icon2}/>
                <SkillsH2>My Favorite Dev & Design Tools</SkillsH2>
                <SkillsP>React.js, Bootstrap, Github, Figma, Font Awesome, Google Fonts</SkillsP>
            </SkillsCard>
            <SkillsCard>
                <SkillsIcon src={Icon3}/>
                <SkillsH2>Other Software I Use</SkillsH2>
                <SkillsP>Microsoft Access, Microsoft Excel</SkillsP>
            </SkillsCard>
        </SkillsWrapper>
    </SkillsContainer>
  )
}

export default Skills