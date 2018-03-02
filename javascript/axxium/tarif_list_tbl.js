

$(document).ready(function(){
	

 
	$('.tarif_list_table').on('click','tr',function()
	{
		var tarif_row_data=tarifTbl_datTbl.row(this).data() ;
		
		console.log(tarif_row_data.value.regiecode);
		$('#factTableBody tr[id='+globVarSurfValidation_this_row_id+']').children("td[data-target='Code']").text(tarif_row_data.value.regiecode);
		$("#factTableBody td[data-target='Code'],#factTableBody_regie td[data-target='Code").trigger("focusout");	

		$('.fact_tarif_list.modal').modal('hide');
	})

	$('.dataTables_filter input').off().on('keyup', function() {
    $('#myTable').DataTable().search(this.value.trim(), true, false).draw();
 });   

	$('.searchTarif').click(function(){
		var srch='\\b'+$(this).val();
		console.log(srch);
		tarifTbl_datTbl.column(0).search(srch,true,false).draw();
		
	})
})

function fact_tarif_list(x)
	{

		var this_row_id=$(x).parent('tr').attr('id');
		globVarSurfValidation_this_row_id=this_row_id;

		$.fn.dataTable.ext.errMode = 'none';
		$.fn.dataTable.render.number( '.', ',', 2, '' );
		// Getting data for the Modal, Mapping it from JSON to ARRAY
		var arr = $.map(dataJson_Code, function(val,key) { return {code:key,value:val} });
		//Popup Modal
		popTarifTbl(arr);
			$('.fact_tarif_list.modal').modal('show');

	}


	function popTarifTbl(arr){
		
		var descrLn;

		if(globLang=='en')
		{
			descrLn='descra';
		}
		else
		{
			descrLn='descrf';
		}

tarifTbl_datTbl=$('.tarif_list_table').DataTable({
		
		
		"data":arr,
		
        "columns": [    // Assign KEY Values to COLUMNS
    { "data": "code" },
    { "data": "value.regiecode" },
    { "data": "value."+descrLn },
    { "data": "value.prixs",
    	render: $.fn.dataTable.render.number( ',', '.', 2, '$' ) 
    	 },
    { "data": "value.prixr",
    	render: $.fn.dataTable.render.number( ',', '.', 2, '$' ) 	
    },
    { "data": "value.prixa" ,
	render: $.fn.dataTable.render.number( ',', '.', 2, '$' ) 
	},
    { "data": "value.frais_lab", 
	render: $.fn.dataTable.render.number( ',', '.', 2, '$' ) 
	},
    { "data": "value.frais_lab" ,
	render: $.fn.dataTable.render.number( ',', '.', 2, '$' ) 
	},
    { "data": "value.lab" },
    { "data": "value.producer" },

    ],
    // dom: 'lrtip'

})

// $('.dataTables_filter input').bind('keyup', function() {
//    var searchTerm = this.value.toLowerCase()
//    if (!searchTerm) {
//       tarifTbl_datTbl.draw()
//       return
//    }
//    $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
//       for (var i=0;i<data.length;i++) {
//          if (data[i].toLowerCase() == searchTerm) return true
//       }	
//       return false
//    })
//    tarifTbl_datTbl.draw();   
//    $.fn.dataTable.ext.search.pop()
// })
$('.dataTables_filter input').on('keyup',function()
	{
		var valHere=this.value;

		// if(isNaN(valHere))
		// {
		//  tarifTbl_datTbl
  //       .columns(2)
  //       .search('\\b'+this.value,true, false)
  //       .draw();
		// }
		// else
		// {
		 tarifTbl_datTbl
        .columns( 0 )
        .search('\\b'+this.value,true, false)
        .draw();
		// }
		if(valHere=='')
		{
			tarifTbl_datTbl.state.clear().draw();
		}
 	   // tarifTbl_datTbl.search('\\b'+this.value, true, false).draw();
 	});  

$('#search_desc').on('keyup', function () {
	var valHere=this.value;

		// if(isNaN(valHere))
		// {
   		 tarifTbl_datTbl
        .columns( 2 )
        .search('\\b'+this.value,true, true)
        .draw();
  //   	}
  //   	else if(!((isNaN(valHere))))
  //   	{
  //   	tarifTbl_datTbl
  //       .columns( 0 )
  //       .search('\\b'+this.value,true, true)
  //       .draw();
  //   	}
  //   	if(valHere=='')
		// {
		// 	tarifTbl_datTbl.clear();
		// 	tarifTbl_datTbl.draw();
		// }


} );

}




