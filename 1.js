$(document).ready(function() {
    // Initial mode (light mode)
    var darkMode = false;

    // Function to toggle between light and dark modes
    function toggleDarkMode() {
        darkMode = !darkMode;
        var body = $('body');
        var button = $('#btn1');
        
        if (darkMode) {
            // Dark mode
            body.css('background-color', '#333');
            button.text('Light').append('<i class="fa fa-sun-o"></i>');
        } else {
            // Light mode
            body.css('background-color', 'white');
            button.text('Dark').append('<i class="fa fa-moon-o"></i>');
        }
    }

    // Click event for the button
    $('#btn1').on('click', function() {
        toggleDarkMode();
    });
});
