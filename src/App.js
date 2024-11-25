import React from 'react';
import { Button } from '@mui/material';
import { Home } from '@mui/icons-material';

function App() {
  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<Home />}>
        Go Home
      </Button>
    </div>
  );
}

export default App;