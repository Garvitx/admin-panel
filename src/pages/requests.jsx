import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Icon } from '@iconify/react';
import helpOutlineIcon from '@iconify/icons-mdi/help-circle-outline';
import personAddIcon from '@iconify/icons-mdi/account-plus-outline';

const registerRequests = [
  { id: 1, name: 'Amit Sharma', email: 'amit@example.com', date: '2024-06-01' },
  { id: 2, name: 'Neha Verma', email: 'neha@example.com', date: '2024-06-02' },
  // Add more requests as needed
];

const helpRequests = [
  { id: 1, name: 'Ravi Kumar', description: 'Needs financial assistance', date: '2024-06-01' },
  { id: 2, name: 'Priya Singh', description: 'Looking for medical help', date: '2024-06-02' },
  // Add more requests as needed
];

export default function RequestsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Requests
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Requests to Register on App
              </Typography>
              <List>
                {registerRequests.map((request) => (
                  <ListItem key={request.id}>
                    <ListItemIcon>
                      <Icon icon={personAddIcon} width={24} height={24} />
                    </ListItemIcon>
                    <ListItemText
                      primary={request.name}
                      secondary={`${request.email} - ${request.date}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Requests for Help
              </Typography>
              <List>
                {helpRequests.map((request) => (
                  <ListItem key={request.id}>
                    <ListItemIcon>
                      <Icon icon={helpOutlineIcon} width={24} height={24} />
                    </ListItemIcon>
                    <ListItemText
                      primary={request.name}
                      secondary={`${request.description} - ${request.date}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
