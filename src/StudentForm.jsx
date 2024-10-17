import React, { useState } from 'react';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Select,
  MenuItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StudentForm = ({ addStudent, studentToEdit, clearEdit }) => {
  const [name, setName] = useState(studentToEdit ? studentToEdit.name : '');
  const [gender, setGender] = useState(
    studentToEdit ? studentToEdit.gender : 'male'
  );
  const [course, setCourse] = useState(
    studentToEdit ? studentToEdit.course : ''
  );
  const [termsAccepted, setTermsAccepted] = useState(
    studentToEdit ? studentToEdit.termsAccepted : false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && course && termsAccepted) {
      addStudent({ name, gender, course, termsAccepted });
      // Clear form
      setName('');
      setGender('male');
      setCourse('');
      setTermsAccepted(false);
      clearEdit(); // Clear the editing state
    }
  };

  React.useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setGender(studentToEdit.gender);
      setCourse(studentToEdit.course);
      setTermsAccepted(studentToEdit.termsAccepted);
    }
  }, [studentToEdit]);

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1em' }}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
      </div>

      <div style={{ marginBottom: '1em' }}>
        <RadioGroup
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          row
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </div>

      <div style={{ marginBottom: '1em' }}>
        <Select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          fullWidth
          displayEmpty
          required
        >
          <MenuItem value="" disabled>
            Select Course
          </MenuItem>
          <MenuItem value="math">Mathematics</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="history">History</MenuItem>
        </Select>
      </div>

      <div style={{ marginBottom: '1em' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          }
          label="Accept Terms & Conditions"
        />
      </div>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
export default StudentForm;
