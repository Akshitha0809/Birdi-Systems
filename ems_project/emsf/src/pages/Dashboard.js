import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("/employees", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => setEmployees(res.data));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Dashboard</h1>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <table className="w-full table-auto">
                    <thead className="bg-purple-600 text-white">
                    <tr>
                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Email</th>
                        <th className="p-4 text-left">Department</th>
                        <th className="p-4 text-left">Designation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id} className="border-b hover:bg-gray-100">
                            <td className="p-4">{emp.name}</td>
                            <td className="p-4">{emp.email}</td>
                            <td className="p-4">{emp.department}</td>
                            <td className="p-4">{emp.designation}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;