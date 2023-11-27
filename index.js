document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input elements and the span for displaying the hex value
    let redInput = document.getElementById("red");
    let greenInput = document.getElementById("green");
    let blueInput = document.getElementById("blue");
    let hexOutput = document.getElementById("hex");

    // Add an event listener to each input element to update the hex value when the input changes
    redInput.addEventListener("input", updateHex);
    greenInput.addEventListener("input", updateHex);
    blueInput.addEventListener("input", updateHex);

    // Initial update when the page loads
    updateHex();

    // Function to update the hex value based on the current RGB values
    function updateHex() {
        // Get the current values of R, G, and B
        let red = parseInt(redInput.value, 10);
        let green = parseInt(greenInput.value, 10);
        let blue = parseInt(blueInput.value, 10);

        // Ensure the values are within the valid range (0-255)
        red = Math.min(255, Math.max(0, red));
        green = Math.min(255, Math.max(0, green));
        blue = Math.min(255, Math.max(0, blue));

        // Convert the values to hexadecimal
        let hex = rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);

        // Update the span with the new hex value
        hexOutput.textContent = hex;
    }

    // Function to convert an individual RGB value to hexadecimal
    function rgbToHex(value) {
        let hex = value.toString(16);
        // Pad with a leading zero if needed
        return hex.length === 1 ? "0" + hex : hex;
    }
});