import React from 'react';

import {DetailsView, HeaderText, DetailsText} from '../Styled';

interface Props {
  headerCaption: string;
  mainInfo?: {};
}

const Details = ({headerCaption, mainInfo}: Props) => (
  <DetailsView>
    <HeaderText>{headerCaption}</HeaderText>
    {mainInfo &&
      Object.entries(mainInfo).map(([key, value]) => (
        <DetailsText key={key}>{`${key}: ${value}`}</DetailsText>
      ))}
  </DetailsView>
);

export default Details;
