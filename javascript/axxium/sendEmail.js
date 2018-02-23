function SendEmail() {

    var pdfStr = printRAMQ('email');
    var objInput = { "pdfBase64": pdfStr };
    var patientEmail = 'akryukov@semiosis.com';//TODO: get email from glob variable.
    $.post("allScriptsv1.py", { tx: "sendPdf", input: JSON.stringify(objInput), email: patientEmail },
            function (result) {
                if (result.outcome === 'success')
                {
                    displayRamqAnswer("Email", 'Les données ont été envoyées avec succès');
                }
            });
}
