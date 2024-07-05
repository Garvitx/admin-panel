import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

import { users } from 'src/_mock/user';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

const tabs = [
  { label: 'Personal Info', value: 'personalInfo' },
  { label: 'Family Info', value: 'familyInfo' },
  { label: 'Educational Info', value: 'educationalInfo' },
  { label: 'Professional Info', value: 'professionalInfo' },
  { label: 'Documents', value: 'documents' },
  { label: 'Health Info', value: 'healthInfo' },
  { label: 'Benefits Taken', value: 'benefitsTaken' },
];

export default function UserPage() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState(null);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedTab, setSelectedTab] = useState('personalInfo');

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.id);
      setSelected(newSelecteds[0]);
      return;
    }
    setSelected(null);
  };

  const handleClick = (event, id) => {
    setSelected(id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const getColumnHeaders = () => {
    switch (selectedTab) {
      case 'personalInfo':
        return [
          { id: 'name', label: 'Name' },
          { id: 'email', label: 'Email' },
          { id: 'phone', label: 'Phone' },
          { id: 'address', label: 'Address' },
          { id: '' },
        ];
      case 'familyInfo':
        return [
          { id: 'relation', label: 'Relation' },
          { id: 'dob', label: 'Date of Birth' },
          { id: 'occupation', label: 'Occupation' },
          { id: '' },
        ];
      case 'educationalInfo':
        return [
          { id: 'degree', label: 'Degree' },
          { id: 'institution', label: 'Institution' },
          { id: 'year', label: 'Year' },
          { id: 'grade', label: 'Grade' },
          { id: '' },
        ];
      case 'professionalInfo':
        return [
          { id: 'jobTitle', label: 'Job Title' },
          { id: 'company', label: 'Company' },
          { id: 'experience', label: 'Experience' },
          { id: 'location', label: 'Location' },
          { id: '' },
        ];
      case 'documents':
        return [
          { id: 'docType', label: 'Document Type' },
          { id: 'docNumber', label: 'Document Number' },
          { id: 'issueDate', label: 'Issue Date' },
          { id: 'expiryDate', label: 'Expiry Date' },
          { id: '' },
        ];
      case 'healthInfo':
        return [
          { id: 'condition', label: 'Condition' },
          { id: 'doctor', label: 'Doctor' },
          { id: 'medication', label: 'Medication' },
          { id: 'notes', label: 'Notes' },
          { id: '' },
        ];
      case 'benefitsTaken':
        return [
          { id: 'benefit', label: 'Benefit' },
          { id: 'amount', label: 'Amount' },
          { id: 'date', label: 'Date' },
          { id: 'reason', label: 'Reason' },
          { id: '' },
        ];
      default:
        return [];
    }
  };

  const selectedUser = users.find((user) => user.id === selected);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Manage Users</Typography>

        <Link to="/add-users" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
        New User
      </Button>
    </Link>
      </Stack>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>

      <Card sx={{ mt: 2 }}>
        <UserTableToolbar
          numSelected={selected ? 1 : 0}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected ? 1 : 0}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={getColumnHeaders()}
              />
              <TableBody>
                {!selected &&
                  dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <UserTableRow
                        key={row.id}
                        row={row}
                        selected={selected === row.id}
                        handleClick={(event) => handleClick(event, row.id)}
                        selectedTab={selectedTab}
                      />
                    ))}

                {selected && (
                  <UserTableRow
                    row={selectedUser}
                    selected={true}
                    handleClick={() => {}}
                    selectedTab={selectedTab}
                  />
                )}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        {!selected && (
          <TablePagination
            page={page}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Card>
    </Container>
  );
}
