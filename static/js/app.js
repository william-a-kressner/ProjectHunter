$(function(){
    console.log("ready!!!")
})



$(function() {
      $("#button").click( function()
           {
                $.ajax({
                url: '/signUpUser',
                data: $('form').serialize(),
                type: 'POST',
                success: function(response) {
                    console.log(response);
                },
                error: function(error) {
                    console.log(error);
                }
           });
             console.log(document.getElementById('testInput').value);
           }
      );


});



