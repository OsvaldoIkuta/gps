$(function () { 
    $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
  });  
  
  $( window ).scroll(function() {   
    // if($( window ).scrollTop() > 10){   scroll down abit and get the action   
    $(".progress-bar").each(function(){
      each_bar_width = $(this).attr('aria-valuenow');
      $(this).width(each_bar_width + '%');
    });
         
   //  }  
  });


  $('[name = "edit"]').click(
    function() {
         var recordno = $(this).attr("data-record");
        var data = getDataFromTable(recordno);
        populateModalForm(data);
        $("#basic-modal-content").modal();

    }
   );


function getDataFromTable(recordno)
{
    var data = {}
    $("[data-row="+recordno+"] td").each(function()
    {
        data[$(this).attr("name")] = $(this).html();
    });

    return data;
}

function populateFormData(data)
{
    //select all input elements having name attribute 
    $("#basic-modal-content [name]").each(function()
    {
         $(this).val(data[$(this).name()]);
    })
}