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

// iOS-specific permission handling
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  document.body.addEventListener('click', async () => {
    try {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission === 'granted') {
        window.addEventListener('deviceorientation', handleOrientation);
      } else {
        alert('Permission not granted for Device Orientation.');
      }
    } catch (error) {
      console.error('Error requesting Device Orientation permission:', error);
    }
  });
} else if (window.DeviceOrientationEvent) {
  // Non-iOS devices
  window.addEventListener('deviceorientation', handleOrientation);
} else {
  alert('Device orientation is not supported on this device.');
}