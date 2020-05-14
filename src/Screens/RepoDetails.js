import React from 'react'

import Details from '../UI/Details'
import { DetailsContainer } from '../Styled'

const data = {
  watchers: '10432',
  stars: '123455',
  forks: '23432',
  languages: {
    Javascript: '5232134',
    HTML: '114863',
    CSS: '59409'
  }
}

const RepoDetails = () => {
  const { languages, ...stats } = data
  const localizedStats = Object.entries(stats).reduce((acc, [key, value]) => ({ 
    ...acc,
    [key]: parseInt(value).toLocaleString()
  }), {})
  const totalBytes = Object.values(languages).reduce((acc, value) => acc + +value, 0)
  const percentedLanguages = Object.entries(languages).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: `${(value / totalBytes * 100).toFixed(1).replace('.', ',')}%`
  }), {})
  return (
    <DetailsContainer>
      <Details headerCaption="Stats" mainInfo={localizedStats} />
      <Details headerCaption="Languages" mainInfo={percentedLanguages} />
    </DetailsContainer>
  )
}

export default RepoDetails