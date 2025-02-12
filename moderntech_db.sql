 -- drop database if exists moderntech_db;
CREATE DATABASE `moderntech_db`;
USE moderntech_db;

-- ALTER TABLE performance_reviews DROP FOREIGN KEY performance_reviews_ibfk_1;
-- drop table EmployeeInformation;

-- Table for Employee Information with added action columns for Edit
CREATE TABLE EmployeeInformation (
    employeeId INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(100),
    position VARCHAR(100),
    department VARCHAR(100),
    salary DECIMAL(10, 2),
    employmentHistory TEXT,
    contact VARCHAR(100),
    action_edit VARCHAR(10)  -- For Edit button action (initially empty)
);
-- Employee Information Data with added action column for Edit
INSERT INTO EmployeeInformation (employeeId, name, position, department, salary, employmentHistory, contact, action_edit)
VALUES
(1, 'Sibongile Nkosi', 'Software Engineer', 'Development', 70000, 'Joined in 2015, promoted to Senior in 2018', 'sibongile.nkosi@moderntech.com', ''),
(2, 'Lungile Moyo', 'HR Manager', 'HR', 80000, 'Joined in 2013, promoted to Manager in 2017', 'lungile.moyo@moderntech.com', ''),
(3, 'Thabo Molefe', 'Quality Analyst', 'QA', 55000, 'Joined in 2018', 'thabo.molefe@moderntech.com', ''),
(4, 'Keshav Naidoo', 'Sales Representative', 'Sales', 60000, 'Joined in 2020', 'keshav.naidoo@moderntech.com', ''),
(5, 'Zanele Khumalo', 'Marketing Specialist', 'Marketing', 58000, 'Joined in 2019', 'zanele.khumalo@moderntech.com', ''),
(6, 'Sipho Zulu', 'UI/UX Designer', 'Design', 65000, 'Joined in 2016', 'sipho.zulu@moderntech.com', ''),
(7, 'Naledi Moeketsi', 'DevOps Engineer', 'IT', 72000, 'Joined in 2017', 'naledi.moeketsi@moderntech.com', ''),
(8, 'Farai Gumbo', 'Software Engineer', 'Development', 68000, 'Joined in 2018', 'farai.gumbo@moderntech.com', ''),
(9, 'Karabo Dlamini', 'HR Assistant', 'HR', 45000, 'Joined in 2022', 'karabo.dlamini@moderntech.com', ''),
(10, 'Fatima Patel', 'Sales Manager', 'Sales', 75000, 'Joined in 2015, promoted to Manager in 2018', 'fatima.patel@moderntech.com', '');
-- table for Attendance
CREATE TABLE Attendance (
    attendanceId INT AUTO_INCREMENT PRIMARY KEY,
    employeeId INT,
    name VARCHAR(100),  -- Employee Name
    date DATE,
    status VARCHAR(50),
    FOREIGN KEY (employeeId) REFERENCES EmployeeInformation(employeeId)
);
-- Attendance Data
INSERT INTO Attendance (employeeId, name, date, status)
VALUES
(1, 'Sibongile Nkosi', '2024-11-25', 'Present'),
(1, 'Sibongile Nkosi', '2024-11-26', 'Absent'),
(1, 'Sibongile Nkosi', '2024-11-27', 'Present'),
(1, 'Sibongile Nkosi', '2024-11-28', 'Present'),
(1, 'Sibongile Nkosi', '2024-11-29', 'Present'),
(2, 'Lungile Moyo', '2024-11-25', 'Present'),
(2, 'Lungile Moyo', '2024-11-26', 'Present'),
(2, 'Lungile Moyo', '2024-11-27', 'Absent'),
(2, 'Lungile Moyo', '2024-11-28', 'Present'),
(2, 'Lungile Moyo', '2024-11-29', 'Present'),
(3, 'Thabo Molefe', '2024-11-25', 'Present'),
(3, 'Thabo Molefe', '2024-11-26', 'Present'),
(3, 'Thabo Molefe', '2024-11-27', 'Present'),
(3, 'Thabo Molefe', '2024-11-28', 'Absent'),
(3, 'Thabo Molefe', '2024-11-29', 'Present'),
(4, 'Keshav Naidoo', '2024-11-25', 'Absent'),
(4, 'Keshav Naidoo', '2024-11-26', 'Present'),
(4, 'Keshav Naidoo', '2024-11-27', 'Present'),
(4, 'Keshav Naidoo', '2024-11-28', 'Present'),
(4, 'Keshav Naidoo', '2024-11-29', 'Present'),
(5, 'Zanele Khumalo', '2024-11-25', 'Present'),
(5, 'Zanele Khumalo', '2024-11-26', 'Present'),
(5, 'Zanele Khumalo', '2024-11-27', 'Absent'),
(5, 'Zanele Khumalo', '2024-11-28', 'Present'),
(5, 'Zanele Khumalo', '2024-11-29', 'Present'),
(6, 'Sipho Zulu', '2024-11-25', 'Present'),
(6, 'Sipho Zulu', '2024-11-26', 'Present'),
(6, 'Sipho Zulu', '2024-11-27', 'Absent'),
(6, 'Sipho Zulu', '2024-11-28', 'Present'),
(6, 'Sipho Zulu', '2024-11-29', 'Present'),
(7, 'Naledi Moeketsi', '2024-11-25', 'Present'),
(7, 'Naledi Moeketsi', '2024-11-26', 'Present'),
(7, 'Naledi Moeketsi', '2024-11-27', 'Present'),
(7, 'Naledi Moeketsi', '2024-11-28', 'Absent'),
(7, 'Naledi Moeketsi', '2024-11-29', 'Present'),
(8, 'Farai Gumbo', '2024-11-25', 'Present'),
(8, 'Farai Gumbo', '2024-11-26', 'Absent'),
(8, 'Farai Gumbo', '2024-11-27', 'Present'),
(8, 'Farai Gumbo', '2024-11-28', 'Present'),
(8, 'Farai Gumbo', '2024-11-29', 'Present'),
(9, 'Karabo Dlamini', '2024-11-25', 'Present'),
(9, 'Karabo Dlamini', '2024-11-26', 'Present'),
(9, 'Karabo Dlamini', '2024-11-27', 'Present'),
(9, 'Karabo Dlamini', '2024-11-28', 'Absent'),
(9, 'Karabo Dlamini', '2024-11-29', 'Present'),
(10, 'Fatima Patel', '2024-11-25', 'Present'),
(10, 'Fatima Patel', '2024-11-26', 'Present'),
(10, 'Fatima Patel', '2024-11-27', 'Absent'),
(10, 'Fatima Patel', '2024-11-28', 'Present'),
(10, 'Fatima Patel', '2024-11-29', 'Present');
-- Table for Leave Requests with buttons for actions
CREATE TABLE LeaveRequests (
    leaveRequestId INT AUTO_INCREMENT PRIMARY KEY,
    employeeId INT,
    name VARCHAR(100),  -- Employee Name
    date DATE,
    reason VARCHAR(100),
    action_accept VARCHAR(10),  -- For Accept button action (initially empty)
    action_deny VARCHAR(10),    -- For Deny button action (initially empty)
    action_pending VARCHAR(10), -- For Pending button action (initially empty)
    FOREIGN KEY (employeeId) REFERENCES EmployeeInformation(employeeId)
);
-- Updated Leave Requests Data with the action columns
INSERT INTO LeaveRequests (employeeId, name, date, reason, action_accept, action_deny, action_pending)
VALUES
(1, 'Sibongile Nkosi', '2024-11-22', 'Sick Leave', '', '', ''),
(1, 'Sibongile Nkosi', '2024-12-01', 'Personal', '', '', ''),
(2, 'Lungile Moyo', '2024-11-15', 'Family Responsibility', '', '', ''),
(2, 'Lungile Moyo', '2024-12-02', 'Vacation', '', '', ''),
(3, 'Thabo Molefe', '2024-11-10', 'Medical Appointment', '', '', ''),
(3, 'Thabo Molefe', '2024-12-05', 'Personal', '', '', ''),
(4, 'Keshav Naidoo', '2024-11-20', 'Bereavement', '', '', ''),
(5, 'Zanele Khumalo', '2024-12-01', 'Childcare', '', '', ''),
(6, 'Sipho Zulu', '2024-11-18', 'Sick Leave', '', '', ''),
(7, 'Naledi Moeketsi', '2024-11-22', 'Vacation', '', '', ''),
(8, 'Farai Gumbo', '2024-12-02', 'Medical Appointment', '', '', ''),
(9, 'Karabo Dlamini', '2024-11-19', 'Childcare', '', '', ''),
(10, 'Fatima Patel', '2024-12-03', 'Vacation', '', '', '');
-- Table for Payroll with a single Generate action column
CREATE TABLE Payroll (
    payroll_Id INT AUTO_INCREMENT PRIMARY KEY,
    employee_Id INT,
    name VARCHAR(100),  -- Employee Name
    hoursWorked DECIMAL(10, 2),
    leaveDeductions DECIMAL(10, 2),
    finalSalary DECIMAL(10, 2),
    action_generate VARCHAR(10),  -- For Generate button action (initially empty)
    FOREIGN KEY (employee_Id) REFERENCES EmployeeInformation(employeeId)
);
-- Updated Payroll Data with the Generate action column
INSERT INTO Payroll (employee_Id, name, hoursWorked, leaveDeductions, finalSalary, action_generate)
VALUES
(1, 'Sibongile Nkosi', 160, 8, 69500, ''),
(2, 'Lungile Moyo', 150, 10, 79000, ''),
(3, 'Thabo Molefe', 170, 4, 54800, ''),
(4, 'Keshav Naidoo', 165, 6, 59700, ''),
(5, 'Zanele Khumalo', 158, 5, 57850, ''),
(6, 'Sipho Zulu', 168, 2, 64800, ''),
(7, 'Naledi Moeketsi', 175, 3, 71800, ''),
(8, 'Farai Gumbo', 160, 0, 56000, ''),
(9, 'Karabo Dlamini', 155, 5, 61500, ''),
(10, 'Fatima Patel', 162, 4, 57750, '');

