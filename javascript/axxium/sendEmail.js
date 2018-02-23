function SendEmail() {
    //$.post("allScriptsv1.py", { tx: "sendEmail"},
    //        function (result) {
    //            alert(result.message);
    //        });

    var pdfStr = printRAMQ('email');
    $.post("allScriptsv1.py", { tx: "sendPdf", pdfString: pdfStr },
            function (result) {
                console.log(result);
            });


}

//$.post("allScriptsv1.py", { tx: "getPatientFactures", clinicId: globClinicId, patientId: globPatientId, dFrom: dateFrom, dTo: dateTo },
//            function (result) {
//                if (result.message !== undefined)
//                    alert(result.message);
//                else {
//                    if (result.factures.length > 0) {
//                        // put result to global variable for further using in report.
//                        //qFACT = result.factures;
//                        var arrDataForTable = RamqBillGetDataForTable(result.factures);
//                        RamqBillPopulateTable(arrDataForTable);
//                    }
//                }
//            });