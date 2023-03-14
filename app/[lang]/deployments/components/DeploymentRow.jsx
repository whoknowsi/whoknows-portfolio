'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaDotCircle, FaGithub, FaLink } from 'react-icons/fa'
import { fetchDeployment } from '../services/deployments-service'

const statusTypes = {
  OK: 'rowOk',
  UNKNOW: 'rowUnknow',
  DOWN: 'rowDown',
  LOADING: 'rowLoading'
}

const useStatus = ({ deployment }) => {
  const [status, setStatus] = useState(statusTypes.LOADING)

  useEffect(() => {
    ;(async () => {
      const { status } = await fetchDeployment({ deployment })
      setStatus(statusTypes[status])
    })()
  }, [deployment])

  return status
}

const DeploymentRow = ({ deployment }) => {
  const status = useStatus({ deployment })

  const { name, description, repoUrl, url } = deployment
  const statusClass = 'deploymentsRow' + ' ' + status

  return (
    <div className={statusClass}>
      <p>{name}</p>
      <p className="deploymentsDescription">{description}</p>
      <Link
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} repository`}
      >
        <FaGithub />
      </Link>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} website`}
      >
        <FaLink />
      </Link>
      <p>
        <FaDotCircle />
      </p>
    </div>
  )
}

export default DeploymentRow
