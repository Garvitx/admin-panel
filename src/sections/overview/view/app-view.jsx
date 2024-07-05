import React, { useState } from 'react';
import { Container, Grid, Typography, MenuItem, Select, FormControl, InputLabel, Card, CardContent, CardActions, Button, Box, Avatar } from '@mui/material';
import { School, MedicalServices, Person, Badge } from '@mui/icons-material';

import AppWidgetSummary from '../app-widget-summary';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';

const dummyData = {
  districts: [
    {
      name: 'District1',
      population: 1000000,
      malePopulation: 520000,
      femalePopulation: 480000,
      childrenPopulation: 200000,
      seniorPopulation: 150000,
      othersPopulation: 5000,
      mandals: [
        {
          name: 'Mandal1',
          population: 500000,
          malePopulation: 260000,
          femalePopulation: 240000,
          childrenPopulation: 100000,
          seniorPopulation: 75000,
          othersPopulation: 2500,
          shaktiKendras: [
            {
              name: 'ShaktiKendra1',
              population: 100000,
              malePopulation: 52000,
              femalePopulation: 48000,
              childrenPopulation: 20000,
              seniorPopulation: 15000,
              othersPopulation: 500,
              panns: [
                {
                  name: 'Panna1',
                  population: 10000,
                  malePopulation: 5200,
                  femalePopulation: 4800,
                  childrenPopulation: 2000,
                  seniorPopulation: 1500,
                  othersPopulation: 100,
                  booths: [
                    {
                      name: 'Booth1',
                      population: 1000,
                      malePopulation: 520,
                      femalePopulation: 480,
                      childrenPopulation: 200,
                      seniorPopulation: 150,
                      othersPopulation: 50,
                    },
                    // More booths...
                  ]
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
  ]
};

export default function AppView() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMandal, setSelectedMandal] = useState('');
  const [selectedShaktiKendra, setSelectedShaktiKendra] = useState('');
  const [selectedPanna, setSelectedPanna] = useState('');
  const [selectedBooth, setSelectedBooth] = useState('');

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
    let data = null;
    if (selectedDistrict) {
      data = dummyData.districts.find(d => d.name === selectedDistrict);
      if (selectedMandal) {
        data = data.mandals.find(m => m.name === selectedMandal);
        if (selectedShaktiKendra) {
          data = data.shaktiKendras.find(sk => sk.name === selectedShaktiKendra);
          if (selectedPanna) {
            data = data.panns.find(p => p.name === selectedPanna);
            if (selectedBooth) {
              data = data.booths.find(b => b.name === selectedBooth);
            }
          }
        }
      }
    }
    return data;
  };

  const selectedData = getSelectedData();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Box sx={{ p: 2, bgcolor: '#f4f4f4', borderRadius: 1 }}>  {/* Increased padding */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>District</InputLabel>
              <Select value={selectedDistrict} onChange={handleDistrictChange}>
                {dummyData.districts.map((district) => (
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
                <InputLabel shrink sx={{ color: 'grey',mb :8 }}>
                  Mandal
                </InputLabel>
                <Select value={selectedMandal} onChange={handleMandalChange}>
                  {dummyData.districts
                    .find((d) => d.name === selectedDistrict)
                    .mandals.map((mandal) => (
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
                  {dummyData.districts.find(d => d.name === selectedDistrict)
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
                  {dummyData.districts.find(d => d.name === selectedDistrict)
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
                  {dummyData.districts.find(d => d.name === selectedDistrict)
                    .mandals.find(m => m.name === selectedMandal)
                    .shaktiKendras.find(sk => sk.name === selectedShaktiKendra)
                    .panns.find(p => p.name === selectedPanna)
                    .booths.map((booth) => (
                      <MenuItem key={booth.name} value={booth.name}>
                        {booth.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          )}
        </Grid>
      </Box>

      {
        selectedData && (

          <Grid container spacing={3} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Men" total={selectedData.malePopulation} color="info" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Women" total={selectedData.femalePopulation} color="success" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Children (0-18)" total={selectedData.childrenPopulation} color="warning" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Senior Citizens (60+)" total={selectedData.seniorPopulation} color="error" />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppWebsiteVisits
                title="Age Distribution"
                subheader="Distribution across different age groups"
                chart={{
                  labels: ['0-18', '19-35', '36-60', '60+'],
                  colors: ['#FF7043', '#AB47BC', '#42A5F5', '#66BB6A'], // Add this line
                  series: [
                    {
                      name: 'Population',
                      type: 'bar',
                      fill: 'solid',
                      data: [
                        selectedData.childrenPopulation,
                        Math.floor((selectedData.population - selectedData.childrenPopulation - selectedData.seniorPopulation - selectedData.othersPopulation) * 0.4),
                        Math.floor((selectedData.population - selectedData.childrenPopulation - selectedData.seniorPopulation - selectedData.othersPopulation) * 0.6),
                        selectedData.seniorPopulation
                      ],
                    },
                  ],
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <AppCurrentVisits
                title="Gender Distribution"
                chart={{
                  colors: ['#42A5F5', '#AB47BC', '#FF7043'], // Add this line
                  series: [
                    { label: 'Men', value: selectedData.malePopulation },
                    { label: 'Women', value: selectedData.femalePopulation },
                    { label: 'Others', value: selectedData.othersPopulation },
                  ],
                }}
              />
            </Grid>

            {/* People given benefits section */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                People Given Benefits
              </Typography>
              {[
                { name: 'Amit Saini', amount: 10000, reason: 'Scholarship', icon: <School /> },
                { name: 'Ram Kumar', amount: 15000, reason: 'Medical Aid', icon: <MedicalServices /> },
              ].map((benefit, index) => (
                <Card key={index} sx={{ mb: 2, boxShadow: 3 }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      {benefit.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1">{benefit.name}</Typography>
                      <Typography variant="body2">Amount: ₹{benefit.amount}</Typography>
                      <Typography variant="body2">Reason: {benefit.reason}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>

            {/* Special people section */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Special People of the Area
              </Typography>
              {[
                { title: 'MLA', name: 'Rajesh Kumar', icon: <Person /> },
                { title: 'Mukhya', name: 'Anita Sharma', icon: <Badge /> },
                { title: 'Sarpanch', name: 'Vijay Singh', icon: <Badge /> },
              ].map((person, index) => (
                <Card key={index} sx={{ mb: 2, boxShadow: 3 }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                      {person.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1">{person.title}</Typography>
                      <Typography variant="body2">Name: {person.name}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Grid>
        )
      }
    </Container >
  );
}
