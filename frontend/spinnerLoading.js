
// Simulate a delay to demonstrate the spinner (remove in production)
setTimeout(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    // Set the city result
    const cityResultElement = document.getElementById('cityResult');
    cityResultElement.textContent = city ? city : 'No city selected';

    // Fade out the overlay
    const overlayElement = document.getElementById('overlay');
    overlayElement.classList.add('hidden');
}, 500);  // 0.5 second delay for demonstration purposes
