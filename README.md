The Employee Management System (EMS) is a Spring Boot-based web application that allows administrators to manage employee data efficiently. It includes secure login functionality, a user-friendly dashboard, and core features like viewing, adding, editing, and deleting employee records. The frontend is built using Thymeleaf and styled with Bootstrap to ensure responsive design. The project follows a clean MVC architecture and can be easily customized or scaled. Ideal for learning full-stack Java development, this EMS app demonstrates integration of backend logic with dynamic frontend rendering.
# 🧑‍💼 Employee Management System (EMS)

A simple web-based Employee Management System built using Spring Boot, Thymeleaf, and Bootstrap. This application allows administrators to manage employee data — including adding, editing, viewing, and deleting employees — through a clean and intuitive UI.


 📂 Project Structure
ems_project/
│
├── src/
│ ├── main/
│ │ ├── java/com/example/ems/ # Java source files
│ │ ├── resources/
│ │ │ ├── static/ # CSS and static files
│ │ │ │ └── style.css
│ │ │ ├── templates/ # HTML templates (Thymeleaf)
│ │ │ │ ├── login.html
│ │ │ │ ├── dashboard.html
│ │ │ │ ├── employees.html
│ │ │ │ └── add_employee.html
│ │ │ └── application.properties
│ └── test/...
│
├── pom.xml # Maven config
└── README.md




## ⚙ Features

- 🔐 Admin Login
- 📊 Dashboard Overview
- 👨‍💼 View Employees
- ➕ Add New Employee
- ✏️ Edit Existing Employee
- ❌ Delete Employee

---

 ## How to Run

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/ems_project.git
   cd ems_project

mvn spring-boot:run

Username: admin
Password: admin123
