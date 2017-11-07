/* global  $ */

$(document).ready(function(){
    

    //POST for 3309 button
        $('#button1').click(function(){
        var msg = $('#tb1').val();
        var course = "3309";
         $.ajax({
            url: 'https://lab03-bdicicco.c9users.io:8080/api/message',
            type: 'POST',
            data: {
                text: msg,
                courseCode: course
            },
            
            success: function(data) {
                alert("Message sent");
            }
            
        });
    });
    
    //POST for 3313 button 
       $('#button2').click(function(){
        var msg = $('#tb2').val();
        var course = "3313";
         $.ajax({
            url: 'https://lab03-bdicicco.c9users.io:8080/api/message',
            type: 'POST',
            data: {
                text: msg,
                courseCode: course
            },
            
            success: function(data) {
                alert("Message sent");
            }
            
        });
    });
});