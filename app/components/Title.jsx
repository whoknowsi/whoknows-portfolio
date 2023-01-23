'use client'

import { Container, Span, Strong, IntroductionContainer } from './styles/Title.styledComponents'

const Title = ({ name, lastName, nickname }) => {
  return (
    <Container>
      <h1>Meet the Maker: The Face Behind the Work</h1>
      <IntroductionContainer>
        <p>Hi, I&apos;m <Span><Strong>{name} {lastName}</Strong> ({nickname})</Span>, a web developer and computer science student.
          I specialize in building web applications and websites that solve problems and improve people&apos;s
          lives. I&apos;m constantly learning and exploring new technologies and work approaches to improve my
          skills and offer high-quality solutions to my clients.
        </p>
      </IntroductionContainer>
    </Container>
  )
}

export default Title
