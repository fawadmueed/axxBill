$(document).ready(function(){
    $(document.body).on("keypress", "#tblPaymentFractBody tr td[data-target='producteur']", function (e) {

        if (e.which == 13) {
            CashFractAddRow();
            var totalAmount = CashFractCalcTotal();
            $('#lblPaymentFractAmount').html(totalAmount.toFixed(2));
        }
        return e.which != 13;
    });
})


function CashUpdatePostDateData()
{
    $('.modalCashPostDate').modal('hide');
    modPayment();//Open Payment form
}

function CashCreateDataForPostDateTable()
{
    var arrData = [];
    var montant = parseFloat($('#pst_dat_mnt').val());
    var date = parseDate($('#pst_dat').val());
    var nb = parseInt($('#pst_nb').val());
    var type = $('#pst_type').val();

    montant = (isNaN(montant))? 0:montant;
    date = (isNaN(date)) ? new Date().toISOString().slice(0, 10) : date;
    nb = (isNaN(nb))?1:nb;

    for (var i = 0; i < nb; i++)
    {
        var objData = {};
        objData.No = i + 1;
        objData.Date = CashAddMonthToDate(date, i+1);
        //date = objData.Date;
        objData.Montant = (montant/nb).toFixed(2);
        objData.Type = type;
        arrData.push(objData);
    }

    CashPopulatePostDateTable(arrData);
}

function CashPopulatePostDateTable(pArrDataForTable)
{
    $('#tblCashPostDate tbody').empty();
    var tableContent = "";
    for (var i = 0; i < pArrDataForTable.length; i++) {
        tableContent += "<tr>";
        tableContent += "<td>" + pArrDataForTable[i].No + "</td>"; 
        tableContent += "<td>" + pArrDataForTable[i].Date + "</td>";
        tableContent += "<td>" + pArrDataForTable[i].Montant + "</td>";
        tableContent += "<td>" + pArrDataForTable[i].Type + "</td>";
        tableContent += "</tr>";
    }

    $('#tblCashPostDate tbody').append(tableContent);
    $('.modalCashPostDate').modal('show');
}

function CashAddMonthToDate(pDate, pMonthN)
{
    var d = parseDate(pDate.toISOString().slice(0, 10));
    return addMonth(d,pMonthN).toISOString().slice(0, 10);
}

function CashFractAddRow() {
    var lastAmount =  $('#tblPaymentFract tr:last td:first').html();
    var lastProduct = $('#tblPaymentFract tr:last td:last').html();

    lastAmount = parseFloat(lastAmount);
    if (!isNaN(lastAmount) && lastProduct)
    {
        var tableRow = '<tr><td contenteditable="true" data-target="montant"></td><td contenteditable="true" data-target="producteur"></td></tr>';
        $('#tblPaymentFract tbody').append(tableRow);
    }
}

function CashFractCalcTotal()
{
    var table = document.getElementById('tblPaymentFract');
    var total = 0;
    var rowLength = table.rows.length;

    for (var i = 1; i < rowLength; i++) {
        var row = table.rows[i];
        var cell = row.cells[0];
        var amount = parseFloat(cell.innerHTML);

        if (!isNaN(amount))
        {
            total += amount;
        }
    }
    return total;
}

function CashSaveBill()
{
    var jsondata = CashGetCashData();
    var inputXMl = {
        "ins" : jsondata,
        "amq" : null,
        "cas" : null
    };
    $.post("allScriptsv1.py", {tx: "updateFacture", clinicId: globClinicId, patientId: globPatientId, nodossier: globNoDossier , nofact: globBillNumber, json: JSON.stringify(inputXMl)}, 
        function(result){
                            
            if (result.outcome == 'error')
                alert(result.message);
            else
                alert("Good");
        });
}

function CashGetCashData()
{
    //      $('#').val();
    var creditCardType = 0;
    if ($('#visa_crdt_rad').is(':checked')) creditCardType = 1;
    else if ($('#amex_crdt').is(':checked')) creditCardType = 2;
    else if ($('#mstr_crdt').is(':checked')) creditCardType = 3;

    var obj = {};
    obj.comptant_agrent = $('#argnt_pamnt').val();
    obj.comptant_debit = $('#debit_pamnt').val();
    obj.credit_type = creditCardType;
    obj.credit_montant = $('#visa_crdt_inpt').val();
    obj.postDate_No = $('#pst_dat_no').val();
    obj.postDate_montant = $('#pst_dat_mnt').val();
    obj.postDate_date = $('#pst_dat').val();
    obj.postDate_nb = $('#pst_nb').val();
    obj.postDate_type = $('#pst_type').val();
    obj.postDate_list = CashGetPostDatesArr();
    obj.fractPayment = $('#visa_crdt_rad').is(':checked');
    obj.fract_list = CashFractArr();
    obj.total_fact = $('#total_pamnt').val();
    obj.lab = $('#lab_prcnt').val();
    obj.listLigneFact = RamqGetCasDataFromGrille();
    return obj;
}

function CashGetPostDatesArr()
{
    var arr =  [];
    var table = document.getElementById('tblCashPostDate');
    var rows = table.rows;
    for (var i = 1, row; row = table.rows[i]; i++)
    {
        var obj = {};
        obj.no = row.cells[0].textContent;
        obj.date = row.cells[1].textContent;
        obj.montant = row.cells[2].textContent;
        arr.push(obj);
    }
    return arr;
}

function CashFractArr()
{
    var arr = [];
    var table = document.getElementById('tblPaymentFract');
    var rows = table.rows;
    for (var i = 1, row; row = table.rows[i]; i++) {
        var obj = {};
        obj.montant = row.cells[0].textContent;
        obj.prod = row.cells[1].textContent;
        arr.push(obj);
    }
    return arr;
}

function CashDisplayFractPayment() {
    if ($('#fract_pmnt_check').is(':checked')) {
        $("#facture_select_check").show();
    }
    else {
        $("#facture_select_check").hide();
    }
}

function CashCalculateCashTotal() {
    //TODO:
}

function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}

function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

function addMonth(pDate, pMonthN) {
    var n = pDate.getDate();
    pDate.setDate(1);
    pDate.setMonth(pDate.getMonth() + pMonthN);
    pDate.setDate(Math.min(n, getDaysInMonth(pDate.getFullYear(),pDate.getMonth())));
    return pDate;
};

// parse a date in yyyy-mm-dd format
function parseDate(input) {
    if(isNaN(Date.parse(input)))
    {
        return NaN;
    }
    else{
        var parts = input.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]); // Note: months are 0-based
    }
}


