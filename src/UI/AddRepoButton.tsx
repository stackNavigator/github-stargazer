import React from 'react';

import {ConfirmButton, InfoText} from '../Styled';

interface Props {
  onPress: () => void;
}

const AddRepoButton = ({onPress}: Props) => (
  <ConfirmButton onPress={onPress}>
    <InfoText color="#fff">Add</InfoText>
  </ConfirmButton>
);

export default AddRepoButton;
