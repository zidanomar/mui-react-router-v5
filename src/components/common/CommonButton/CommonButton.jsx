import React from 'react';
import { Button } from '@mui/material';

function CommonButton({ children, color, disabled, size, variant, sx }) {
  return <Button>{children}</Button>;
}

export default CommonButton;
