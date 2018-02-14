var arrGrilleDeFacturation_planTrait=[];



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
              .bind('keypress', function (e)
              {
                  if (e.which == 13) {
                  newRecordFact_planTrait();
                 

                };
                return e.which!=13;

              })
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