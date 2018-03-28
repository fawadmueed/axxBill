
function ramqValidation()
{
    var res = false;
    var errMsg = '';
    $('#txtPaimentRamqErrorMsg').html('');

    errMsg += ramqValidProfessionel();
    errMsg += ramqValidLieuDispensation();

    if (errMsg !== '') {
        $('#txtPaimentRamqErrorMsg').html(errMsg);
    }
    else {
        res = true;
    }

    return res;
}

function ramqValidLieuDispensation() {
    var errMsg = '';

    // Lieu non codifie
    // Rules: if Lieu non codifie, then mandatory fields: Type de lieu and (Code postal OR code localite)
    if ($('#lieu_codifie_non').is(':checked'))
    {
        if ($('#cod_postal_facture').val() === '' && $('#cod_local_facture').val() === '')
        {
            errMsg += '<br/>Le code postal ou le code localité est manquant!';
        }
    }
    else if ($('#lieu_codifie').is(':checked'))
    {
        // Lieu non codifie
        // Rules: if Lieu codifie, then mandatory fields: Numéro du lieu
        if ($('#num_lieu_genr_fact').val() === '') {
            errMsg += '<br/>Le Numéro du lieu est manquant!';
        }
    }

    return errMsg;
}

//Rules: if compte personnel is selected, mandatory field: No du professionnel;
// if compate administratif is selected, mandatory field: 'No du professionnel' and 'Numero de compte administratif';
function ramqValidProfessionel()
{
    var errMsg = '';
    if ($('#pamnt_no_prof').val() === '') {
        errMsg += '<br/>Le Numéro du professionnel est manquant!';
    }
    if ($('#optRegiePaimentCompteAdmin').is(':checked') && $('#txtRegiPaimentNoCompteAdmin').val() ==='')
    {
        errMsg += '<br/>Le Numero de compte administratif est manquant!';
    }

    return errMsg;
}