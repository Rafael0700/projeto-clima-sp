// Gráfico de Temperatura
const tempCtx = document.getElementById('tempChart').getContext('2d');
const tempChart = new Chart(tempCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: '2010',
            data: [23.5, 23.8, 23.2, 21.5, 19.0, 17.8, 17.5, 18.8, 20.2, 21.5, 22.8, 23.2],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            tension: 0.3,
            fill: true
        }, {
            label: '2020',
            data: [24.8, 25.0, 24.5, 22.8, 20.2, 18.8, 18.5, 19.5, 21.0, 22.5, 23.8, 24.5],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.1)',
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Temperatura Média Mensal (°C) - Comparação 2010 vs 2020'
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Temperatura (°C)'
                }
            }
        }
    }
});

// Gráfico de Precipitação
const precipCtx = document.getElementById('precipChart').getContext('2d');
const precipChart = new Chart(precipCtx, {
    type: 'bar',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Precipitação Anual (mm)',
            data: [1450, 1380, 1620, 1570, 1490, 1420, 1680, 1550, 1510, 1470, 1600],
            backgroundColor: 'rgba(52, 152, 219, 0.7)',
            borderColor: 'rgba(52, 152, 219, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Precipitação Acumulada por Ano'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Precipitação (mm)'
                }
            }
        }
    }
});

// Gráfico de Correlação
const correlationCtx = document.getElementById('correlationChart').getContext('2d');
const correlationChart = new Chart(correlationCtx, {
    type: 'radar',
    data: {
        labels: ['Temperatura', 'Umidade', 'Precipitação', 'Pressão', 'Vento', 'Insolação'],
        datasets: [{
            label: 'Correlação com Temperatura',
            data: [1.0, -0.72, -0.35, 0.15, 0.28, 0.65],
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: 'rgba(52, 152, 219, 1)',
            pointBackgroundColor: 'rgba(52, 152, 219, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: -1,
                suggestedMax: 1
            }
        }
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
