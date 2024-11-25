// Select the cube element
const cube = document.querySelector('.cube');

// Handle gyroscope data and apply rotation to the cube
function handleOrientation(event) {
  const { beta, gamma } = event;

  // Limit beta (x-axis rotation) and gamma (y-axis rotation) for smoother animation
  const xRotation = Math.min(Math.max(beta, -90), 90);
  const yRotation = Math.min(Math.max(gamma, -90), 90);

  // Apply the rotation to the cube
  cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
}

// Check if device orientation is supported
if (window.DeviceOrientationEvent) {
  // Attach the event listener for device orientation
  window.addEventListener('deviceorientation', handleOrientation);
} else {
  // Display an error message if the feature is not supported
  alert('Device orientation is not supported on this device.');
}
