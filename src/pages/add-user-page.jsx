import { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Grid, Tabs, Tab } from '@mui/material';
import { Icon } from '@iconify/react';
import bulkUploadIcon from '@iconify/icons-mdi/file-upload-outline';

const initialUserState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  relation: '',
  dob: '',
  occupation: '',
  degree: '',
  institution: '',
  year: '',
  grade: '',
  jobTitle: '',
  company: '',
  experience: '',
  location: '',
  docType: '',
  docNumber: '',
  issueDate: '',
  expiryDate: '',
  condition: '',
  doctor: '',
  medication: '',
  notes: '',
  benefit: '',
  amount: '',
  date: '',
  reason: '',
  state: 'Haryana',
  district: '',
  mandal: '',
  shaktiKendra: '',
  panna: '',
  booth: '',
};

export default function AddUsersPage() {
  const [user, setUser] = useState(initialUserState);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user submission
  };

  const handleBulkUpload = (e) => {
    // Handle bulk upload
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={user.address}
                onChange={handleChange}
                required
              />
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Degree"
                name="degree"
                value={user.degree}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Institution"
                name="institution"
                value={user.institution}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Year"
                name="year"
                value={user.year}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Grade"
                name="grade"
                value={user.grade}
                onChange={handleChange}
                required
              />
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Job Title"
                name="jobTitle"
                value={user.jobTitle}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={user.company}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Experience"
                name="experience"
                value={user.experience}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={user.location}
                onChange={handleChange}
                required
              />
            </Grid>
          </>
        );
      case 3:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Relation"
                name="relation"
                value={user.relation}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                value={user.dob}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Occupation"
                name="occupation"
                value={user.occupation}
                onChange={handleChange}
                required
              />
            </Grid>
          </>
        );
      case 4:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Condition"
                name="condition"
                value={user.condition}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Doctor"
                name="doctor"
                value={user.doctor}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Medication"
                name="medication"
                value={user.medication}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Notes"
                name="notes"
                value={user.notes}
                onChange={handleChange}
                required
              />
            </Grid>
          </>
        );
      case 5:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Benefit"
                name="benefit"
                value={user.benefit}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Amount"
                name="amount"
                value={user.amount}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                value={user.date}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Reason"
                name="reason"
                value={user.reason}
                onChange={handleChange}
                required
              />
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Add New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={user.state}
              onChange={handleChange}
              required
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="District"
              name="district"
              value={user.district}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mandal"
              name="mandal"
              value={user.mandal}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Shakti Kendra"
              name="shaktiKendra"
              value={user.shaktiKendra}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Panna"
              name="panna"
              value={user.panna}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Booth"
              name="booth"
              value={user.booth}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>

        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ mt: 3 }}
        >
          <Tab label="Personal Info" />
          <Tab label="Educational Info" />
          <Tab label="Professional Info" />
          <Tab label="Family Info" />
          <Tab label="Health Info" />
          <Tab label="Benefits Taken" />
        </Tabs>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {renderTabContent()}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Add User
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Icon icon={bulkUploadIcon} />}
            component="label"
          >
            Bulk Upload
            <input type="file" hidden onChange={handleBulkUpload} />
          </Button>
        </Box>
      </form>
    </Container>
  );
}
