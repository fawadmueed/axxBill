var globCdaNetAPIuri = 'http://ec2-52-38-58-195.us-west-2.compute.amazonaws.com/axxium/api/InsuranceWebApi/';
var globCdanetTranscode = '1'; //'Claim';
var globCdaDataFromDB;

function CdaCommSendToSecondIns()
{ }

function CdaCommOpenCASPopup()
{ }

function CdaCommSendToCAS()
{ }

function CdaCommShowResp(pRespMessage)
{
    var message = pRespMessage.replace(/\n/g, '<br/>');
    var div = document.getElementById('cdanet_response_div');

    div.innerHTML = '<p>' + message + '</p>'
    //while (div.firstChild) {
    //    div.removeChild(div.firstChild);
    //}

    

    //var para = document.createElement("p");
    //para.document.write(message);
    ////var node = document.createTextNode(message);
    //para.appendChild(node);

    
    //div.appendChild(para);
    modResponseCDANET();
}

//Convert DateFrom YYYYMMDD to yyyy-mm-dd. Return current date if conversion impossible.
function CdaCommConvertDate(pStr)
{
    var formatedDate;
    if (pStr == '00000000' || isNaN(pStr)) {
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

//Convert DateFrom YYYYMMDD to yyyy-mm-dd. Return '-1' if conversion impossible.
function CdaCommConvertDate(pStr) {
    var formatedDate;
    if (pStr == '00000000' || isNaN(pStr)) {
        formatedDate =-1;
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

//Returns Error message by code.
function CdaCommGetCDANETMessage(p)
{
    var temp = '';
    switch (p)
    {
        case '001': temp = '(001) Pr�fixe de transaction absent ou invalide '; break;
        case '002': temp = '(002) No. de demande ou de s�quence absent ou invalide '; break;
        case '003': temp = '(003) No. de version absent ou invalide '; break;
        case '004': temp = '(004) Code de transaction absent ou invalide '; break;
        case '005': temp = '(005) No. d\'identification de l\'assureur absent ou invalide '; break;
        case '006': temp = '(006) No du logiciel dentaire absent ou invalide'; break;
        case '007': temp = '(007) No. du dentiste attribu� par ACDQ absent ou invalide '; break;
        case '008': temp = '(008) No. de cabinet attribu� par ACDQ absent ou invalide '; break;
        case '009': temp = '(009) No. de police ou r�gime(premier assureur) absent ou invalide '; break;
        case '010': temp = '(010) No. de section ou de division absent ou invalide '; break;
        case '011': temp = '(011) No. du titulaire de l\'assurance absent ou invalide '; break;
        case '012': temp = '(012) Code de lien de parent� absent ou invalide '; break;
        case '013': temp = '(013) Sexe du patient absent ou invalide '; break;
        case '014': temp = '(014) Date de naissance du patient absente ou invalide '; break;
        case '015': temp = '(015) Nom du patient absent '; break;
        case '016': temp = '(016) Pr�nom du patient absent '; break;
        case '017': temp = '(017) Code indiquant exception quant � l\'admissibilit� absent ou invalide '; break;
        case '018': temp = '(018) Nom d\'�tablissement scolaire absent '; break;
        case '019': temp = '(019) Nom de famille du titulaire absent ou non conforme au dossier '; break;
        case '020': temp = '(020) Pr�nom de famille du titulaire absent ou non conforme au dossier '; break;
        case '021': temp = '(021) Adresse du titulaire de l\'assurance absente '; break;
        case '022': temp = '(022) Ville du titulaire de l\'assurance absente '; break;
        case '023': temp = '(023) Code postal du titulaire de l\'assurance absent ou invalide '; break;
        case '024': temp = '(024) Langue du titulaire de l\'assurance invalide '; break;
        case '025': temp = '(025) Date de naissance du titulaire de l\'assurance absente ou invalide '; break;
        case '026': temp = '(026) No. du second assureur invalide '; break;
        case '027': temp = '(027) No. de police ou r�gime(second assureur) absent ou invalide '; break;
        case '028': temp = '(028) No. de division ou section (second assureur)absent ou invalide '; break;
        case '029': temp = '(029) No. du titulaire(second assureur) absent ou invalide '; break;
        case '030': temp = '(030) Date de naissance du titulaire(second assureur) absente ou invalide '; break;
        case '031': temp = '(031) Demande doit �tre d\'abord soumise au second assureur(second assureur=premier assureur) '; break;
        case '032': temp = '(032) Destinataire du paiement absent ou invalide '; break;
        case '033': temp = '(033) Date de l\'accident invalide '; break;
        case '034': temp = '(034) Nombre d\'actes ex�cut�s absent ou invalide '; break;
        case '035': temp = '(035) Code de l\'acte absent ou invalide '; break;
        case '036': temp = '(036) Date � laquelle l\'acte a �t� execut� absente ou invalide '; break;
        case '037': temp = '(037) No. international de dent, de sextant, de quadrant ou site absent ou invalide '; break;
        case '038': temp = '(038) Surface de la dent absente ou invalide '; break;
        case '039': temp = '(039) Date de la mise en bouche initiale au maxillaire absente ou invalide '; break;
        case '040': temp = '(040) R�ponse absente ou invalide :Le traitement est-il requis en vue de soins d\'orthodonthie?'; break;
        case '041': temp = '(041) Honoraires demand�s par le dentiste absents ou invalides '; break;
        case '042': temp = '(042) Frais de laboratoire absents ou invalides '; break;
        case '043': temp = '(043) Unit� de temps absente ou invalide '; break;
        case '044': temp = '(044) Longueur du message indiqu�e non identique � la longueur du message re�u'; break;
        case '045': temp = '(045) Indicateur de courrier �lectronique absent ou invalide '; break;
        case '046': temp = '(046) No. de r�f�rence de la demande de prestations absent ou invalide '; break;
        case '047': temp = '(047) Le dentiste n\'a pas acc�s au r�seau ACDQ-CDANet'; break;
        case '048': temp = '(048) S.V.P. soummettre la demande manuellement'; break;
        case '049': temp = '(049) Pas de r�ponse en suspens provenant du r�seau '; break;
        case '050': temp = '(050) No. de ligne d\'acte absent ou imvalide '; break;
        case '051': temp = '(051) No. du plan de traitement introuvable '; break;
        case '052': temp = '(052) Demande de prestations ou plan de traitement doit contenir au moins un acte'; break;
        case '053': temp = '(053) Province du titulaire absente ou invalide'; break;
        case '054': temp = '(054) No du titulaire sur refus non conforme � la demande originale '; break;
        case '055': temp = '(055) Anulation ne concerne pas la transaction du jour'; break;
        case '056': temp = '(056) Code de sp�cialit� du dentiste non conforme au dossier '; break;
        case '057': temp = '(057) R�ponse absente ou invalide :S\'agit-il de la mise en bouche initiale? '; break;
        case '058': temp = '(058) Nombre d\'actes non conforme au nombre indqu�'; break;
        case '059': temp = '(059) Logiciel dentaire du cabinet non autoris� � transmette des transactions au r�seau ACDQ-CDANet '; break;
        case '060': temp = '(060) L\'annulation ne peut pas �tre accept�e maintenant.Veuillez r�essayer plus tard aujourd\'hui'; break;
        case '061': temp = '(061) Erreur du r�seau.Veuillez recommencer '; break;
        case '062': temp = '(062) Num�ro du dentiste b�n�ficiaire du paiement absent ou invalide '; break;
        case '063': temp = '(063) Num�ro du cabinet b�n�ficiaire du paiement absent ou invalide '; break;
        case '064': temp = '(064) Dentiste ayant r�f�r� le patient absent ou invalide '; break;
        case '065': temp = '(065) Code indiquant motif de la recommandation absent ou invalide '; break;
        case '066': temp = '(066) Indicateur d\'un r�gime de soin absent ou invalide '; break;
        case '067': temp = '(067) Champs se rapportant au r�gime NNSA absents '; break;
        case '068': temp = '(068) Num�ro de la bande absent ou invalide '; break;
        case '069': temp = '(069) Num�ro de la famille absent ou invalide '; break;
        case '070': temp = '(070) Odontogramme des dents manquantes, absent ou invalide '; break;
        case '071': temp = '(071) Code indiquant parent� patient-titulaire(second assureur)absent ou invalide '; break;
        case '072': temp = '(072) Code indiquant type d\'acte absent ou invalide '; break;
        case '073': temp = '(073) Codes de remarques absentes ou invalides '; break;
        case '074': temp = '(074) Date � laquelle l\'acte a �t� �x�cut� est une date ult�rieure '; break;
        case '075': temp = '(075) Date � laquelle l\'acte a �t� �x�cut� est au-del� d\'un an '; break;
        case '076': temp = '(076) Groupe non accept� par l\'EDI '; break;
        case '077': temp = '(077) Type d\'acte non couvert par l\'assureur '; break;
        case '078': temp = '(078) Veuillez soumettre plan de traitement manuellement '; break;
        case '079': temp = '(079) Duplicata d\'une demande de prestations '; break;
        case '080': temp = '(080) Compteur des transactions par assureur absent ou invalide '; break;
        case '081': temp = '(081) Date d\'admisibilit� invalide '; break;
        case '082': temp = '(082) Num�ro de s�quence ou version de la carte invalide '; break;
        case '083': temp = '(083) Nom de famille du titulaire(second assureur)absent ou invalide '; break;
        case '084': temp = '(084) Pr�nom du titulaire (second assureur) absent ou invalide '; break;
        case '085': temp = '(085) Lettre initiale du second pr�nom du titulaire(second assureur) absente '; break;
        case '086': temp = '(086) Premi�re ligne de l\'adresse du titulaire (second assureur) absente '; break;
        case '087': temp = '(087) Ville du titulaire (second assureur) absente '; break;
        case '088': temp = '(088) Province ou Etat du titulaire (second assureur) absent '; break;
        case '089': temp = '(089) Code postal ou zip du titulaire (second assureur) absent '; break;
        case '090': temp = '(090) R�ponse absente ou invalide: S\'agit-il de la mise en bouche initiale � la mandibule? '; break;
        case '091': temp = '(091) Date de la mise en bouche initiale � la mandibule absente ou invalide '; break;
        case '092': temp = '(092) Mat�riau de la proth�se au maxillaire absent ou invalide '; break;
        case '093': temp = '(093) Mat�riau de la proth�se � la mandibule absent ou invalide '; break;
        case '094': temp = '(094) Nombre de dents extraites absent ou invalide '; break;
        case '095': temp = '(095) Num�ro de la dent extraite absent ou invalide '; break;
        case '096': temp = '(096) Date de l\'extraction absente ou invalide '; break;
        case '097': temp = '(097) D�calage du rapprochement invalide '; break;
        case '098': temp = '(098) Code pour frais de laboratoire absent ou invalide '; break;
        case '099': temp = '(099) Code pour chiffrement invalide '; break;
        case '100': temp = '(100) Chiffrement invalide '; break;
        case '101': temp = '(101) Initiale du second pr�nom du titulaire invalide '; break;
        case '102': temp = '(102) Initiale du second pr�nom du patient invalide '; break;
        case '103': temp = '(103) Code de la personne � charge (premi�re assurance) absent ou invalide '; break;
        case '104': temp = '(104) Code de la personne � charge (seconde assurance) absente ou invalide '; break;
        case '105': temp = '(105) Num�ro de s�quence /version de la carte (seconde assurence) absente ou invalide '; break;
        case '106': temp = '(106) Langue de titulaire (seconde assurance)absente ou invalide '; break;
        case '107': temp = '(107) Indicateur de r�gime (seconde assurance) absente ou invalide '; break;
        case '108': temp = '(108) Champs portant sur la seconde assurance absents '; break;
        case '109': temp = '(109) Num�ro de s�quence (seconde assurance) absent ou invalide '; break;
        case '110': temp = '(110) Indicateur de plan de traitement d\'orthodontie absent ou invalide '; break;
        case '111': temp = '(111) Tarif du premier examen absent ou invalide '; break;
        case '112': temp = '(112) Tarif de la phase diagnostique absent ou invalide '; break;
        case '113': temp = '(113) Paiement initial absent ou invalide '; break;
        case '114': temp = '(114) Mode de paiement absent ou invalide '; break;
        case '115': temp = '(115) Dur�e du traitement absente ou invalide '; break;
        case '116': temp = '(116) Nombre pr�vu de paiements absent ou invalide'; break;
        case '117': temp = '(117) Montant pr�vu du paiement absent ou invalide '; break;
        case '118': temp = '(118) Code des frais de laboratoire # 2 absent ou invalid '; break;
        case '119': temp = '(119) Frais de laboratoire #2 absent ou invalide '; break;
        case '120': temp = '(120) D�but pr�vue de traitement '; break;
        case '121': temp = '(121) D�tail des prestations(premi�re assurance) modifi�, diff�rent de l\'original '; break;
        case '122': temp = '(122) Date plus disponible '; break;
        case '123': temp = '(123) Num�ro de page du rapprochement absent ou invalide '; break;
        case '124': temp = '(124) Type de Transaction non support�e par l\'assureur '; break;
        case '125': temp = '(125) Version de transaction non accept�e '; break;
        case '126': temp = '(126) Code diagnostic absent ou invalide '; break;
        case '127': temp = '(127) Code institutionnel absent ou invalide '; break;
        case '128': temp = '(128) Num�ro de page du plan de traitement courant absent ou invalide '; break;
        case '129': temp = '(129) Num�ro de page du dernier plan de traitement absent ou invalide '; break;
        case '130': temp = '(130) Nombre du plan du dossier gouvernemental absent ou invalide '; break;
        case '131': temp = '(131) Plan du dossier gouvernemental absent ou invalide '; break;
        case '132': temp = '(132) Nombre de dossier secondaire absent ou invalide '; break;
        case '997': temp = '(997) Derni�re transaction illisible '; break;
        case '998': temp = '(998) Pour usage futur par l\'ADC '; break;
        case '999': temp = '(999) Erreur du syst�me central, S.V.P. soumettre manuellement '; break;

        default:
            temp='(' + p + ') Erreur inconnue';
    }
    return temp;

}
