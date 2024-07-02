const ConditionalRender = ({ show, children }) => {
  if (!show) {
    return null
  }

  return children
}

export default ConditionalRender
