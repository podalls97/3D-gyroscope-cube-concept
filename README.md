# 3D Cube with Gyroscope Animation

This project demonstrates a 3D rotating cube that responds to device orientation (gyroscope data) without requiring explicit user permission. The cube is built with HTML, CSS, and JavaScript.

## Features

- **3D Cube Animation**: A cube rendered in 3D using CSS `transform-style: preserve-3d`.
- **Gyroscope Interaction**: The cube reacts to device orientation changes (e.g., tilting or rotating your phone).
- **No Permissions on iOS**: Designed to bypass permission requirements for device orientation on iOS, though gyroscope functionality may not work on iOS 13+.

---

## Technologies Used

- **HTML**: Structure of the cube.
- **CSS**: Styles and 3D transformations.
- **JavaScript**: Gyroscope interaction and event handling.

---

## Setup

### Prerequisites

- A modern browser that supports the `DeviceOrientationEvent`.
- For iOS users:
  - Ensure **Motion & Orientation Access** is enabled in **Settings > Safari > Privacy & Security**.

### Steps to Run

1. Clone or download this repository.
2. Open `index.html` in a browser.
3. On your mobile device:
   - Rotate or tilt your device to see the cube animate in real time.

---

## Folder Structure

```plaintext
.
├── index.html       # Main HTML file
├── styles.css       # CSS styles for the 3D cube
├── script.js        # JavaScript for gyroscope interaction
├── LICENSE          # License for the project
├── README.md        # This file
