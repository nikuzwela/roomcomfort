document.addEventListener("DOMContentLoaded", function() {
    const temperatureDisplay = document.getElementById("current-temperature");
    const tempControl = document.getElementById("temp-control");
    const lightControl = document.getElementById("light-control");
    const setTempButton = document.getElementById("set-temperature");
    const setLightButton = document.getElementById("set-light");
    const fanToggle = document.getElementById("fan-toggle");
    const ctx = document.getElementById("temperature-chart").getContext("2d");
 
    const chartData = {
      labels: [],
      datasets: [{
        label: "Temperature (°C)",
        data: [],
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1
      }]
    };
  
    const temperatureChart = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Temperature (°C)"
            }
          },
          x: {
            title: {
              display: true,
              text: "Time"
            }
          }
        }
      }
    });
 
    function addData(label, data) {
      chartData.labels.push(label);
      chartData.datasets[0].data.push(data);
      if (chartData.labels.length > 10) {
        chartData.labels.shift();
        chartData.datasets[0].data.shift();
      }
      temperatureChart.update();
    }
  
    setInterval(function() {
      const currentTime = new Date().toLocaleTimeString();
      const randomTemp = Math.floor(Math.random() * 41); 
      temperatureDisplay.textContent = randomTemp;
      addData(currentTime, randomTemp);
  
      const threshold = parseInt(tempControl.value);
      if (randomTemp >= threshold) {
        fanToggle.checked = true;
      } else {
        fanToggle.checked = false;
      }
    }, 3000);

    tempControl.addEventListener("input", function() {
      temperatureDisplay.textContent = tempControl.value;
    });
    document.getElementById('fan-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
      });
      
  
    setTempButton.addEventListener("click", function() {
      alert("Temperature set to " + tempControl.value + "°C");
    });
  
    setLightButton.addEventListener("click", function() {
      alert("Light intensity set to " + lightControl.value + " lux");
    });
  
    fanToggle.addEventListener("change", function() {
      if (fanToggle.checked) {
        alert("Fan turned on");
      } else {
        alert("Fan turned off");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Function to get the current date and day
    function getCurrentDate() {
      const currentDate = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return currentDate.toLocaleDateString('en-US', options);
    }
  
    // Update input field with current date and day
    const dateInput = document.getElementById("date-input");
    dateInput.value = getCurrentDate();
  
    // Add event listener to calendar icon for additional functionality if needed
    const calendarIcon = document.getElementById("calendar-icon");
    calendarIcon.addEventListener("click", function() {
      // Additional functionality (e.g., open date picker)
      console.log("Calendar icon clicked");
    });
  });
