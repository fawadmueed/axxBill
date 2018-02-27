function SendEmail() {
    var pdfStr = printRAMQ('email');
    //var patientEmail = globVisionRData.Email;

    //TODO: For test only!!!
    //var patientEmail = 'akryukov@semiosis.com';
    var patientEmail = 'alexey.v.kryukov@gmail.com';

    if (patientEmail) {
        $.post("allScriptsv1.py", { tx: "sendPdf2", input: pdfStr, email: patientEmail, clinicId: globClinicId },
            function (result) {
                if (result.outcome === 'success') {
                    displayRamqAnswer("Email", 'Les données ont été envoyées avec succès');
                }
                else if (result.outcome === 'error')
                {
                    alert(result.message);
                }

                SendEmailDeletePdfFiles();
            });
    }
    else {
        displayRamqAnswer("Email", 'Le patient n\'a pas d\'adresse e-mail');
    }
}

function SendEmailDeletePdfFiles() {
    $.post("allScriptsv1.py", { tx: "deletePdf" },
            function (result) {
                if (result.outcome === 'error') {
                    alert(result.message);
                }
            });
}

$(window).bind('beforeunload', function (e) {
    return true;
});