import React from 'react';
import { Stack, Button } from '@mui/material';

const ButtonDelete = () => {
    return (
        <div className="button-container">
          <Button className="button-delete" variant="outlined" color="error">Delete</Button>
        </div>
  );
};

export default ButtonDelete;
