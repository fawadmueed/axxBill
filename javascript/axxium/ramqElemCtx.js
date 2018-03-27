//returns true if modificator is 50 otherwise false.
//Modificator depends on treatment code.
function ramqElmCtxIsTreatModificator50(pCode) {
    pCode = pCode.toString();
    var treatmentMod50 = false;
    var firstChar = '';
    var firstTwoChar = '';
    var firstThreeChar = '';

    firstChar = pCode.substring(0, 1);
    firstTwoChar = pCode.substring(0,2);
    firstThreeChar = pCode.substring(0, 3);
    
    if (firstChar === '7' || firstTwoChar === '04')
    {
        if (firstThreeChar !== '711' && firstThreeChar !== '714' && (firstThreeChar !== '723' || pCode === '72320'))
        {
            treatmentMod50 = true;
        }
    }
    return treatmentMod50;
}

//returns true if modificator is 41 otherwise false.
//Modificator depends on treatment code.
function ramqElmCtxIsTreatModificator41(pCode, pAnesthesiaType, pTarifType)
{
    var flagRestauration = false;
    var flagTenons = false;
    var flagCanal = false;
    var treatmentMod41 = false;
    var isTarifHospital = false;

    var arrCanalCodes = ['31111', '32211', '32310', '33100', '33200', '33300', '33400', '33120', '33220', '33320', '33420', '33501', '33502', '33503', '33504', '33999', '39910'];
    var arrRestaurationCode = ['21101', '21102', '21103', '21104', '21105', '21105', '21211', '21212', '21213', '21214', '21215', '21221', '21222', '21223', '21224', '21225', '21231', '21232', '21901', '21903', '21904', '21905', '21911', '21912', '23101', '23102', '23103', '23104', '23105', '23111', '23112', '23113', '23114', '23115', '23118', '23211', '23212', '23213', '23904', '23214', '23215', '23221', '23222', '23223', '23224', '23225', '23301', '23302', '23311', '23312', '23313', '23314', '23315', '23411', '23412', '23413', '23414', '23415', '23901', '23902', '23903', '23904', '23905', '25100', '25200', '25300', '25500', '25521', '25601', '25602', '25603', '25604', '25121', '25122', '25123', '25221', '25222', '25223', '25521','23121', '23123', '23122', '21301', '21302', '21303', '21304', '21306', '27421', '27401', '27403', '27411', '27413', '27901', '27903', '27921', '29101'];
    var arrTenonsCode = ['21301', '21302', '21303', '21304', '21306', '27421', '27401', '27403', '27411', '27413', '27901', '27903', '27921', '29101'];

    isTarifHospital = (pTarifType === 'H') ? true : false;

    if (isTarifHospital && pAnesthesiaType === 'G')
    {
        //Check if code belongs to restauration codes.
        for (var i = 0; i < arrRestaurationCode.length; i++)
        {
            if (pCode === arrRestaurationCode[i])
            {
                flagRestauration = true;
            }
        }

        //Check if the code belongs to tenon codes
        for (var j = 0; j < arrTenonsCode.length; j++)
        {
            if (pCode === arrTenonsCode[j])
            {
                flagTenons = true;
            }
        }

        //Check if the code belongs to canal codes;
        for (var k = 0; k < arrCanalCodes.length; k++)
        {
            if (pCode === arrCanalCodes[k])
            {
                flagCanal = true;
            }
        }

        if (pCode === '21999' || pCode === '23999' || flagRestauration || flagTenons || flagCanal)
        {
            treatmentMod41 = true;
        }
    }

    return treatmentMod41;
}

// Returns an array of elem. ctx codes that should be selected in elm ctx list (on the form "More") depends on operation code.
function ramqElmCtxSelectElmCtxOnUI(pCode)
{
    var arrElmCtx = [];
    var isModificator50 = ramqElmCtxIsTreatModificator50(pCode);
    if (isModificator50)
    {
        arrElmCtx.push('38');
    }
    return arrElmCtx;
}

// Is called when Anesthes. type radio button is clicked
// Create an array of elm. ctx and calls function to select elm ctx on the list (on the form "More").
function ramqElmCtxHandleClickAnesthType(radioButton)
{
    var anesthType = radioButton.value;
    var isModificator41 = ramqElmCtxIsTreatModificator41(globSelectedLineCode, anesthType, globTarifType);
    var arrElmCtx = [];

    if (isModificator41)
    {
        arrElmCtx.push('1724');
    }
    ramqElmCtxUpdateElmCtxOnUI(arrElmCtx);
}

//Uses on form "More" for Update bill.
// Is called when Anesthes. type radio button is clicked
// Create an array of elm. ctx and calls function to select elm ctx on the list (on the form "More_Update").
function ramqElmCtxHandleClickAnesthTypeUp(radioButton) {
    //Clean ElmCtx list.
    //$('#form_dentiste #dropD_dentiste option:selected').remove();
    var anesthType = radioButton.value;
    var tarifType = (globSelectedLineTypeUpdate === 'HOP') ? 'H' : '';
    var isModificator41 = ramqElmCtxIsTreatModificator41(globSelectedLineCodeUpdate, anesthType, tarifType);
    var arrElmCtx = [];

    if (isModificator41) {
        arrElmCtx.push('1724');
    }
    ramqElmCtxUpdateElmCtxOnUIUpdate(arrElmCtx);
}

// Select given Elm. Ctx on the list in the "More" form.
function ramqElmCtxUpdateElmCtxOnUI(pArr)
{
    //Clean 1724 elem Ctx when Anasth radiio button clicked.
    $("#form_dentiste #dropD_dentiste option").each(function (i) {
        if ($(this).val() === '1724')
        {
            $(this).prop("selected", false);
        }
    });

    // Select options at the list
    $.each(pArr, function (id, elem) {
        $("#form_dentiste #dropD_dentiste option[value='" + elem + "']").prop("selected", true);
    });
}

// Select given Elm. Ctx on the list in the "More_Update" form.
function ramqElmCtxUpdateElmCtxOnUIUpdate(pArr) {
    //Clean 1724 elem Ctx when Anasth radiio button clicked.
    $("#form_dentiste_Up #dropD_dentiste option").each(function (i) {
        if ($(this).val() === '1724') {
            $(this).prop("selected", false);
        }
    });

    // Select options at the list
    $.each(pArr, function (id, elem) {
        $("#form_dentiste_Up #dropD_dentiste option[value='" + elem + "']").prop("selected", true);
    });
}
