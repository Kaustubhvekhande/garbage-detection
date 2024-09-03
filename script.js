var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample garbage location.')
    .openPopup();



document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('sidebarChart').getContext('2d');
    var sidebarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Area 1', 'Area 2', 'Area 3', 'Area 4'],
            datasets: [{
                label: 'Waste Levels',
                data: [12, 19, 3, 5], // Example data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});