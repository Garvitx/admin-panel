import PropTypes from 'prop-types';
import { TableRow, TableCell, Checkbox } from '@mui/material';

// ----------------------------------------------------------------------

UserTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  handleClick: PropTypes.func,
  selectedTab: PropTypes.string,
};

export default function UserTableRow({ row, selected, handleClick, selectedTab }) {
  const renderRow = () => {
    switch (selectedTab) {
      case 'personalInfo':
        return (
          <>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.phone}</TableCell>
            <TableCell>{row.address}</TableCell>
          </>
        );
      case 'familyInfo':
        return (
          <>
            <TableCell>{row.relation}</TableCell>
            <TableCell>{row.dob.toLocaleDateString()}</TableCell>
            <TableCell>{row.occupation}</TableCell>
          </>
        );
      case 'educationalInfo':
        return (
          <>
            <TableCell>{row.degree}</TableCell>
            <TableCell>{row.institution}</TableCell>
            <TableCell>{row.year}</TableCell>
            <TableCell>{row.grade}</TableCell>
          </>
        );
      case 'professionalInfo':
        return (
          <>
            <TableCell>{row.jobTitle}</TableCell>
            <TableCell>{row.company}</TableCell>
            <TableCell>{row.experience}</TableCell>
            <TableCell>{row.location}</TableCell>
          </>
        );
      case 'documents':
        return (
          <>
            <TableCell>{row.docType}</TableCell>
            <TableCell>{row.docNumber}</TableCell>
            <TableCell>{row.issueDate.toLocaleDateString()}</TableCell>
            <TableCell>{row.expiryDate.toLocaleDateString()}</TableCell>
          </>
        );
      case 'healthInfo':
        return (
          <>
            <TableCell>{row.condition}</TableCell>
            <TableCell>{row.doctor}</TableCell>
            <TableCell>{row.medication}</TableCell>
            <TableCell>{row.notes}</TableCell>
          </>
        );
      case 'benefitsTaken':
        return (
          <>
            <TableCell>{row.benefit}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.date.toLocaleDateString()}</TableCell>
            <TableCell>{row.reason}</TableCell>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <TableRow hover role="checkbox" aria-checked={selected} tabIndex={-1} selected={selected}>
      {!selected && (
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={handleClick} />
        </TableCell>
      )}
      {renderRow()}
    </TableRow>
  );
}
