var arrGrilleDeFacturation_planTrait=[];

$(document).ready(function(){
$(document.body).on("keypress","#factureTable_planTrait tr td[data-target='codeRole']", function(e) {

          if(e.which == 13) {
                newRecordFact_planTrait();
                

                $(this).closest('tr').next().find('td[data-target=Date]').focus();
                 e.preventDefault();
// trigger an artificial keydown event with keyCode 64
          
            }

            return e.which!=13;
              });
});

function newRecordFact_planTrait(){

    var tblBody=$('#factureTable_planTrait');
    fact_tbl_row_id_planTrait=fact_tbl_row_id_planTrait+1;
    tblRow=$('<tr>').attr('id',fact_tbl_row_id_planTrait);

    var fields=['id','Date','Dent','Surface','Code','Description','Frais','Honoraires','Total','Prod','codeRole'];
    for(i=0;i<=10;i++)
      {

        switch(fields[i]){
          case 'Date':

            tblData=$('<td>').attr('contenteditable','true').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);

          break;

          case 'Dent':

            tblData=$('<td>').attr('contenteditable','true').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);

          break;

          case 'Surface':


            tblData=$('<td>').attr('contenteditable','true').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);


          break;

          case 'Code':


            tblData=$('<td>').attr('contenteditable','true').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);


          break;

          case 'Description':

            tblData=$('<td>').attr('contenteditable','true').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);

          break;

          case 'Frais':


            tblData=$('<td>').attr('contenteditable','true').attr('class','mont').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);
             tblData=$('<td>').attr('class','dol').text('$');
             tblData.appendTo(tblRow);

          break;

          case 'Honoraires':

            tblData=$('<td>').attr('contenteditable','true').attr('class','mont').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);
              tblData=$('<td>').attr('class','dol').text('$');
             tblData.appendTo(tblRow);

           break;

          case 'Total':

              tblData=$('<td>').attr('contenteditable','true').attr('class','mont').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);
              tblData=$('<td>').attr('class','dol').text('$');
             tblData.appendTo(tblRow);

          break;

          case 'Prod':

             tblData=$('<td>').attr('contenteditable','true').attr('data-target',fields[i]);
             tblData.appendTo(tblRow);

          break;

          case 'codeRole':


              tblData=$('<td>').attr('contenteditable','true').attr('data-target',fields[i])
     //          .bind('keypress', function (e)
     //          {
     //              if (e.which == 13) {
                 
     //              newRecordFact_planTrait();


     //              var e = jQuery.Event("keyup");
					// e.which = 9; // # Some key code value
					// e.keyCode = 9
					// $("input").delay(800).trigger(e);
     //            };
     //            return e.which!=13;

     //          })
             tblData.appendTo(tblRow);

          break;

        }


    }
           

        tblData=$('<td>').append('<div class="ui axxium tiny button" onclick="deleteRow(this);" >Supprimer</div>');
       tblData.appendTo(tblRow);

        tblRow.appendTo(tblBody);

}

function getAllTrData_planTrait(){

  
  arrGrilleDeFacturation_planTrait=[];

  var mytrs=$('#factTableBody_planTrait tr');
// console.log(mytrs);
  $.each(mytrs, function(idx,val){

    var myObjects={};
    // For each TR
    var mytds=$(val).children();

    var key='row_id';
    var value=$(val).attr('id');
    myObjects[key]=value;

    $.each(mytds,function(idx,val){

      var key=$(val).attr('data-target');
      var value=$(val).text();

      myObjects[key]=value;

      })

      arrGrilleDeFacturation_planTrait.push(myObjects);
});

   

    console.log(arrGrilleDeFacturation_planTrait);
    

}

$(document).ready(function(){
newRecordFact_planTrait();
});

function emptyTable_planTrait(){
  //Empty Existing Table and Initialize all parameters of Table

  fact_tbl_row_id_planTrait=0;
  arrGrilleDeFacturation_planTrait=[];
  
  
  //IMP! call Dent_type Modal again for selection in Main FactTabl
  
  $("#factTableBody_planTrait tr").remove();

  
      newRecordFact_planTrait();
}