function fact_tarif_list()
	{
		$('.fact_tarif_list.modal').modal('show');
	}

$(document).ready(function(){
	console.log(dataJson_Code);
	$('.tarif_list_table').DataTable({

		"data":dataJson_Code[21225]

		// "columns":[
		// {"data":"prix"},
		// {"data":"ramq"},
		// {"data":"insurance"},
		// {"data":"special"},
		// {"data":"fr"},
		// {"data":"unites"},
		// {"data":"frais"},
		// ]

	});
})

