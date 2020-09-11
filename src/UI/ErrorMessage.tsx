import React from 'react';

import {ErrorText} from '../Styled';

interface Props {
  caption: string;
}

const ErrorMessage = ({caption}: Props) => <ErrorText>{caption}</ErrorText>;

export default ErrorMessage;
