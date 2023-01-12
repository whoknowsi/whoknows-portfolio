const Deployment = ({ deployment }) => {
  return (
    <div>{deployment.name} {deployment.status}</div>
  )
}

export default Deployment
