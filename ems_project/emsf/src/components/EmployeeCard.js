function EmployeeCard({ employee }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">{employee.name}</h3>
            <p className="text-sm text-gray-500">{employee.email}</p>
            <p className="text-sm text-gray-500">{employee.designation}</p>
            <p className="text-sm text-gray-500">{employee.department}</p>
        </div>
    );
}

export default EmployeeCard;