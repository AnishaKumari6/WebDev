import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      rollNo,
      email,
      phone,
      role,
    };

    setStudents([...students, newStudent]);

    setName("");
    setRollNo("");
    setEmail("");
    setPhone("");
    setRole("");
  };

  return (
    <div>
      <h1>Student Information Form</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Roll No:</label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="scholar">Scholar</option>
          </select>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      <h1>Student Details</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name} <br />
            <strong>Roll No:</strong> {student.rollNo} <br />
            <strong>Email:</strong> {student.email} <br />
            <strong>Phone:</strong> {student.phone} <br />
            <strong>Role:</strong> {student.role}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// React memo(memorize component)
// use memo(for calculation)
// use callbak(so that function would not recreated)
// props
// types of promises other that await/asyn
// prop drilling  - context API
// hoisting
//use context
//  state and props
