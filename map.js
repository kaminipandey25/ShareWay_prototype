<script>
    let urgentClickCount = 0; // Track the number of clicks
    let clickTimeout; // To reset the counter after a delay

    // Function to handle the urgent button clicks
    function handleUrgentClick() {
        urgentClickCount++;

        // Reset the click count after 5 seconds of inactivity
        if (clickTimeout) {
            clearTimeout(clickTimeout);
        }

        clickTimeout = setTimeout(() => {
            urgentClickCount = 0;
        }, 5000);

        // If button is clicked three times, show alert message
        if (urgentClickCount === 3) {
            // This is where the location sending functionality would go.
            // For now, we simulate with an alert.
            alert('Your current location has been sent to your contacts.');
            urgentClickCount = 0; // Reset the count after showing the message
        }
    }

    // Attach the event listener to the urgent button
    document.querySelector('.urgent-btn').addEventListener('click', handleUrgentClick);
</script>
