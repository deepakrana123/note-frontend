import React from 'react'
import { Helmet} from 'react-helmet-async';
const Title = (title) => {
  return (
    <Helmet>
    <title>{title}</title>
    <link rel="canonical" href="https://www.tacobell.com/" />
  </Helmet>
  )
}

export default Title