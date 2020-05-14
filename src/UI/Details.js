import React from 'react'

import { DetailsView, HeaderText, DetailsText } from '../Styled'

const Details = ({ headerCaption, mainInfo }) => (
  <DetailsView>
    <HeaderText>{headerCaption}</HeaderText>
    {mainInfo && Object.entries(mainInfo).map(([key, value]) => (
      <DetailsText key={key}>{`${key}: ${value}`}</DetailsText>
    )
    )}
  </DetailsView>
)

export default Details