function convert(event) {
  event.preventDefault();

  const units = {
    C: {
      F: (temp) => (temp * 9) / 5 + 32,
      K: (temp) => temp + 273.15,
      R: (temp) => temp + 273.15,
    },
    F: {
      C: (temp) => ((temp - 32) * 5) / 9,
      K: (temp) => ((temp - 32) * 5) / 9 + 273.15,
      R: (temp) => temp + 459.67,
    },
    K: {
      C: (temp) => temp - 273.15,
      F: (temp) => ((temp - 273.15) * 9) / 5 + 32,
      R: (temp) => (temp * 9) / 5,
    },
    R: {
      C: (temp) => ((temp - 491.67) * 9) / 5,
      K: (temp) => temp - 459.67,
      F: (temp) => (temperature * 5) / 9,
    },
  };

  const fromUnit = document.getElementById('fromunit').value;
  const toUnit = document.getElementById('tounit').value;
  const temperature = parseFloat(document.getElementById('temperature').value);

  console.log(`fromUnit: ${fromUnit}`);
  console.log(`toUnit: ${toUnit}`);
  console.log(`units[fromUnit][toUnit]: ${units[fromUnit][toUnit]}`);

  if (fromUnit && toUnit && temperature) {
    const convertedValue = units[fromUnit][toUnit](temperature);
    console.log(`convertedValue: ${convertedValue}`);
    document.getElementById('result').textContent = `${convertedValue.toFixed(2)} ${toUnit}`;
  } else {
    document.getElementById('result').textContent = '00';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let is24HourFormat = true;

  const toggleFormatButton = document.getElementById('toggleFormat');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if (!is24HourFormat) {
      hours = hours % 12 || 12; // Convert to 12-hour format
    }

    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  };

  const clock = () => {
    setInterval(updateClock, 1000);
  };

  toggleFormatButton.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    toggleFormatButton.textContent = is24HourFormat ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
    updateClock(); // Update the clock immediately after switching format
  });

  clock();
  updateClock(); // Initial call to set the clock immediately on load
});

