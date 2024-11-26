import React from 'react';
import { Button, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;
  const aiApiUrl = process.env.REACT_APP_AI_API_URL;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h6" gutterBottom>
        <strong>API URL:</strong> {apiUrl}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <strong>S3 Bucket URL:</strong> {s3BucketUrl}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <strong>AI API URL:</strong> {aiApiUrl}
      </Typography>

      <Button variant="contained" color="primary" startIcon={<Home />}>
        Go Home
      </Button>
    </div>
  );
}

export default App;
