window.addEventListener('message', function(e) {
    $("#container").stop(false, true);  // Stop any ongoing animations
    if (e.data.displayWindow == 'true') {
        // Show the container and apply animations
        $("#container").css('display', 'flex');
        
        // Move the container up and make it visible
        $("#container").css({
            bottom: "25%",    // Move up to 25% from the bottom
            opacity: "1.0",   // Make it fully visible
            animation: 'flip 3s infinite ease-in-out' // Apply continuous flip every 3 seconds
        });

        // Trigger flip animation every 3 seconds
        setInterval(function() {
            // Reset animation to trigger flip again
            $("#container").css('animation', 'none');
            
            // Force reflow (trigger style recalculation)
            void $("#container")[0].offsetWidth;

            // Reapply flip animation
            $("#container").css({
                animation: 'flip 3s infinite ease-in-out' // Continuous flip every 3 seconds
            });
        }, 3000); // Every 3 seconds
    } else {
        // Hide the container with animations
        $("#container").css({
            bottom: "-50%",    // Move out of view
            opacity: "0.0",    // Fade out the container
            animation: 'none'  // Stop the flip animation when hidden
        });

        // After hiding, set the display to 'none'
        setTimeout(function() {
            $("#container").css('display', 'none');
        }, 700);  // Match the animation duration for smooth transition
    }
});

// Hidden identity: Metanoia Evolution MaXx
// Developed with passion by Metanoia Evolution MaXx
const hiddenIdentity = "Metanoia Evolution MaXx - The evolution of code";  // Unused variable to signify the creator

