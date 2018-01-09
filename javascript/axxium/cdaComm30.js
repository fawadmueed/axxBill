var globCdanetTranscode = '1'; //'Claim';

function CdaCommSendToSecondIns()
{ }

function CdaCommOpenCASPopup()
{ }

function CdaCommSendToCAS()
{ }

function CdaCommShowResp(pResp)
{
    var objRespMessage = {};

    
    var lastName = (globVisionRData && globVisionRData.NomPers) ? globVisionRData.NomPers : '';
    var firstName = (globVisionRData && globVisionRData.PrePers) ? globVisionRData.PrePers : '';
    var insurance = (globVisionRData && globVisionRData.InsTypeList && globVisionRData.InsTypeList.length > 0) ? globVisionRData.InsTypeList[0] : '';
    var noSequence = (pResp.a02) ? pResp.a02 : '';
    var respCode = (pResp.a04) ? pResp.a04 : '';


    $('#cda_resp_transcode').val(globCdaV2TransType);
    $('#cda_resp_patient').val(lastName + ' ' + firstName);
    $('#cda_resp_assur').val(insurance);
    $('#cda_resp_no_seq').val(noSequence);
    $('#cda_resp_cod_resp').val(respCode);
    $('#cda_resp_mailbox').val();
    $('#cda_resp_demand_pamnt').val();
    $('#cda_resp_no_ref').val();
    $('#cda_resp_no_confirm').val();
    $('#cda_resp_montant_reclaim').val();
    $('#cda_resp_montant_deduct').val();
    $('#cda_resp_montant_prsntation').val();
    $('#cda_resp_montant_adjust').val();
    $('#cda_resp_mont_rembour').val();
    $('#cda_resp_date_pamnt').val();
    $('#cda_resp_date_pamnt_not').val();
    $('#cda_resp_payabl').val();
    $('#cda_resp_notes').val();
    modResponseCDANET();
}

//Convert DateFrom YYYYMMDD to yyyy-mm-dd. Return current date if conversion impossible.
function CdaCommConvertDate(pStr)
{
    var formatedDate;
    if (pStr == '00000000') {
        formatedDate = new Date().toISOString().slice(0, 10);
    }
    else {
        var year = pStr.substring(0, 4);
        var month = pStr.substring(4, 6);
        var day = pStr.substring(6, 8);
        formatedDate = year + '-' + month + '-' + day;
    }
    
    return formatedDate;
}

function CdaCommTopage850(pString) {
    var code;
    var arrString;
    if (pString) {
        arrString = pString.split('');
        for (var i = 0; i < arrString.length; i++) {
            code = arrString[i].charCodeAt(0);
            switch (arrString[i]) {
                case '�': code = 144; break;
                case '�': code = 212; break;
                case '�': code = 210; break;
                case '�': code = 183; break;
                case '�': code = 182; break;
                case '�': code = 216; break;
                case '�': code = 215; break;
                case '�': code = 226; break;
                case '�': code = 153; break;
                case '�': code = 234; break;
                case '�': code = 154; break;
                case '�': code = 128; break;
                case '�': code = 130; break;
                case '�': code = 138; break;
                case '�': code = 136; break;
                case '�': code = 133; break;
                case '�': code = 131; break;
                case '�': code = 139; break;
                case '�': code = 140; break;
                case '�': code = 147; break;
                case '�': code = 148; break;
                case '�': code = 150; break;
                case '�': code = 129; break;
                case '�': code = 135; break;
            }
            arrString[i] = String.fromCharCode(code);
        }
    }
    return arrString.join("");
}

function CdaCommFrompage850(pString) {
    var code;
    var arrString;
    if (pString) {
        arrString = pString.split('');
        for (var i = 0; i < arrString.length; i++) {
            code = arrString[i].charCodeAt(0);
            switch (code) {
                case 144: arrString[i] = '�'; break;
                case 212: arrString[i] = '�'; break;
                case 210: arrString[i] = '�'; break;
                case 211: arrString[i] = '�'; break;
                case 183: arrString[i] = '�'; break;
                case 182: arrString[i] = '�'; break;
                case 181: arrString[i] = '�'; break;
                case 142: arrString[i] = '�'; break;
                case 143: arrString[i] = '�'; break;
                case 146: arrString[i] = '�'; break;
                case 216: arrString[i] = '�'; break;
                case 215: arrString[i] = '�'; break;
                case 222: arrString[i] = '�'; break;
                case 214: arrString[i] = '�'; break;

                case 226: arrString[i] = '�'; break;
                case 153: arrString[i] = '�'; break;
                case 224: arrString[i] = '�'; break;
                case 227: arrString[i] = '�'; break;
                case 229: arrString[i] = '�'; break;

                case 235: arrString[i] = '�'; break;
                case 233: arrString[i] = '�'; break;
                case 234: arrString[i] = '�'; break;
                case 154: arrString[i] = '�'; break;

                case 128: arrString[i] = '�'; break;
                case 237: arrString[i] = '�'; break;

                case 130: arrString[i] = '�'; break;
                case 138: arrString[i] = '�'; break;
                case 136: arrString[i] = '�'; break;
                case 137: arrString[i] = '�'; break;

                case 133: arrString[i] = '�'; break;
                case 131: arrString[i] = '�'; break;
                case 160: arrString[i] = '�'; break;
                case 198: arrString[i] = '�'; break;
                case 132: arrString[i] = '�'; break;
                case 134: arrString[i] = '�'; break;
                case 145: arrString[i] = '�'; break;

                case 139: arrString[i] = '�'; break;
                case 140: arrString[i] = '�'; break;
                case 141: arrString[i] = '�'; break;
                case 161: arrString[i] = '�'; break;

                case 147: arrString[i] = '�'; break;
                case 148: arrString[i] = '�'; break;
                case 149: arrString[i] = '�'; break;
                case 228: arrString[i] = '�'; break;
                case 162: arrString[i] = '�'; break;

                case 208: arrString[i] = '�'; break;

                case 150: arrString[i] = '�'; break;
                case 129: arrString[i] = '�'; break;
                case 151: arrString[i] = '�'; break;
                case 163: arrString[i] = '�'; break;

                case 152: arrString[i] = '�'; break;
                case 236: arrString[i] = '�'; break;

                case 135: arrString[i] = '�'; break;
            }
        }
    }
    return arrString.join("");
}
