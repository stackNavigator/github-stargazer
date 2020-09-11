import React from 'react';

import {CenteredView, InfoText} from '../Styled';

interface Props {
  placeholderText: string;
}

const PlaceholderView = ({placeholderText}: Props) => (
  <CenteredView>
    <InfoText>{placeholderText}</InfoText>
  </CenteredView>
);

export default PlaceholderView;
