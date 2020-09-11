import React from 'react';

import {CenteredView, InfoText} from '../Styled';

const PlaceholderView = ({placeholderText}) => (
  <CenteredView>
    <InfoText>{placeholderText}</InfoText>
  </CenteredView>
);

export default PlaceholderView;
