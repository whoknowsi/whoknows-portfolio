import Deployment from './Deployment'

const Main = ({ deployments }) => {
  return (
    <div>
      {deployments.map((deployment) => (
        <Deployment key={deployment._id} deployment={deployment} />
      ))}
    </div>
  )
}

export default Main
