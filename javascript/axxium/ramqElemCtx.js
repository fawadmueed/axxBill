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

$(document).ready(function () {

    console.log('52322, false ' + ramqElmCtxIsTreatModificator50(''));
    console.log('04526, true ' + ramqElmCtxIsTreatModificator50('04526'));
    console.log('71100, false ' + ramqElmCtxIsTreatModificator50('71100'));
    console.log('71433, false ' + ramqElmCtxIsTreatModificator50('71433'));
    console.log('72344, false ' + ramqElmCtxIsTreatModificator50('72344'));
    console.log('72320, true ' + ramqElmCtxIsTreatModificator50('72320'));
    console.log('72456, true ' + ramqElmCtxIsTreatModificator50('72456'));
});

//returns true if modificator is 41 otherwise false.
//Modificator depends on treatment code.
function ramqElmCtxIsTreatModificator41(pCode)
{
    var flagRestauration = false;
    var flag_tenons = false;
    var flag_canal = false;
    var treatmentMod41 = false;

    var arrCanalCodes = ['31111', '32211', '32310', '33100', '33200', '33300', '33400', '33120', '33220', '33320', '33420', '33501', '33502', '33503', '33504', '33999', '39910'];

    return treatmentMod41 = false;

    var ifTarifHospital = $('#optTarifFactHospital').is(':checked');

}

