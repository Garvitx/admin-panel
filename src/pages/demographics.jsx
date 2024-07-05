import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const demographicsData = {
  totalPopulation: 1000000,
  malePopulation: 520000,
  femalePopulation: 480000,
  othersPopulation: 5000,
  ageGroups: [
    { name: '0-18', value: 200000 },
    { name: '19-35', value: 300000 },
    { name: '36-60', value: 400000 },
    { name: '60+', value: 100000 },
  ],
  literacyRate: 85,
  educationLevels: [
    { level: 'Primary', value: 300000 },
    { level: 'Secondary', value: 400000 },
    { level: 'Higher', value: 200000 },
    { level: 'Graduate', value: 100000 },
  ],
  employmentRate: 75,
  employmentSectors: [
    { sector: 'Agriculture', value: 300000 },
    { sector: 'Industry', value: 200000 },
    { sector: 'Services', value: 500000 },
  ],
  healthData: {
    commonDiseases: [
      { disease: 'Disease1', value: 50000 },
      { disease: 'Disease2', value: 30000 },
    ],
    vaccinationRate: 90,
    healthFacilities: [
      { type: 'Hospitals', count: 50 },
      { type: 'Clinics', count: 200 },
    ],
  },
  housingData: {
    housingTypes: [
      { type: 'Owned', value: 600000 },
      { type: 'Rented', value: 300000 },
      { type: 'Temporary', value: 100000 },
    ],
    amenities: [
      { amenity: 'Water Supply', availability: 90 },
      { amenity: 'Electricity', availability: 95 },
      { amenity: 'Sanitation', availability: 85 },
    ],
  },
};

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
                booths: ['Booth1', 'Booth2'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'District2',
    mandals: [
      {
        name: 'Mandal2',
        shaktiKendras: [
          {
            name: 'ShaktiKendra2',
            panns: [
              {
                name: 'Panna2',
                booths: ['Booth3', 'Booth4'],
              },
            ],
          },
        ],
      },
    ],
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DemographicsPage() {
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

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Demographics
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
                  {areaData
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
                  {areaData
                    .find((d) => d.name === selectedDistrict)
                    .mandals.find((m) => m.name === selectedMandal)
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
                  {areaData
                    .find((d) => d.name === selectedDistrict)
                    .mandals.find((m) => m.name === selectedMandal)
                    .shaktiKendras.find((sk) => sk.name === selectedShaktiKendra)
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
                  {areaData
                    .find((d) => d.name === selectedDistrict)
                    .mandals.find((m) => m.name === selectedMandal)
                    .shaktiKendras.find((sk) => sk.name === selectedShaktiKendra)
                    .panns.find((p) => p.name === selectedPanna)
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

      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Total Population</Typography>
              <Typography variant="h4">{demographicsData.totalPopulation}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Male Population</Typography>
              <Typography variant="h4">{demographicsData.malePopulation}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Female Population</Typography>
              <Typography variant="h4">{demographicsData.femalePopulation}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Others Population</Typography>
              <Typography variant="h4">{demographicsData.othersPopulation}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Age Group Distribution
        </Typography>
        <BarChart width={600} height={300} data={demographicsData.ageGroups}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Literacy Rate
        </Typography>
        <Typography variant="h4">{demographicsData.literacyRate}%</Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Education Levels
        </Typography>
        <PieChart width={400} height={400}>
          <Pie
            data={demographicsData.educationLevels}
            dataKey="value"
            nameKey="level"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {demographicsData.educationLevels.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Employment Rate
        </Typography>
        <Typography variant="h4">{demographicsData.employmentRate}%</Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Employment Sectors
        </Typography>
        <LineChart width={600} height={300} data={demographicsData.employmentSectors}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sector" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Health Data
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Common Diseases</Typography>
                <ul>
                  {demographicsData.healthData.commonDiseases.map((disease, index) => (
                    <li key={index}>
                      {disease.disease}: {disease.value}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Vaccination Rate</Typography>
                <Typography variant="h4">{demographicsData.healthData.vaccinationRate}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Health Facilities</Typography>
                <ul>
                  {demographicsData.healthData.healthFacilities.map((facility, index) => (
                    <li key={index}>
                      {facility.type}: {facility.count}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Housing and Infrastructure
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Housing Types</Typography>
                <ul>
                  {demographicsData.housingData.housingTypes.map((type, index) => (
                    <li key={index}>
                      {type.type}: {type.value}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Amenities Availability</Typography>
                <ul>
                  {demographicsData.housingData.amenities.map((amenity, index) => (
                    <li key={index}>
                      {amenity.amenity}: {amenity.availability}%
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
