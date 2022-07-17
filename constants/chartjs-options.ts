const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: 'white',
        font: {
          size: 16,
          family: 'Barlow',
        },
        // stepSize: 1,
        beginAtZero: false,
      },
      title: {
        display: true,
        text: 'Weight (in pounds)',
        color: 'white',
        font: {
          size: 16,
          family: 'Barlow',
        },
      },
    },
    x: {
      ticks: {
        color: 'white',
        font: {
          size: 16,
          family: 'Barlow',
        },
        // stepSize: 1,
        beginAtZero: false,
      },
      title: {
        display: true,
        text: 'Date: (Month, Day, Year)',
        color: 'white',
        font: {
          size: 16,
          family: 'Barlow',
        },
      },
    },
  },
};

export default chartOptions;
