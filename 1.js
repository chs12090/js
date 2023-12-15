// $(document).ready(function() {
//     $("#btn1").click(function(){
//         if ($("body").css('background-color') === 'rgb(0, 0, 0)') {
//             $("*").css('background-color', '');
//             $("h1").html('<p style="color:black">WHITE THEME</p>'); 
//             $("b,p,h2").css('color','black'); 
//             $("#btn1").html('<div style="color:black">Dark<i class="fa fa-moon-o"></i></div>');
//         } 
//         else {
//             $("body").css('background-color','black');
//             $('#btn1').css('background-color','black');
//             $("h1").html('<p style="color:white"> BLACK THEME</p>'); 
//             $('#btn1').css('color','white');
//             $('p,b,h2').css('color','lightgreen');
//             $("#btn1").html('<div style="color:white">Light <i class="fa fa-sun-o"></i></div>');         }
//     });
// });
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
