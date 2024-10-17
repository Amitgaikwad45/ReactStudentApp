import React, { useState } from 'react';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const addStudent = (student) => {
    if (editingIndex > -1) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = student;
      setStudents(updatedStudents);
    } else {
      setStudents((prev) => [...prev, student]); // Append the new student
    }
    setEditingIndex(-1); // Reset editing index after submission
  };

  const editStudent = (index) => {
    setEditingIndex(index);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const studentToEdit = editingIndex > -1 ? students[editingIndex] : null;

  return (
    <div style={{ padding: '2em' }}>
      <h2>Student Details Form</h2>
      <StudentForm
        addStudent={addStudent}
        studentToEdit={studentToEdit}
        clearEdit={() => setEditingIndex(-1)} // Clear editing state
      />

      <h2>Student List</h2>
      <StudentTable
        students={students}
        editStudent={editStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default App;
