import React, { useState } from 'react';
import { Container, Grid, Typography, MenuItem, Select, FormControl, InputLabel, Card, CardContent, CardActions, Button, Box, Avatar } from '@mui/material';
import { Person, Badge } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const specialPeopleData = [
  { title: 'MLA', name: 'Rajesh Kumar', constituency: 'Constituency1', contact: '123-456-7890', email: 'rajesh.kumar@example.com', social: '@rajeshkumar', icon: <Person />, area: 'District1' },
  { title: 'MP', name: 'Anita Sharma', constituency: 'Constituency2', contact: '234-567-8901', email: 'anita.sharma@example.com', social: '@anitasharma', icon: <Badge />, area: 'District2' },
  { title: 'MC', name: 'Vijay Singh', constituency: 'Constituency3', contact: '345-678-9012', email: 'vijay.singh@example.com', social: '@vijaysingh', icon: <Badge />, area: 'District1' },
  // Add more special people as needed
];

const areaData = [
  {
    name: 'District1',
    mandals: [
      {
        name: 'Mandal1',
        shaktiKendras: [
          {
            name: 'ShaktiKendra1',
            panns: [
              {
                name: 'Panna1',
                booths: ['Booth1', 'Booth2']
              },
              // More panns...
            ]
          },
          // More shakti kendras...
        ]
      },
      // More mandals...
    ]
  },
  // More districts...
];

export default function SpecialPeoplePage() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMandal, setSelectedMandal] = useState('');
  const [selectedShaktiKendra, setSelectedShaktiKendra] = useState('');
  const [selectedPanna, setSelectedPanna] = useState('');
  const [selectedBooth, setSelectedBooth] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedMandal('');
    setSelectedShaktiKendra('');
    setSelectedPanna('');
    setSelectedBooth('');
  };

  const handleMandalChange = (event) => {
    setSelectedMandal(event.target.value);
    setSelectedShaktiKendra('');
    setSelectedPanna('');
    setSelectedBooth('');
  };

  const handleShaktiKendraChange = (event) => {
    setSelectedShaktiKendra(event.target.value);
    setSelectedPanna('');
    setSelectedBooth('');
  };

  const handlePannaChange = (event) => {
    setSelectedPanna(event.target.value);
    setSelectedBooth('');
  };

  const handleBoothChange = (event) => {
    setSelectedBooth(event.target.value);
  };

  const getSelectedData = () => {
    let data = specialPeopleData;
    if (selectedDistrict) {
      data = data.filter(person => person.area === selectedDistrict);
    }
    return data;
  };

  const selectedData = getSelectedData();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Special People
      </Typography>

      <Box sx={{ p: 2, bgcolor: '#f4f4f4', borderRadius: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>District</InputLabel>
              <Select value={selectedDistrict} onChange={handleDistrictChange}>
                {areaData.map((district) => (
                  <MenuItem key={district.name} value={district.name}>
                    {district.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {selectedDistrict && (
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Mandal</InputLabel>
                <Select value={selectedMandal} onChange={handleMandalChange}>
                  {areaData.find(d => d.name === selectedDistrict).mandals.map((mandal) => (
                    <MenuItem key={mandal.name} value={mandal.name}>
                      {mandal.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}

          {selectedMandal && (
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Shakti Kendra</InputLabel>
                <Select value={selectedShaktiKendra} onChange={handleShaktiKendraChange}>
                  {areaData.find(d => d.name === selectedDistrict)
                    .mandals.find(m => m.name === selectedMandal)
                    .shaktiKendras.map((sk) => (
                      <MenuItem key={sk.name} value={sk.name}>
                        {sk.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          )}

          {selectedShaktiKendra && (
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Panna</InputLabel>
                <Select value={selectedPanna} onChange={handlePannaChange}>
                  {areaData.find(d => d.name === selectedDistrict)
                    .mandals.find(m => m.name === selectedMandal)
                    .shaktiKendras.find(sk => sk.name === selectedShaktiKendra)
                    .panns.map((panna) => (
                      <MenuItem key={panna.name} value={panna.name}>
                        {panna.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          )}

          {selectedPanna && (
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Booth</InputLabel>
                <Select value={selectedBooth} onChange={handleBoothChange}>
                  {areaData.find(d => d.name === selectedDistrict)
                    .mandals.find(m => m.name === selectedMandal)
                    .shaktiKendras.find(sk => sk.name === selectedShaktiKendra)
                    .panns.find(p => p.name === selectedPanna)
                    .booths.map((booth) => (
                      <MenuItem key={booth} value={booth}>
                        {booth}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          )}
        </Grid>
      </Box>

      {selectedData.length > 0 && (
        <Grid container spacing={3} sx={{ mt: 5 }}>
          {selectedData.map((person, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                    {person.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1">{person.title}</Typography>
                    <Typography variant="body2">Name: {person.name}</Typography>
                    <Typography variant="body2">Constituency: {person.constituency}</Typography>
                    <Typography variant="body2">Contact: {person.contact}</Typography>
                    <Typography variant="body2">Email: {person.email}</Typography>
                    <Typography variant="body2">Social: {person.social}</Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => setSelectedPerson(person)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {selectedPerson && (
        <Box sx={{ mt: 5, p: 2, bgcolor: '#f4f4f4', borderRadius: 1 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Detailed Information for {selectedPerson.name}
          </Typography>
          <Typography variant="body1">Title: {selectedPerson.title}</Typography>
          <Typography variant="body1">Constituency: {selectedPerson.constituency}</Typography>
          <Typography variant="body1">Contact: {selectedPerson.contact}</Typography>
          <Typography variant="body1">Email: {selectedPerson.email}</Typography>
          <Typography variant="body1">Social: {selectedPerson.social}</Typography>
          {/* Add more detailed information as needed */}
          <Button size="small" color="secondary" onClick={() => setSelectedPerson(null)}>
            Close
          </Button>
        </Box>
      )}

      {selectedDistrict && (
        <Box sx={{ mt: 5, height: '400px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Map of {selectedDistrict}
        </Typography>
        <MapContainer center={[29.9695, 76.8783]} zoom={10} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {specialPeopleData.filter(person => person.area === selectedDistrict).map((person, index) => (
            <Marker key={index} position={[29.9695 + index * 0.01, 76.8783 + index * 0.01]}>
              <Popup>
                {person.name} - {person.title}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
      
      )}
    </Container>
  );
}