CREATE TABLE performance_reviews( 
id INT AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(100) NOT NULL, 
employeeId INT,
position VARCHAR(100) NOT NULL, 
review_period VARCHAR(100) NOT NULL, 
overall_performance ENUM('Exceptional', 'Meets Expectations', 'Needs Improvement', 'Unsatisfactory') NOT NULL, 
strengths TEXT NOT NULL, 
areas_for_improvement TEXT NOT NULL, 
goals_and_objectives TEXT NOT NULL, 
recommendations TEXT NOT NULL, 
submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
FOREIGN KEY (employeeId) REFERENCES EmployeeInformation(employeeId)
 ); 

CREATE TABLE payslip (
payslip_id int auto_increment primary key,
employeeId int,
name varchar (100),
position varchar(100),
salary decimal(10,2),
hoursWorked decimal(10,2),
leaveDeductions decimal(10,2),
finalSalary decimal(10,2)
);
insert into payslip (employeeId,name,position, salary, hoursWorked, leaveDeductions, finalSalary) values
(1,	'Sibongile Nkosi',	'Software Engineer',	70000.00,	160.00,	8.00,	69500.00),
(2,	'Lungile Moyo',	'HR Manager',	80000.00,	150.00,	10.00,	79000.00),
(3,	'Thabo Molefe',	'Quality Analyst',	55000.00,	170.00,	4.00,	54800.00),
(4,	'Keshav Naidoo',	'Sales Representative',	60000.00,	165.00,	6.00,	59700.00),
(5,	'Zanele Khumalo',	'Marketing Specialist',	58000.00,	158.00,	5.00,	57850.00),
(6,	'Sipho Zulu',	'UI/UX Designer',	65000.00,	168.00,	2.00,	64800.00),
(7,	'Naledi Moeketsi',	'DevOps Engineer',	72000.00 ,175.00,	3.00,	71800.00),
(8,	'Farai Gumbo',	'Software Engineer',	68000.00,	160.00,	0.00,	56000.00),
(9,	'Karabo Dlamini',	'HR Assistant',	45000.00,	155.00,	5.00,	61500.00),
(10,'Fatima Patel',	'Sales Manager',	75000.00,	162.00	,4.00	,57750.00);


