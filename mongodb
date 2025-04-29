import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();


app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String,
});

const Student = mongoose.model('Student', studentSchema);

// Routes

// Create
app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

// Read
app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

// Update
app.put('/students/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(student);
});

// Delete
app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send({ message: 'Student deleted' });
});

// Start server
app.listen(5001, () => {
    console.log('Server running on http://localhost:5001');
});
