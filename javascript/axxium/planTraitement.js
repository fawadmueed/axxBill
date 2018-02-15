
//arrGrilleDeFacturation_planTrait
function PlnTrStart()
{
    PlnTrGetList();
}

function PlnTrGetList()
{
    var isListEmpty = false;
    if (!isListEmpty)
        modPlanTraitTable();
}

function PlnTrListPopulateTable()
{
    //display list popup
}

function PlnTrPopulateDetails()
{

}

function PlnTrSavePlan()
{
    getAllTrData_planTrait();
    var cdaNetRequest = '';
    var plnTrInfo = arrGrilleDeFacturation_planTrait;
    var randomNum = CdaCommCreateRandomNumber(1, 999);
    var inputXMl = {
        "request": cdaNetRequest, //request to send
        "inputs": plnTrInfo // JSON data
    };

    $.post("allScriptsv1.py", { tx: "SendPlanTraitement", clinicId: globClinicId, patientId: globPatientId, nodossier: globNoDossier, lun: randomNum, json: JSON.stringify(inputXMl), sendReq: false },
        function (result) {
            var xml = result.message;
            $("#message").append(xml);
        });
}

function PlnTrSendPlan()
{
    getAllTrData_planTrait();
}

function PlnTrCreateNew() {
    $('.PlanTrait').modal('hide');
}