$(document).ready(function(){
	

 
	$('.tarif_list_table').on('click','tr',function()
	{
		var tarif_row_data=tarifTbl_datTbl.row(this).data() ;
		
		console.log(tarif_row_data.value.regiecode);
		$('#factTableBody tr[id='+globVarSurfValidation_this_row_id+']').children("td[data-target='Code']").text(tarif_row_data.value.regiecode);
		$("#factTableBody td[data-target='Code'],#factTableBody_regie td[data-target='Code").trigger("focusout");	

		$('.fact_tarif_list.modal').modal('hide');
	})

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
    { "data": "value.prixs" },
    { "data": "value.prixr" },
    { "data": "value.prixa" },
    { "data": "value.frais_lab" },
    { "data": "value.frais_lab" },
    { "data": "value.lab" },
    { "data": "value.producer" },
    ]
    

})
}


