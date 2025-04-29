// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', department: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:5001/students');
    setStudents(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(http://localhost:5001/students/${editingId}, formData);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5001/students', formData);
    }
    setFormData({ name: '', age: '', department: '' });
    fetchStudents();
  };

  const handleEdit = (student) => {
    setFormData({ name: student.name, age: student.age, department: student.department });
    setEditingId(student._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(http://localhost:5001/students/${id});
    fetchStudents();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={e => setFormData({ ...formData, age: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={e => setFormData({ ...formData, department: e.target.value })}
          required
        />
        <button type="submit">Save
        </button>
      </form>

      <h2>Students List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <strong>{student.name}</strong> (Age: {student.age}) - Dept: {student.department}
            <br />
            <button onClick={() => handleEdit(student)} style={{ marginRight: '10px', marginTop: '5px' }}>Edit</button>
            <button onClick={() => handleDelete(student._id)} style={{ marginTop: '5px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
