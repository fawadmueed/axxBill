function fact_tarif_list()
	{
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

	$('.tarif_list_table').DataTable({

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


