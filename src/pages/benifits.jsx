import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const generateDummyData = (level) => {
  const multiplier = Math.pow(0.8, level); // Reduce numbers for lower levels
  return {
    benefitsData: {
      labels: ['Scholarship', 'Subsidy', 'Grant'],
      datasets: [
        {
          data: [
            Math.floor(30 * multiplier),
            Math.floor(50 * multiplier),
            Math.floor(20 * multiplier)
          ],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    },
    benefitsDetails: [
      {
        type: 'Scholarship',
        description: 'Awarded to students based on merit',
        count: Math.floor(30 * multiplier),
        amount: `₹${Math.floor(5000 * multiplier)}`
      },
      {
        type: 'Subsidy',
        description: 'Financial aid provided to families',
        count: Math.floor(50 * multiplier),
        amount: `₹${Math.floor(7000 * multiplier)}`
      },
      {
        type: 'Grant',
        description: 'Given for special projects or needs',
        count: Math.floor(20 * multiplier),
        amount: `₹${Math.floor(10000 * multiplier)}`
      },
    ]
  };
};

const statesData = {
  Haryana: {
    districts: {
      District1: {
        mandals: {
          Mandal1: {
            shaktiKendras: {
              ShaktiKendra1: {
                panns: {
                  Panna1: ['Booth1', 'Booth2'],
                  Panna2: ['Booth3', 'Booth4'],
                },
              },
              ShaktiKendra2: {
                panns: {
                  Panna3: ['Booth5', 'Booth6'],
                  Panna4: ['Booth7', 'Booth8'],
                },
              },
            },
          },
          Mandal2: {
            shaktiKendras: {
              ShaktiKendra3: {
                panns: {
                  Panna5: ['Booth9', 'Booth10'],
                  Panna6: ['Booth11', 'Booth12'],
                },
              },
            },
          },
        },
      },
      District2: {
        mandals: {
          Mandal3: {
            shaktiKendras: {
              ShaktiKendra4: {
                panns: {
                  Panna7: ['Booth13', 'Booth14'],
                  Panna8: ['Booth15', 'Booth16'],
                },
              },
            },
          },
        },
      },
    },
  },
  Delhi: {
    districts: {
      District3: {
        mandals: {
          Mandal4: {
            shaktiKendras: {
              ShaktiKendra5: {
                panns: {
                  Panna9: ['Booth17', 'Booth18'],
                  Panna10: ['Booth19', 'Booth20'],
                },
              },
            },
          },
        },
      },
    },
  },
};

export default function BenefitsPage() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMandal, setSelectedMandal] = useState('');
  const [selectedShaktiKendra, setSelectedShaktiKendra] = useState('');
  const [selectedPanna, setSelectedPanna] = useState('');
  const [selectedBooth, setSelectedBooth] = useState('');
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict('');
    setSelectedMandal('');
    setSelectedShaktiKendra('');
    setSelectedPanna('');
    setSelectedBooth('');
    setCurrentLevel(1);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedMandal('');
    setSelectedShaktiKendra('');
    setSelectedPanna('');
    setSelectedBooth('');
    setCurrentLevel(2);
  };

  const handleMandalChange = (event) => {
    setSelectedMandal(event.target.value);
    setSelectedShaktiKendra('');
    setSelectedPanna('');
    setSelectedBooth('');
    setCurrentLevel(3);
  };

  const handleShaktiKendraChange = (event) => {
    setSelectedShaktiKendra(event.target.value);
    setSelectedPanna('');
    setSelectedBooth('');
    setCurrentLevel(4);
  };

  const handlePannaChange = (event) => {
    setSelectedPanna(event.target.value);
    setSelectedBooth('');
    setCurrentLevel(5);
  };

  const handleBoothChange = (event) => {
    setSelectedBooth(event.target.value);
    setCurrentLevel(6);
  };

  const { benefitsData, benefitsDetails } = generateDummyData(currentLevel);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Benefits Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select value={selectedState} onChange={handleStateChange}>
              {Object.keys(statesData).map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {selectedState && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>District</InputLabel>
              <Select value={selectedDistrict} onChange={handleDistrictChange}>
                {Object.keys(statesData[selectedState].districts).map((district) => (
                  <MenuItem key={district} value={district}>
                    {district}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}

        {selectedDistrict && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Mandal</InputLabel>
              <Select value={selectedMandal} onChange={handleMandalChange}>
                {Object.keys(statesData[selectedState].districts[selectedDistrict].mandals).map((mandal) => (
                  <MenuItem key={mandal} value={mandal}>
                    {mandal}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}

        {selectedMandal && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Shakti Kendra</InputLabel>
              <Select value={selectedShaktiKendra} onChange={handleShaktiKendraChange}>
                {Object.keys(statesData[selectedState].districts[selectedDistrict].mandals[selectedMandal].shaktiKendras).map((shaktiKendra) => (
                  <MenuItem key={shaktiKendra} value={shaktiKendra}>
                    {shaktiKendra}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}

        {selectedShaktiKendra && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Panna</InputLabel>
              <Select value={selectedPanna} onChange={handlePannaChange}>
                {Object.keys(statesData[selectedState].districts[selectedDistrict].mandals[selectedMandal].shaktiKendras[selectedShaktiKendra].panns).map((panna) => (
                  <MenuItem key={panna} value={panna}>
                    {panna}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}

        {selectedPanna && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Booth</InputLabel>
              <Select value={selectedBooth} onChange={handleBoothChange}>
                {statesData[selectedState].districts[selectedDistrict].mandals[selectedMandal].shaktiKendras[selectedShaktiKendra].panns[selectedPanna].map((booth) => (
                  <MenuItem key={booth} value={booth}>
                    {booth}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
      </Grid>

      {currentLevel > 0 && (
        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Benefits Distribution
                </Typography>
                <Doughnut data={benefitsData} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Benefits Details
                </Typography>
                {benefitsDetails.map((benefit) => (
                  <Box key={benefit.type} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1">
                      {benefit.type} ({benefit.count} users)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Average Amount: {benefit.amount}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}