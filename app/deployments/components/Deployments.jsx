'use client'

import { FaGithub, FaLink, FaDotCircle } from 'react-icons/fa'
import Link from 'next/link'
import { Container, DeploymentsContainer, HeaderDescription, HeaderTable, RowDescrition, RowTable } from './styles/Deployments.styledComponents'

export default function DeploymentsElement ({ deployments }) {
  return (
    <Container>
      <h2>Deployments</h2>
      <DeploymentsContainer >
        <HeaderTable>
          <h3>Name</h3>
          <HeaderDescription>Description</HeaderDescription>
          <h3>Repo</h3>
          <h3>Url</h3>
          <h3>Status</h3>
        </HeaderTable>
        {deployments.map(({ _id, name, description, repoUrl, url, status }) => {
          console.log(status)
          const currStatus = {
            ok: status === 'OK',
            unknow: status === 'UNKNOW',
            down: status === 'DOWN'
          }

          console.log(currStatus)
          return (
            <RowTable status={currStatus} key={_id}>
              <p>{name}</p>
              <RowDescrition>{description}</RowDescrition>
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} repository`}>
                <FaGithub />
              </Link>
              <Link href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} website`}>
                <FaLink />
              </Link>
              <p>
                <FaDotCircle />
              </p>
            </RowTable>
          )
        })}
      </DeploymentsContainer>
    </Container>
  )
}
