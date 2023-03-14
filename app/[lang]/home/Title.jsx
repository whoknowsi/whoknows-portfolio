const Title = ({ name, lastName, nickname, dictionary }) => {
  return (
    <div className='homeTitleContainer'>
      <h1>{dictionary.firstTitle}</h1>
      <div className='homeTitleIntroductionContainer'>
        <p>{dictionary.firstPartDescription} <span><strong>{name} {lastName}</strong> ({nickname})</span>, {dictionary.secondPartDescription}
        </p>
      </div>
    </div>
  )
}

export default Title
