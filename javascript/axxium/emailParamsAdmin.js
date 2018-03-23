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

function emailParamsAdminUpdate() {
    //get values from ui
    var pEmailBody = $('#txtEmailBody').val();
    var pEmailPort = $('#txtEmailPort').val();
    var pEmailHost = $('#txtEmailHost').val();
    var pEmailSubject = $('#txtEmailSubject').val();
    var pEmailFrom = $('#txtEmailFrom').val();
    var pEmailUser = $('#txtEmailUser').val();
    var pEmailPassword = $('#txtEmailPassword').val();

    $.post("allScriptsv1.py", { tx: "updateEmailParams", clinicId: globClinicId, emailBody: pEmailBody, emailPort: pEmailPort, emailHost: pEmailHost, emailSubject: pEmailSubject, emailFrom: pEmailFrom, emailUser: pEmailUser, emailPassword: pEmailPassword},
                    function (result) {
                        if (result.outcome === 'error')//Display python Error
                        {
                            alert(result.message);
                        }
                        else if (result.outcome === 'success') {
                            alert("Email parameters were updated successfully");
                        }

                    })
            .fail(function (e) {
                alert("Admin emailParamsAdminUpdate Error." + e.responseText);
            });
}
