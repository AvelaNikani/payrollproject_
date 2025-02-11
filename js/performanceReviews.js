// Function to fetch performance reviews data and populate the table
function fetchPerformanceReview() {
    fetch('/performance-review') 
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('performanceTableBody');
            tableBody.innerHTML = '';

            // Loop through the data and insert rows
            data.forEach(review => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${review.id}</td>
                    <td>${review.name}</td>
                    <td>${review.employeeId}</td>
                    <td>${review.position}</td>
                    <td>${review.review_period}</td>
                    <td>${review.overall_performance}</td>
                    <td>${review.strengths}</td>
                    <td>${review.areas_for_improvement}</td>
                    <td>${review.goals_and_objectives}</td>
                    <td>${review.recommendations}</td>
                    <td>${new Date(review.submitted_at).toLocaleString()}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error =>  {
            console.error('Error fetching data:', error)
});


// Call the function to load the performance reviews when the page is loaded
document.addEventListener('DOMContentLoaded', fetchPerformanceReview) };
