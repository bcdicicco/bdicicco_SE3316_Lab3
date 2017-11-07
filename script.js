/* global  $ */

$(document).ready(function(){
    
    //GET
    var count3309 = 0;
    var count3313 = 0;
    setInterval(function() {
    $.ajax({
    url: 'https://lab03-bdicicco.c9users.io:8080/api/message',
    type: 'GET',
    dataType: "json",
        success: function(data) {
             $.each(data, function(index, element) {
                 
                if(element.courseCode == "3309"){
                    if(count3309 == 20){
                        $('#3309Messages').find('li:first').remove();
                        count3309--;
                    }
                    var txt = $('<li></li>').text(element.text);
                    $('#3309Messages').append(txt);
                    count3309++;
                }
                
                if(element.courseCode == "3313"){
                    if(count3313 == 20){
                        $('#3313Messages').find('li:first').remove();
                        count3313--;
                    }
                    var txt = $('<li></li>').text(element.text);
                    $('#3313Messages').append(txt);
                    count3313++;
                }
            });
        }
    });
    }, 1000);
    
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