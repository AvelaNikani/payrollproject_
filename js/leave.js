document.addEventListener("DOMContentLoaded", function () {
    fetchLeaveData();
});

function fetchLeaveData() {
    fetch('http://localhost:5000/api/leave-data')
        .then(response => response.json())
        .then(data => {
            populateTable(data);
            renderChart(data);
        })
        .catch(error => console.error('Error fetching leave data:', error));
}

function populateTable(data) {
    const tableBody = document.getElementById("leaveTableBody");
    tableBody.innerHTML = "";

    data.forEach(employee => {
        const row = `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.hoursWorked}</td>
                <td>${employee.leaveDays}</td>
                <td>${employee.finalSalary}</td>
                <td>${employee.status}</td>
                <td>
                    <button class="btn btn-success" onclick="updateLeaveStatus(${employee.employeeId}, 'Approved')">Approve</button>
                    <button class="btn btn-danger" onclick="updateLeaveStatus(${employee.employeeId}, 'Rejected')">Reject</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function renderChart(data) {
    const ctx = document.getElementById("leaveBarChart").getContext("2d");
    const employeeNames = data.map(e => e.name);
    const leaveDays = data.map(e => e.leaveDays);

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: employeeNames,
            datasets: [{
                label: "Leave Days Taken",
                data: leaveDays,
                backgroundColor: "rgba(54, 162, 235, 0.5)"
            }]
        }
    });
}

function updateLeaveStatus(employeeId, status) {
    fetch("http://localhost:5000/api/update-leave-status", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leaveId: employeeId, status })
    })
    .then(response => response.json())
    .then(() => fetchLeaveData()) // Refresh data
    .catch(error => console.error("Error updating leave status:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    fetchEmployees();
});

function fetchEmployees() {
    fetch("http://localhost:5000/employees")
        .then(response => response.json())
        .then(data => {
            renderTable(data);
        })
        .catch(error => console.error("Error fetching employees:", error));
}

function renderTable(employees) {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    employees.forEach(emp => {
        let row = `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.position}</td>
            <td>${emp.email}</td>
            <td>${emp.history}</td>
            <td>...</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function searchEmployee() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    fetch(`http://localhost:5000/employees/search?query=${query}`)
        .then(response => response.json())
        .then(data => renderTable(data))
        .catch(error => console.error("Error searching employees:", error));
}
