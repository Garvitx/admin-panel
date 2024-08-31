import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  CircularProgress,
  Alert,
  useTheme
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { CheckCircle, Cancel, AccessTime, Help, Refresh } from '@mui/icons-material';

const API_BASE_URL = 'https://repository.jspl.com/RepositoryApp/api';

export default function RequestsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  const fetchData = async () => {
    setLoading(true);
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };

      const response = await fetch(`${API_BASE_URL}/getRegistrationStatus`, { headers });
      const json = await response.json();

      setData(json);
      setError(null);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <CircularProgress />
    </Box>
  );

  if (error) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Alert severity="error">{error}</Alert>
    </Box>
  );

  const StatusCard = ({ title, count, icon: Icon, color }) => (
    <Card raised>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Icon style={{ fontSize: 40, marginRight: theme.spacing(2), color }} />
          <Box>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="h4" component="div">
              {count}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Registration Requests
        </Typography>
        <LoadingButton
          onClick={fetchData}
          loading={loading}
          loadingPosition="start"
          startIcon={<Refresh />}
          variant="contained"
        >
          Refresh Data
        </LoadingButton>
      </Box>

      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatusCard title="Approved" count={data.Approved} icon={CheckCircle} color={theme.palette.success.main} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatusCard title="Rejected" count={data.Reject} icon={Cancel} color={theme.palette.error.main} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatusCard title="Pending" count={data.Pending} icon={AccessTime} color={theme.palette.warning.main} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatusCard title="Unprocessed" count={data.None} icon={Help} color={theme.palette.info.main} />
        </Grid>
      </Grid>

      <Card raised>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Registration Status Overview
          </Typography>
          <Typography variant="body1" paragraph>
            {data.message}
          </Typography>
          {data['status based on'] && (
            <Typography variant="body2" color="text.secondary">
              Status based on: {data['status based on']}
            </Typography>
          )}
        </CardContent>
      </Card>

      <Box mt={3}>
        <Alert severity="info" icon={<IconButton><Help /></IconButton>}>
          New registrations are processed within 24-48 hours. For urgent inquiries, please contact support.
        </Alert>
      </Box>
    </Box>
  );
}