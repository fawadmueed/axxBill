var globPlnTrHistListData = [];
var globPlnTrHistTable;
var globPlnTrHistSelectedData;

$(document).ready(function () {
    //Plan Traitements history table
    globPlnTrHistTable = $('#cdan_table_soum_modal').DataTable({
        "columns": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        //dom: 'Bfrtip',
        searching: false
    });

    $('#cdan_table_soum_modal tbody').on('click', 'tr', function () {
        globPlnTrHistTable.$('tr.active').removeClass('active');
        $(this).addClass('active');

        globPlnTrHistSelectedData = globPlnTrHistTable.row(this).data();
        //globNoDossier = globCdaTransHistSelectedData[2];
        //globBillNumber = globCdaTransHistSelectedData[11];

        //TODO:
        //CdaCommDisplayTransDetails();
    });
});
//arrGrilleDeFacturation_planTrait
function PlnTrStart()
{
    PlnTrGetPlansList();
}

function PlnTrGetHistoryTransDataFromServer()
{
    var dateFrom = '';
    var dateTo = '';

    $.post("allScriptsv1.py", { tx: "getPlanTraitements", clinicId: globClinicId, patientId: globPatientId, nodossier: globNoDossier, dFrom: dateFrom, dTo: dateTo },
                function (result) {
                    var arrTraitements = result.Traitements;
                    if (arrTraitements && arrTraitements.length > 0)
                    {
                        globPlnTrHistListData = PlnTrGetDataForTransHistTable(arrTraitements);
                        PlnTrUpdateTransHistTable();
                        //display list popup
                        modPlanTraitTable();
                    }
                });
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
            if (result.outcome == 'error')
            {
                alert(result.message);
            }
            else
            {
                displayRamqAnswer("Plan de traitement.", 'Les données ont été envoyées avec succès');
            }
        });
}

function PlnTrSendPlan()
{
    getAllTrData_planTrait();
}

function PlnTrCreateNew() {
    //$("#factTableBody_planTrait").empty();
    $('.PlanTrait').modal('hide');
}

//===================================== Historique des Planes des traitement =====================================
function PlnTrGetPlansList() {
    PlnTrClearHistoryTable();
    PlnTrGetHistoryTransDataFromServer();
}


function PlnTrClearHistoryTable() {
    $('#cdan_table_soum_body_modal').empty();
}

function PlnTrGetDataForTransHistTable(pTraitements) {
    var arrData = [];
    for (var i = 0; i < pTraitements.length; i++) {
        var objOutputData = {};
        var objResponse = {};
        var description = '';
        var strResponse = '';
        var versionNumber = '';
        var transCode = '';
        var noSeq = '';
        var objInputData = pTraitements[i];
        if (objInputData.resp)
        {
            strResponse = objInputData.resp.split(',').slice(3).toString(); // extract string after 3th comma;
        }
        

        var transactionString = (objInputData.transaction) ? objInputData.transaction : '';
        versionNumber = transactionString.substring(18, 20);
        transCode = transactionString.substring(20, 22);
        noSeq = transactionString.substring(12, 18);

        if (versionNumber == '02') {
            objResponse = CdaV2ReadResponse(strResponse);
            description = CdaV2GetTransactionName(transCode);
        }
        else if (versionNumber == '04') {
            objResponse = CdaV4ReadResponse(strResponse);
            description = CdaV4GetTransactionName(transCode);
        }
        objOutputData.Numero = '';
        objOutputData.Facturer = '';
        objOutputData.Reference = '';
        objOutputData.Confirmation = '';
        objOutputData.Date = '';
        objOutputData.Reclamation = '';
        objOutputData.Deductible = '';
        objOutputData.Remboursement = '';


        //objOutputData.NoSeq = noSeq;
        //objOutputData.Description = description;
        //objOutputData.NoDossier = (objInputData.nodossier) ? objInputData.nodossier : '';
        //objOutputData.Prenom = (objInputData.info && objInputData.info.Prenom) ? objInputData.info.Prenom : '';
        //objOutputData.Nom = (objInputData.info && objInputData.info.Nom) ? objInputData.info.Nom : '';
        //objOutputData.Assur = (objInputData.info && objInputData.info.Ass) ? objInputData.info.Ass : '';
        //objOutputData.Couver = '';
        //objOutputData.Date = (objInputData.datetransaction) ? objInputData.datetransaction : '';
        //objOutputData.NoRef = (objResponse && objResponse.g01) ? (objResponse.g01).toString().trim() : '';
        //objOutputData.Status = (objInputData.status) ? objInputData.status : '';
        //objOutputData.VersionNumber = versionNumber;
        //objOutputData.NoFacture = (objInputData.facture) ? objInputData.facture : '';
        //objOutputData.Resp = (objInputData.resp) ? objInputData.resp : '';
        //objOutputData.Transaction = (objInputData.transaction) ? objInputData.transaction : '';

        arrData.push(objOutputData);
    }
    return arrData;
}

function PlnTrUpdateTransHistTable() {
    var arrData = [];
    for (var i = 0; i < globPlnTrHistListData.length; i++) {
        var arr = [];

        arr.push(globPlnTrHistListData[i].Numero);
        arr.push(globPlnTrHistListData[i].Facturer);
        arr.push(globPlnTrHistListData[i].Reference);
        arr.push(globPlnTrHistListData[i].Confirmation);
        arr.push(globPlnTrHistListData[i].Date);
        arr.push(globPlnTrHistListData[i].Reclamation);
        arr.push(globPlnTrHistListData[i].Deductible);
        arr.push(globPlnTrHistListData[i].Remboursement);

        arrData.push(arr);
    }

    globPlnTrHistTable.clear().draw();
    globPlnTrHistTable.rows.add(arrData); // Add new data
    globPlnTrHistTable.columns.adjust().draw();
}