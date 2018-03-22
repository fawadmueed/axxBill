function emailParamsAdminGet() {

    $.post("allScriptsv1.py", { tx: "getEmailParams", clinicId: globClinicId },
                    function (result) {
                        if (result.outcome === 'error')//Display python Error
                        {
                            alert(result.message);
                        }
                        else if (result.outcome === 'success') {
                            emailParamsAdminPopulateControls(result.message);
                        }
                        
                    })
            .fail(function (e) {
                alert("Admin emailParamsGet Error." + e.responseText);
            });

}

function emailParamsAdminPopulateControls(pObjEmailParams) {
    //$('#').val(pObjEmailParams.);
    $('#txtEmailBody').val(pObjEmailParams.emailBody);
    $('#txtEmailPort').val(pObjEmailParams.emailPort);
    $('#txtEmailHost').val(pObjEmailParams.emailHost);
    $('#txtEmailSubject').val(pObjEmailParams.emailSubject);
    $('#txtEmailFrom').val(pObjEmailParams.emailFrom);
    $('#txtEmailUser').val(pObjEmailParams.emailUser);
    $('#txtEmailPassword').val(pObjEmailParams.emailPassword);
}