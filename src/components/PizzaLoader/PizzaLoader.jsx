import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = (props) => (
  <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={487}
    viewBox="0 0 280 487"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="2" y="277" rx="0" ry="0" width="280" height="24" /> 
    <rect x="0" y="327" rx="0" ry="0" width="280" height="84" /> 
    <rect x="0" y="429" rx="0" ry="0" width="101" height="44" /> 
    <rect x="179" y="429" rx="0" ry="0" width="92" height="44" />
  </ContentLoader>
)

export default PizzaLoader