/**
 * @file jquery.translate.js
 * @brief jQuery plugin to translate text in the client side.
 * @author Manuel Fernandes
 * @site
 * @version 0.9
 * @license MIT license <http://www.opensource.org/licenses/MIT>
 *
 * translate.js is a jQuery plugin to translate text in the client side.
 *
 */

(function($) {

  $.fn.translate = function(options) {
    var that = this; //a reference to ourselves

    var settings = {
      css: "trn",
      lang: "en"
    };
    settings = $.extend(settings, options || {});
    if (settings.css.lastIndexOf(".", 0) !== 0) //doesn't start with '.'
      settings.css = "." + settings.css;

    var t = settings.t;

    //public methods
    this.lang = function(l) {
      if (l) {
        settings.lang = l;
        this.translate(settings); //translate everything
      }

      return settings.lang;
    };


    this.get = function(index) {
      var res = index;

      try {
        res = t[index][settings.lang];
      } catch (err) {
        //not found, return index
        return index;
      }

      if (res)
        return res;
      else
        return index;
    };

    this.g = this.get;

    //main
    this.find(settings.css).each(function(i) {
      var $this = $(this);

      var trn_key = $this.attr("data-trn-key");
      if (!trn_key) {
        trn_key = $this.html();
        $this.attr("data-trn-key", trn_key); //store key for next time
      }

      $this.html(that.get(trn_key));
    });

    return this;
  };
})(jQuery);


var dict = {
  "#AMQ": {
    en: "#AMQ",
    fr: "#AMQ"
  },
  "#Facture": {
    en: "Bill # ",
    fr: "# Facture"
  },
  "#RAMQ": {
    en: "#RAMQ",
    fr: "#RAMQ"
  },
  "#État de compte": {
    en: "Statement of account ",
    fr: "État de compte"
  },
  "&gt;90 jrs": {
    en: "&gt;90 days",
    fr: "&gt;90 jrs"
  },
  "&lt;31 jrs": {
    en: "&lt;31 days",
    fr: "&lt;31 jrs"
  },
  "+": {
    en: "+",
    fr: "+"
  },
  ",fractioner les paiements": {
    en: "Split the payment ",
    fr: ",fractionner le paiement"
  },
  ",fractionner Paiement": {
    en: "Split Payment ",
    fr: ",fractionner le paiement"
  },
  ",frais Lab.": {
    en: "Lab Fees ",
    fr: ",frais Lab."
  },
  ",french": {
    en: ",français",
    fr: ",français"
  },
  ",fréq": {
    en: ",freq",
    fr: ",fréq"
  },
  ",fréquence": {
    en: ",frequency ",
    fr: ",fréquency"
  },
  "31-60 jrs": {
    en: "31-60 days",
    fr: "31-60 jrs"
  },
  "60-90 jrs": {
    en: "60-90 days",
    fr: "60-90 jrs"
  },
  ABC: {
    en: " ",
    fr: " "
  },
  ACE: {
    en: "Ace",
    fr: "Ace"
  },
  AMEX: {
    en: "AMEX ",
    fr: "AMEX"
  },
  AMQ: {
    en: "AMQ",
    fr: "AMQ"
  },
  ANESTH: {
    en: "ANESTH",
    fr: "ANESTH"
  },
  ARGENT: {
    en: "CASH",
    fr: "ARGENT"
  },
  ASS: {
    en: "INS",
    fr: "ASS"
  },
  Accepter: {
    en: "Accept",
    fr: "Accepter"
  },
  "Accepter le numéro de dossier suggéré": {
    en: "Accept the suggested file number ",
    fr: "Accepter le numéro de dossier suggéré"
  },
  "Acte posé plus souvent que convenu à l entente": {
    en: "Act laid down more often than agreed in the agreement",
    fr: "Acte posé plus souvent que convenu à l'entente"
  },
  "Action rappel 1": {
    en: "Action",
    fr: "Action"
  },
  "Action rappel 2": {
    en: "Action",
    fr: "Action"
  },
  Admin: {
    en: "Admin",
    fr: "Admin"
  },
  Adresse: {
    en: "Address ",
    fr: "Adresse"
  },
  Age: {
    en: "Age",
    fr: "Âge"
  },
  Agenda: {
    en: "Organizer",
    fr: "Agenda"
  },
  Ajouter: {
    en: "Add",
    fr: "Ajouter"
  },
  "Ajouter / modifier un médicament": {
    en: "Add / edit a medication",
    fr: "Ajouter / modifier un médicament"
  },
  "Ajouter / modifier un suivi de laboratoire": {
    en: "Add / edit a lab track ",
    fr: "Ajouter / modifier un suivi de laboratoire"
  },
  "Ajouter / modifier un suivi médical": {
    en: "Add / edit a medical follow-up",
    fr: "Ajouter / modifier un suivi médical"
  },
  "Ajouter / modifier une alerte médicale": {
    en: "Add / edit a medical alert",
    fr: "Ajouter / modifier une alerte médicale"
  },
  "Ajouter un document": {
    en: "Add a document",
    fr: "Ajouter un document"
  },
  "Ajouter un laboratoire": {
    en: "Add Laboratory",
    fr: "Ajouter un laboratoire"
  },
  "Ajouter un médicament": {
    en: "Add Drug",
    fr: "Ajouter un médicament"
  },
  "Ajouter un ou des traitements": {
    en: "Add one or more Treatment",
    fr: "Ajouter un ou des traitements"
  },
  "Ajouter un versement": {
    en: "Add Payment ",
    fr: "Ajouter un versement"
  },
  Alerte: {
    en: "Alert",
    fr: "Alerte"
  },
  "Alerte médicale": {
    en: "Medical alert",
    fr: "Alerte médicale"
  },
  Alertes: {
    en: "Alert",
    fr: "Alerte"
  },
  "Alertes Financieres": {
    en: "Financial Alert",
    fr: "Alerte financière"
  },
  "Alertes Rendez-vous": {
    en: "Appointment Alert",
    fr: "Alerte Rendez-vous"
  },
  "Alertes medicales": {
    en: "Medical Alert",
    fr: "Alerte médicale"
  },
  Amalgame: {
    en: "Amalgam",
    fr: "Amalgame"
  },
  "Ancienne facture": {
    en: "Old invoice",
    fr: "Ancienne facture"
  },
  "Anesthésie générale": {
    en: "General Anesthesia",
    fr: "Anesthésie générale"
  },
  "Anesthésie locale": {
    en: "Local anesthesia",
    fr: "Anesthésie locale"
  },
  Annule: {
    en: "Cancel",
    fr: "Annulé"
  },
  Annuler: {
    en: "Cancel",
    fr: "Annuler"
  },
  "Annuler fact. à la Régie": {
    en: "Cancer Bill at Régie",
    fr: "Annuler fact. à la Régie"
  },
  "Année": {
    en: "Year ",
    fr: "Année"
  },
  "Appel place par": {
    en: "Call placed by",
    fr: "Appel placé par"
  },
  "Appel place par:": {
    en: "Call placed by",
    fr: "Appel placé par"
  },
  "Appliquer un paiement": {
    en: "Apply a payment",
    fr: "Appliquer un paiement"
  },
  Assurance: {
    en: "Insurance",
    fr: "Assurance"
  },
  "Assuré principal": {
    en: "Principal Insured",
    fr: "Assuré Principal"
  },
  "Assuré secondaire": {
    en: "Secondary insured ",
    fr: "Assuré secondaire"
  },
  "At another person": {
    en: "At another person",
    fr: "à une autre personne"
  },
  "At the dentist": {
    en: "At the dentist ",
    fr: "Au dentiste"
  },
  "At the insured": {
    en: "At the insured",
    fr: "à l'assuré"
  },
  "Attribution d'un numéro de dossier": {
    en: "Assigning a File Number",
    fr: "Attribution d'un numéro de dossier"
  },
  Aucune: {
    en: "None ",
    fr: "Aucune"
  },
  Autre: {
    en: "Other ",
    fr: "Autre"
  },
  Autres: {
    en: "Others",
    fr: "Autres"
  },
  "Autres Solde": {
    en: "Other Balance ",
    fr: "Autre solde"
  },
  B: {
    en: "B",
    fr: "B"
  },
  Bureau: {
    en: "Office",
    fr: "Bureau"
  },
  CAS: {
    en: "CAS",
    fr: "CAS"
  },
  CDANET: {
    en: "CDANET",
    fr: "CDANET"
  },
  CELL: {
    en: "Cell",
    fr: "Cell"
  },
  CHIR: {
    en: "SURG",
    fr: "CHIR"
  },
  CHIRURGIENS: {
    en: "SURGEONS",
    fr: "CHIRURGIENS"
  },
  "CRÉDIT": {
    en: "Credit",
    fr: "Crédit"
  },
  Cabinet: {
    en: "Office ",
    fr: "Cabinet"
  },
  Cancel: {
    en: "Cancel",
    fr: "Annuler"
  },
  "Carie dentaire": {
    en: "Tooth Decay",
    fr: "Carie dentaire"
  },
  "Carte d'assurance-maladie": {
    en: "Health insurance card ",
    fr: "Carte d'assurance-maladie"
  },
  "Cas hospitalier": {
    en: "Hospital Case",
    fr: "Cas hospitalier"
  },
  Cell: {
    en: "Cell ",
    fr: "cell"
  },
  Cellulaire: {
    en: "Cell Phone",
    fr: "Cellulaire"
  },
  "Centre de douleur chronique": {
    en: "Chronic Pain Center ",
    fr: "Centre de douleur chronique"
  },
  "Ch.P": {
    en: "Ch. P.",
    fr: "Ch. P."
  },
  "Change Patient": {
    en: "Change Patient",
    fr: "Changer Patient"
  },
  "Changer la photo": {
    en: "Change photo",
    fr: "Changer la photo"
  },
  "Changer la photo:": {
    en: "Change the picture",
    fr: "Changer la photo"
  },
  Chercher: {
    en: "Search",
    fr: "Chercher"
  },
  "Chercher Patient": {
    en: "Search Patient",
    fr: "Chercher Patient"
  },
  "Chirurgie secondaire pratiquée au cours d une même séance qu une chirurgie principale": {
    en: "Secondary surgery performed during the same session as a main surgery ",
    fr: "Chirurgie secondaire pratiquée au cours d'une même séance qu'une chirurgie principale"
  },
  "Chirurgien dentiste": {
    en: "Surgeon Dentist",
    fr: "Chirurgien dentiste"
  },
  "Choisir parmi les patients du dentiste": {
    en: "Choose ,from the dentist's patients",
    fr: "Choisir parmi les patients du dentiste"
  },
  "Choisir un fichier": {
    en: "Choose a file",
    fr: "Choisir un fichier"
  },
  "Chéque": {
    en: "Check",
    fr: "Chèque"
  },
  "Clinique d’urgence": {
    en: "Emergency Clinic",
    fr: "Clinique d'urgence"
  },
  "Clinique externe": {
    en: "External Clinic",
    fr: "Clinique externe"
  },
  Close: {
    en: "Close",
    fr: "Fermer"
  },
  "Cocher les cases appropriées": {
    en: "Check the appropriate boxes",
    fr: "Cocher les cases appropriées"
  },
  Code: {
    en: "Code",
    fr: "Code"
  },
  "Code Ass.Sec": {
    en: "Ins. Sec. Code",
    fr: "Code Ass. Sec."
  },
  "Code Assurance": {
    en: "Insurance Code",
    fr: "Code Assurance"
  },
  "Code Edit Prix": {
    en: "Code Price Edit",
    fr: "Édition des codes/Prix"
  },
  "Code Postal": {
    en: "Postal Code",
    fr: "Code postal"
  },
  "Code d'exception": {
    en: "Exception Code ",
    fr: "Code d'exception"
  },
  "Code de dependance": {
    en: "Dependency code",
    fr: "Code de dépendance"
  },
  "Code de parente": {
    en: "Reliance Code",
    fr: "Code de parenté"
  },
  "Code diagnostic": {
    en: "Diagnostic code",
    fr: "Code diagnostic"
  },
  "Code localité": {
    en: "City Code",
    fr: "Code localité"
  },
  "Code postal": {
    en: "Postal code",
    fr: "Code postal"
  },
  Codes: {
    en: "Codes",
    fr: "Codes"
  },
  Commentaires: {
    en: "Comments",
    fr: "Commentaires"
  },
  Composite: {
    en: "Composite",
    fr: "Composite"
  },
  "Compte Administratif": {
    en: "Administrative account",
    fr: "Compte administratif"
  },
  "Compte Personnel": {
    en: "Personnal Account",
    fr: "Compte personnel"
  },
  "Compte/Div": {
    en: "Account/Div",
    fr: "Compte/Div"
  },
  "Confirm RV": {
    en: "Confirm Appointment ",
    fr: "Rendez-vous confirmé"
  },
  "Consulter la liste des numéros retirés ou détruits": {
    en: "Consult the list of numbers removed or destroyed",
    fr: "Consulter la liste des numéros retirés ou détruits"
  },
  "Copier les coordonnées de l assuré principal": {
    en: "Copy the principal insured's details ",
    fr: "Copier les coordonnées de l'assuré principal"
  },
  "Correction d'un traitement": {
    en: "Enter a comment",
    fr: "PCP"
  },
  Couriel: {
    en: " ",
    fr: "Retirer"
  },
  Courriel: {
    en: "E-mail",
    fr: "Courriel"
  },
  "Creation rapide": {
    en: "Fast creation",
    fr: "Création rapide"
  },
  "Creer un dossier": {
    en: "Create File",
    fr: "Créer un dossier"
  },
  D: {
    en: "D",
    fr: "D"
  },
  "D.O": {
    en: "D.O",
    fr: "D.O"
  },
  DENTISTE: {
    en: "DENTIST",
    fr: "DENTISTE"
  },
  DENTUROLOGISTE: {
    en: "DENTUROLOGIST",
    fr: "DENTUROLOGISTE"
  },
  DIAGN: {
    en: "DIAGN",
    fr: "DIAGN"
  },
  DOSSIER: {
    en: "FOLDER",
    fr: "DOSSIER"
  },
  Date: {
    en: "Date",
    fr: "Date"
  },
  "Date - Heure": {
    en: "Date - Time",
    fr: "Date - Heure"
  },
  "Date De Service": {
    en: "Date of Service",
    fr: "Date de service"
  },
  "Date d'autorisation": {
    en: "Authorization date",
    fr: "Date d'autorisation"
  },
  "Date d'entrée": {
    en: "Entrance Date ",
    fr: "Date d'entrée"
  },
  "Date de l'accident:": {
    en: "Accident Date",
    fr: "Date de l'accident"
  },
  "Date de l'événement": {
    en: "Event date",
    fr: "Date de l'événement"
  },
  "Date de nais.": {
    en: "Birth Date",
    fr: "Date de nais."
  },
  "Date de naissance": {
    en: "Birth date",
    fr: "Date de naissance"
  },
  "Date de sortie": {
    en: "Release Date ",
    fr: "Date de sortie"
  },
  "Date debut": {
    en: "Start Date",
    fr: "Date de début"
  },
  "Date derniere visite": {
    en: "Last Visit Date:",
    fr: "Date dernière visite :"
  },
  "Date du versement": {
    en: "Date of payment",
    fr: "Date du versement"
  },
  "Date entre": {
    en: "Date between",
    fr: "Date entre"
  },
  "Date envoyé": {
    en: "Sent Date",
    fr: "Date envoyé"
  },
  "Date et heure": {
    en: "Date and time",
    fr: "Date et heure"
  },
  "Date et heure RDV": {
    en: "Appointment Date and Time",
    fr: "Date et heure RDV"
  },
  "Date fin": {
    en: "End Date",
    fr: "Date de fin"
  },
  "Date premiere visite": {
    en: "Fist Visit Date:",
    fr: "Date première visite :"
  },
  "Date retour": {
    en: "Return Date",
    fr: "Dater retour"
  },
  Deconnexion: {
    en: "Logout ",
    fr: "Déconnexion"
  },
  Dent: {
    en: "Tooth",
    fr: "Dent"
  },
  Dentiste: {
    en: "Dentist",
    fr: "Dentiste"
  },
  Denturologiste: {
    en: "Denturist ",
    fr: "Denturologiste"
  },
  Description: {
    en: "Description",
    fr: "Description"
  },
  "Description / Protocole": {
    en: "Description / Protocole",
    fr: "Description / Protocole"
  },
  "Description de traitement": {
    en: "Treatment Description",
    fr: "Description de traitement"
  },
  Desjardin: {
    en: "Desjardins",
    fr: "Desjardins"
  },
  "Detail facture": {
    en: "Bill Detail",
    fr: "Détail facture"
  },
  Disposition: {
    en: "Disposition",
    fr: "Disposition"
  },
  Docs: {
    en: "Docs",
    fr: "Docs"
  },
  Domicile: {
    en: "Home",
    fr: "Domicile"
  },
  Dose: {
    en: "Dose",
    fr: "Dose"
  },
  Dossier: {
    en: "File",
    fr: "Dossier"
  },
  "Dossier Actif,": {
    en: "File Active",
    fr: "Dossier actif"
  },
  "Dossier Consultes": {
    en: "Folders Consulted",
    fr: "Dossiers Consultés"
  },
  "Dossier Patient": {
    en: "Patient File ",
    fr: "Dossier Patient"
  },
  "Dossier consultes": {
    en: "Folders consulted",
    fr: "Dossiers consultés"
  },
  "Dossier patient de Vision-R": {
    en: "Vision-R Patient Folder",
    fr: "Dossier patient de Vision-R"
  },
  Duree: {
    en: "Duration",
    fr: "Durée"
  },
  "Durée activités administratives": {
    en: "Duration of administrative activities",
    fr: "Durée activités administratives"
  },
  "DÉBIT": {
    en: "Debit",
    fr: "Débit"
  },
  ENDO: {
    en: "ENDO",
    fr: "ENDO"
  },
  Effacer: {
    en: "Erase",
    fr: "Effacer"
  },
  "Effectué": {
    en: "Done",
    fr: "Effectué"
  },
  "Effectué le": {
    en: "Performed",
    fr: "Effectué le"
  },
  Employeur: {
    en: "Employer",
    fr: "Employeur"
  },
  "En attente": {
    en: "Waiting",
    fr: "En attente"
  },
  "En bouche": {
    en: "In mouth ",
    fr: "En bouche"
  },
  "En passant": {
    en: "By the way",
    fr: "En passant"
  },
  English: {
    en: "English",
    fr: "English"
  },
  Enregistrer: {
    en: "Save",
    fr: "Enregistrer"
  },
  Entente: {
    en: "Agreement",
    fr: "Entente"
  },
  "Entrer Alerte": {
    en: "Insert Alert ",
    fr: "Insérer alerte"
  },
  "Entrez un commentaire": {
    en: " ",
    fr: "Entrez un commentaire"
  },
  "Entrez un montant": {
    en: "Enter an amount",
    fr: "Entrez un montant"
  },
  "Entrez un suivi médical": {
    en: "Enter a medical follow-up",
    fr: "Entrez un suivi médical"
  },
  "Entrez une alerte médicale": {
    en: "Enter a medical alert",
    fr: "Entrez une alerte médicale"
  },
  "Entrez une correction": {
    en: "Enter a correction ",
    fr: "Entrez une correction"
  },
  "Entrez une note ou un commentaire": {
    en: "Enter a note or comment",
    fr: "Entrez une note ou un commentaire"
  },
  "Entrez une note ou une correction": {
    en: "Enter a note or correction",
    fr: "Entrez une note ou une correction"
  },
  "Entrez une réponse": {
    en: "Enter an answer",
    fr: "Entrez une réponse"
  },
  "Entrez votre code d'accès": {
    en: "Enter your access code",
    fr: "Entrez votre code d'accès"
  },
  "Envoyer courriel": {
    en: "Send Email",
    fr: "Envoyer courriel"
  },
  "Envoyer par courriel": {
    en: "Send by mail",
    fr: "Envoyer par courriel"
  },
  Exam: {
    en: "Exam",
    fr: "Exam"
  },
  "Examen complet": {
    en: "Full review",
    fr: "Examen complet"
  },
  "Examen de rappel": {
    en: "Recall Review",
    fr: "Examen de rappel"
  },
  "Examen ou soin post-opératoire qui n est pas en lien avec la chirurgie": {
    en: "Examination or post-operative care that is not related to the surgery",
    fr: "Examen ou soin post-opératoire qui n'est pas en lien avec la chirurgie"
  },
  Excel: {
    en: "Excel",
    fr: "Excel"
  },
  Exp: {
    en: "Exp ",
    fr: "Exp"
  },
  Expiration: {
    en: "Expiration",
    fr: "Expiration"
  },
  Extra: {
    en: "Extra",
    fr: "Extra"
  },
  Facturation: {
    en: "Billing",
    fr: "Facturation"
  },
  "Facturation anticipee": {
    en: "Advance billing ",
    fr: "Facturation anticipée"
  },
  "Facturation anticipée": {
    en: "Advance Billing",
    fr: "Facturation anticipée"
  },
  Facture: {
    en: "Bill",
    fr: "Facture"
  },
  "Facture ou un reçu": {
    en: "Bill or Receipt",
    fr: "Facture ou reçu"
  },
  Factures: {
    en: "Bills",
    fr: "Factures"
  },
  "Factures Payées": {
    en: "Paid Bills",
    fr: "Factures payées"
  },
  "Factures non payées": {
    en: "Bill not paid",
    fr: "Facture non payées"
  },
  Famille: {
    en: "Family",
    fr: "Famille"
  },
  Fermer: {
    en: "Close",
    fr: "Fermer"
  },
  Financement: {
    en: "Funding",
    fr: "Financement"
  },
  Financier: {
    en: "Financial",
    fr: "Financier"
  },
  Financiere: {
    en: "Financial",
    fr: "Financière"
  },
  "Formulaire d'assurance": {
    en: "Insurance Form",
    fr: "Formulaire d'assurance"
  },
  "Fusion nouveau patient": {
    en: "New Patient Fusion ",
    fr: "Fusion nouveau patient"
  },
  "Gestion des rappels": {
    en: "Reminders",
    fr: "Gestion des rappels"
  },
  "Générer la facture": {
    en: "Generate invoice",
    fr: "Générer la facture"
  },
  Heure: {
    en: "Hour",
    fr: "Heure"
  },
  Hist: {
    en: "Hist",
    fr: "Hist"
  },
  Historique: {
    en: "History",
    fr: "Historique"
  },
  "Historique des rendez-vous": {
    en: "Appointment History",
    fr: "Historique des rendez-vous"
  },
  Honoraires: {
    en: "Fees",
    fr: "Honoraires"
  },
  ICDANet: {
    en: "ICDANET",
    fr: "ICDANET"
  },
  ID: {
    en: "ID",
    fr: "ID"
  },
  IMPLANT: {
    en: "IMPLANT",
    fr: "IMPLANT"
  },
  "Identification du lieu": {
    en: "Place identification",
    fr: "Identification du lieu"
  },
  "Identification du patient": {
    en: "Patient Identification ",
    fr: "Identification du patient"
  },
  Impression: {
    en: "Print",
    fr: "Imprimer"
  },
  Imprimer: {
    en: "Print",
    fr: "Imprimer"
  },
  Indemnites: {
    en: "Benefits",
    fr: "Indemnités"
  },
  "Info Couverture": {
    en: "Info Insurance cover ",
    fr: "Info Couverture"
  },
  "Info couverture": {
    en: "Cover Info",
    fr: "Info couverture"
  },
  "Information additionnelle": {
    en: "Additional Information ",
    fr: "Information additionnelle"
  },
  "Informations complementaires Régie": {
    en: "Additional information Régie",
    fr: "Informations complémentaires Régie"
  },
  "Informations complementaires Régie - Detail Facture": {
    en: "Additional information Régie - Invoice Detail  ",
    fr: "Informations complémentaires Régie - Détail Facture"
  },
  "Infos Patient": {
    en: "Patient Info",
    fr: "Info Patient"
  },
  Initiale: {
    en: "Initial",
    fr: "Initiale"
  },
  "Insurance ($)": {
    en: "Insurance ($)",
    fr: "Assurances ($)"
  },
  Internet: {
    en: "Internet",
    fr: "Internet"
  },
  "Intervention Rappel": {
    en: "Recall Intervention",
    fr: "Intervention Rappel"
  },
  "Intervention de rappel": {
    en: "Reminder ",
    fr: "Intervention de rappel"
  },
  "Kilomètres": {
    en: "Kilometers",
    fr: "Soins d'urgence"
  },
  L: {
    en: "L",
    fr: "L"
  },
  "La facture est associée à une demande de remboursement d'un bénéficiare.": {
    en: "Invoice is tied to a reimbursement request",
    fr: "La facture est associée à une demande de remboursement d'un bénéficiare."
  },
  "Lab %": {
    en: "Lab % :",
    fr: "Lab % :"
  },
  Laboratoires: {
    en: "Laboratories",
    fr: "Laboratoires"
  },
  Laboratories: {
    en: "Labo",
    fr: "Labo"
  },
  "Laisee un message": {
    en: "Leave a message",
    fr: "Laisser un message"
  },
  Langue: {
    en: "Language",
    fr: "Langue"
  },
  "Le Solde includ : CAS": {
    en: "The Balance includes: CAS",
    fr: "Le solde inclut : CAS"
  },
  "Le Solde inclus :": {
    en: "Balance included ",
    fr: "Solde inclus"
  },
  "Le patient est-il courvert par une deuxième assurance ? ": {
    en: "Is patient covered by a second insurance?",
    fr: "Le patient est-il courvert par une deuxième assurance ?"
  },
  "Le patient possède-t-il deux assurances?": {
    en: "Does the patient have two insurances? ",
    fr: "Le patient possède-t-il deux assurances?"
  },
  Lettre: {
    en: "Letter ",
    fr: "Lettre"
  },
  "Lieu codifié à la Régie": {
    en: "Codified place at the Régie",
    fr: "Lieu codifié à la Régie"
  },
  "Lieu codifié á la Régie": {
    en: "Codified place at the Régie ",
    fr: "Lieu codifié à la Régie"
  },
  "Lieu de dispensation": {
    en: "Dispensation Place",
    fr: "Lieu de dispensation"
  },
  "Lieu de référence": {
    en: "Place of reference",
    fr: "Lieu de référence"
  },
  "Lieu non codifié": {
    en: "None Codified Place",
    fr: "Lieu non codifié"
  },
  "Ligne engagee": {
    en: "Busy line",
    fr: "Ligne occupée"
  },
  "Liste des codes et tarifs": {
    en: "List of Codes and Prices",
    fr: "Liste des codes et tarifs"
  },
  LoadTestData: {
    en: "Load Test Data",
    fr: "Test Télécharg. Données"
  },
  M: {
    en: "M",
    fr: "M"
  },
  MC: {
    en: "MC",
    fr: "MC"
  },
  MLLE: {
    en: "Miss",
    fr: "Mlle"
  },
  MME: {
    en: "Mrs",
    fr: "Mme"
  },
  Manque: {
    en: "Missed",
    fr: "Manqué"
  },
  "Master Card": {
    en: "Master Card ",
    fr: "Master Card"
  },
  Medical: {
    en: "Mediacl ",
    fr: "Médical"
  },
  Medicale: {
    en: "Medical",
    fr: "Médical"
  },
  "Message R": {
    en: "Message R",
    fr: "Message R"
  },
  Messages: {
    en: "Messages",
    fr: "Messages"
  },
  "Messages dérreur": {
    en: "Error Message",
    fr: "Message d'erreur"
  },
  "Mesures parodontiques": {
    en: "Periodontal measurements",
    fr: "Mesures parodontiques"
  },
  "Mise en place de la première plaque de reconstruction": {
    en: "Setting up the first reconstruction plate",
    fr: "Mise en place de la première plaque de reconstruction"
  },
  "Mod.": {
    en: "Mod.",
    fr: "Mod."
  },
  Modifier: {
    en: "Modify",
    fr: "Modifier"
  },
  "Modifier un versement": {
    en: "Edit a payment",
    fr: "Modifier un versement"
  },
  Montant: {
    en: "Amount ",
    fr: "Montant"
  },
  "Montant Total :": {
    en: "Total amount",
    fr: "Montant total"
  },
  "Montant admissible": {
    en: "Eligible Amount",
    fr: "Montant admissible"
  },
  "Montant restant": {
    en: "Remaining amount",
    fr: "Montant restant"
  },
  "Montant total:": {
    en: "Total amount",
    fr: "Montant total"
  },
  "Montant utilise": {
    en: "Used Amount",
    fr: "Montant utilisé"
  },
  Mr: {
    en: "Mr",
    fr: "Mr."
  },
  "Médicament": {
    en: "Drug",
    fr: "Médicament"
  },
  "Médicament consommé": {
    en: "Drug Consumed",
    fr: "Médicament consommé"
  },
  NAM: {
    en: "NAM",
    fr: "NAM"
  },
  NOM: {
    en: "Name",
    fr: "Nom"
  },
  Nb: {
    en: "Nb ",
    fr: "Nb"
  },
  "Ne repond pas": {
    en: "No answer",
    fr: "Pas de réponse"
  },
  "New Prix": {
    en: "New Price",
    fr: "Nouveau prix"
  },
  Next: {
    en: "Next",
    fr: "Suivant"
  },
  "Nlle facture": {
    en: "New Bill",
    fr: "Nlle facture"
  },
  No: {
    en: "No ",
    fr: "No"
  },
  "No Dossier": {
    en: "File Number",
    fr: "No.Dossier"
  },
  "No code": {
    en: "Code number",
    fr: "No. Code"
  },
  "No d'autorisation": {
    en: "Authorization number",
    fr: "No d'autorisation"
  },
  "No data available in table": {
    en: "No data available in table",
    fr: "Payée"
  },
  "No de Facture": {
    en: "Bill no. ",
    fr: "No de facture"
  },
  "No de certificat": {
    en: "Certificate number",
    fr: "ICDANET"
  },
  "No de confirmation du plan": {
    en: "Plan confirmation number",
    fr: "No de confirmation du plan"
  },
  "No de facture": {
    en: "Bill no.",
    fr: "No de facture"
  },
  "No de paiements": {
    en: "Payment no.",
    fr: "No de paiement"
  },
  "No de police": {
    en: "Policy number",
    fr: "No de police"
  },
  "No de reçu": {
    en: "Receipt number",
    fr: "No de reçu"
  },
  "No de référant": {
    en: "Referring no ",
    fr: "No de référant"
  },
  "No de sequence": {
    en: "Sequence number",
    fr: "No de séquence"
  },
  "No du groupe": {
    en: "Group number",
    fr: "No du groupe"
  },
  "No du professionel": {
    en: "Professionnel number",
    fr: "No du professionnel"
  },
  "No facture": {
    en: "Bill number",
    fr: "No. Facture"
  },
  "No reçu": {
    en: "Receipt No.",
    fr: "No de reçu"
  },
  "No tel.appele": {
    en: "Phone Number called ",
    fr: "No. Tél. appelé"
  },
  "No. Tel. compose": {
    en: "Dialed Phone number",
    fr: "No. Tél. composé"
  },
  "No. bureau": {
    en: "Office number",
    fr: "No. bureau"
  },
  "No. bureau.": {
    en: "Office number",
    fr: "No. bureau"
  },
  Nom: {
    en: "Name",
    fr: "Nom"
  },
  "Nom de l'etablissement": {
    en: " Business Name",
    fr: "Nomde l'établissement"
  },
  "Nom du labo": {
    en: "Labo Name",
    fr: "Nom du Labo"
  },
  "Nom du patient": {
    en: "Patient's name",
    fr: "Nom du patient"
  },
  "Nom, prénom": {
    en: "Name, First Name",
    fr: "Nom, prénom"
  },
  "Nombre d'injections": {
    en: "Number of injections",
    fr: "Nombre d'injections"
  },
  "Nombre de factures": {
    en: "Number of bill",
    fr: "Nombre de factures"
  },
  Non: {
    en: "No",
    fr: "Non"
  },
  "Non applicable": {
    en: "Not applicable",
    fr: "Non applicable"
  },
  Note: {
    en: "Note",
    fr: "Note"
  },
  "Note ou commentaire": {
    en: "Note or comment",
    fr: "Note ou commentaire"
  },
  Notes: {
    en: "Notes",
    fr: "Notes"
  },
  "Notes cliniques": {
    en: "Clinical Notes",
    fr: "Notes cliniques"
  },
  "Notes complementaires": {
    en: "Additional notes",
    fr: "Notes complémentaires"
  },
  "Notes et commentaires": {
    en: "Notes and comments",
    fr: "Notes et commentaires"
  },
  "Notes et corrections": {
    en: "Notes and corrections ",
    fr: "Notes et corrections"
  },
  "Nouvelle facture": {
    en: "New Bill",
    fr: "Nlle facture"
  },
  "Nouvelle intervention qui est reliée à la première ou en résulte lors d une même hospitalisation": {
    en: "New intervention that is related to the first one or results in the same hospitalization",
    fr: "Nouvelle intervention qui est reliée à la première ou en résulte lors d'une même hospitalisation"
  },
  "Nouvelle intervention qui n est pas reliée à la première ou n en résulte pas lors d une même hospitalisation": {
    en: "New intervention that is not related to the first or does not result in the same hospitalization",
    fr: "Nouvelle intervention qui n'est pas reliée à la première ou n'en résulte pas lors d'une même hospitalisation"
  },
  "Numeros retires ou detruits": {
    en: "Numbers remouved or destroyed",
    fr: "Numéros retirés ou détruits"
  },
  "Numéro": {
    en: "Numero",
    fr: "Numéro"
  },
  "Numéro de dossier": {
    en: "File number",
    fr: "Numéro de dossier"
  },
  "Numéro du lieu": {
    en: "Location number",
    fr: "Numéro du lieu"
  },
  O: {
    en: "O",
    fr: "O"
  },
  OBS: {
    en: "OBS",
    fr: "OBS"
  },
  OK: {
    en: "OK",
    fr: "OK"
  },
  ORTHO: {
    en: "ORTHO",
    fr: "ORTHO"
  },
  Odon: {
    en: "Odon",
    fr: "Odon"
  },
  Odontogramme: {
    en: "Odontogram",
    fr: "Odontogramme"
  },
  Ok: {
    en: "OK",
    fr: "OK"
  },
  Oui: {
    en: "Yes",
    fr: "Oui"
  },
  "Oui,": {
    en: "Yes",
    fr: "Oui"
  },
  PAIEMENT: {
    en: "Payment ",
    fr: "Paiement"
  },
  PARO: {
    en: "PARO",
    fr: "PARO"
  },
  PCO: {
    en: "PCO ",
    fr: "PCO"
  },
  PCP: {
    en: "PCP",
    fr: "PCP"
  },
  PERS: {
    en: "PERS",
    fr: "PERS"
  },
  "POST-DATÉS": {
    en: "POST DATED ",
    fr: "POST-DATÉS"
  },
  PPA: {
    en: "PPA",
    fr: "PPA"
  },
  PPF: {
    en: "PPF",
    fr: "PPF"
  },
  PRENOM: {
    en: "First Name",
    fr: "Prénom"
  },
  PROFESSIONEL: {
    en: "PROFESSIONAL",
    fr: "PROFESSIONNEL"
  },
  "PRÉV": {
    en: "PREVIOS",
    fr: "PRÉV"
  },
  Paiement: {
    en: "Payment",
    fr: "Paiement"
  },
  Paiements: {
    en: "Payments",
    fr: "Paiements"
  },
  PamntMOdalTEst: {
    en: "Payment Test",
    fr: "Test paiement"
  },
  Paro: {
    en: "Paro",
    fr: "Paro"
  },
  Patient: {
    en: "Patient",
    fr: "Patient"
  },
  "Patient de": {
    en: "Patient of",
    fr: "Patient de :"
  },
  "Patient sous anesthésie générale ": {
    en: "Patient under general anesthesia",
    fr: "Patient sous anesthésie générale"
  },
  "Payable à:": {
    en: "Payable to: ",
    fr: "Payable à :"
  },
  "Payée": {
    en: "Paid",
    fr: "Payée"
  },
  "Placement initial ?": {
    en: "Initial Investment ",
    fr: "Placement initial"
  },
  "Plan RDV": {
    en: "Appointment Plan",
    fr: "Plan RV"
  },
  "Plan de traitement": {
    en: "Treatment Plan",
    fr: "Plan de traitement"
  },
  Plus: {
    en: "More ",
    fr: "Plus"
  },
  PlusSupprimer: {
    en: "Delete",
    fr: "Supprimer"
  },
  Poste: {
    en: "Ext.",
    fr: "¨Poste"
  },
  Prenom: {
    en: "First Name",
    fr: "Prénom"
  },
  Previous: {
    en: "Previous",
    fr: "Précédent"
  },
  "Previous Prix": {
    en: "Previous Price",
    fr: "Prix précédent"
  },
  "Price Edit for Code": {
    en: "Price Edit for Code",
    fr: "Éditeur de prix pour les codes"
  },
  Principal: {
    en: "Principal",
    fr: "Principal"
  },
  Print: {
    en: "Print",
    fr: "Imprimer"
  },
  Prix: {
    en: "Price",
    fr: "Prix"
  },
  "Prix ($)": {
    en: "Price ($) ",
    fr: "Prix ($)"
  },
  Prod: {
    en: "Prod",
    fr: "Prod"
  },
  Products: {
    en: "Products",
    fr: "Produits"
  },
  "Professionnel remplacé": {
    en: "Professional replaced",
    fr: "Professionnel remplacé"
  },
  "Professionnel référant": {
    en: "Referring professional ",
    fr: "Professionnel référant"
  },
  "Prothèse en acrylique": {
    en: "Acrylic prosthesis",
    fr: "Prothèse en acrylique"
  },
  "Prothése en acrylique": {
    en: "Acrylic prosthesis",
    fr: "Prothèse en acrylique"
  },
  Protocoles: {
    en: "Protocols",
    fr: "Protocoles"
  },
  Province: {
    en: "Province",
    fr: "Province"
  },
  "Précédent": {
    en: "Previous",
    fr: "Précédent"
  },
  "Prénom": {
    en: "First Name ",
    fr: "Prénom"
  },
  "Prénom du patient": {
    en: "Patient First Name",
    fr: "Prénom du patient"
  },
  PubliPos: {
    en: "PubliPos",
    fr: "PubliPos"
  },
  "Période d'hospi.": {
    en: "Period of hospitalization ",
    fr: "Période d'hospitalisation"
  },
  "Qté": {
    en: "Qty",
    fr: "Qté"
  },
  "Quantité": {
    en: "Quantity ",
    fr: "Quantité"
  },
  Question: {
    en: "Question:",
    fr: "Question :"
  },
  Questionnaire: {
    en: "Survey",
    fr: "Questionnaire"
  },
  Quitter: {
    en: "Quit",
    fr: "Quitter"
  },
  RAMQ: {
    en: "RAMQ",
    fr: "RAMQ"
  },
  "RENSEIGNEMENTS COMPLÉMENTAIRES RÉGIE": {
    en: "RÉGIE ADDITIONAL INFORMATION",
    fr: "RENSEIGNEMENTS COMPLÉMENTAIRES RÉGIE"
  },
  REST: {
    en: "REST ",
    fr: "REST"
  },
  Raison: {
    en: "Reason",
    fr: "Raison"
  },
  "Raison de rappel #1": {
    en: "Reason",
    fr: "Raison"
  },
  "Raison de rappel #2": {
    en: "Reason",
    fr: "Raison"
  },
  "Ramq ($)": {
    en: "RAMQ ($)",
    fr: "RAMQ ($)"
  },
  "Ramq Credential Expiration": {
    en: "Ramq Credential Expiration",
    fr: "Identification RAMQ expirée"
  },
  Rappel: {
    en: "Recall",
    fr: "Rappel"
  },
  "Rappel de Facture": {
    en: "Bill Reminder",
    fr: "Rappel de facture"
  },
  "Rappel de facture": {
    en: "Bill Reminder",
    fr: "Rappel de facture"
  },
  "Rechercher dans Vision-R": {
    en: "Search in Vision R",
    fr: "Rechercher dans Vision R"
  },
  "Rechercher un patient": {
    en: "Search Patient",
    fr: "Rechercher un patient"
  },
  Reference: {
    en: "Reference",
    fr: "Référence"
  },
  References: {
    en: "References",
    fr: "Références"
  },
  "References et employeur": {
    en: "Reference and employer",
    fr: "Référence et employeur"
  },
  "Regie Facture Modal": {
    en: "Regulated Invoice ",
    fr: "Facture Régie"
  },
  "Remboursement demandé par Patient": {
    en: "Refund requested by Patient",
    fr: "Remboursement demandé par Patient"
  },
  "Remplacement d une prothèse pour perte ou bris": {
    en: "Replacement of a prosthesis for loss or breakage ",
    fr: "Remplacement d'une prothèse pour perte ou bris"
  },
  "Remplacement d une prothèse pour perte ou bris ": {
    en: "Replacement of a prosthesis for loss or breakage",
    fr: "Remplacement d'une prothèse pour perte ou bris"
  },
  "Remplacement de deux prothèses pour perte ou bris": {
    en: "Replacement of two prostheses for loss or breakage",
    fr: "Remplacement de deux prothèses pour perte ou bris"
  },
  "Remplacement de deux prothèses pour perte ou bris ": {
    en: "Replacement of two prostheses for loss or breakage ",
    fr: "Remplacement de deux prothèses pour perte ou bris"
  },
  "Rendez-vous": {
    en: "Appointment",
    fr: "Rendez-vous"
  },
  "Renseignements - Assurance": {
    en: "Information - Insurance",
    fr: "Renseignements - Assurance"
  },
  "Renseignements - Reclamations CDANET": {
    en: "Information - CDANET Claims",
    fr: "Renseignements - Réclamations CDANET"
  },
  "Renseignements complémentaires Régie (Chirguen)": {
    en: "Additional information Régie (Surgeon)",
    fr: "Renseignements complémentaires Régie (Chirurgien)"
  },
  "Renseignements supplémentaires": {
    en: "Additional Information ",
    fr: "Renseignements supplémentaires"
  },
  Repondant: {
    en: "Responding",
    fr: "Répondant"
  },
  Repondu: {
    en: "Ansewered",
    fr: "Répondu"
  },
  "Requerant:": {
    en: "Petitioner ",
    fr: "Requérant"
  },
  Responsable: {
    en: "Responsible",
    fr: "Responsable"
  },
  "Responsable Financier du patient": {
    en: "Patient Financial Responsible",
    fr: "Responsable financier du patient"
  },
  Retirer: {
    en: "Remove",
    fr: "Retirer"
  },
  "Reçu": {
    en: "Receipt",
    fr: "Reçu"
  },
  RobData: {
    en: "Rob Data ",
    fr: "Données Rob"
  },
  Role: {
    en: "Role",
    fr: "Rôle"
  },
  Rue: {
    en: "Street",
    fr: "Rue"
  },
  Rx: {
    en: "Rx",
    fr: "Rx"
  },
  "Référant": {
    en: "Referrer ",
    fr: "Référant"
  },
  "Sélection du tarif":{
      en:"Tarif Selection",
      fr:"Sélection du tarif"
  },
  "Cas hospitalier": {
      en: "Hospital case",
    fr: "Cas hospitalier"
  },
  "Réponse": {
    en: "Answer",
    fr: "Réponse"
  },
  "S'agit-il de traitements en vue de soins orthodontiques?": {
    en: "Are these treatments for orthodontic care?",
    fr: "S'agit-il de traitements en vue de soins orthodontiques?"
  },
  "Salutation et # de dossier du responsable": {
    en: "Salutation and leader's file number",
    fr: "Salutation et # de dossier du responsable"
  },
  Sauvegarder: {
    en: "Save ",
    fr: "Sauvegarder"
  },
  "Secteur d'activité": {
    en: "Activity area",
    fr: "Secteur d'activité"
  },
  "Section gériatrique": {
    en: "Geriatric section",
    fr: "Section gériatrique"
  },
  "Section psychiatrique": {
    en: "Psychiatric section",
    fr: "Section psychiatrique"
  },
  "Service dont la complexité est inhabituelle ": {
    en: "Service of unusual complexity",
    fr: "Service dont la complexité est inhabituelle"
  },
  "Service fourni en centre hospitalier avec le concours d'un ou de dentistes résidents dans un programme visé ": {
    en: "Service provided in a hospital center with the assistance of a resident dentist in a targeted program",
    fr: "Service fourni en centre hospitalier avec le concours d'un ou de dentistes résidents dans un programme visé"
  },
  Sexe: {
    en: "Sex",
    fr: "Sexe"
  },
  Signature: {
    en: "Signature",
    fr: "Signature"
  },
  Site: {
    en: "Site",
    fr: "Site"
  },
  "Site différent": {
    en: "Different site",
    fr: "Site différent"
  },
  "Site différent ": {
    en: "Different site",
    fr: "Site différent"
  },
  "Situation liée au lieu de référence": {
    en: "Situation linked to the reference site",
    fr: "Situation liée au lieu de référence"
  },
  "Soin pré-opératoire qui n est pas en lien avec la chirurgie ": {
    en: "Pre-operative care that is not related to surgery",
    fr: "Soin pré-opératoire qui n'est pas en lien avec la chirurgie"
  },
  "Soins d urgence ": {
    en: "Urgent Care",
    fr: "Soins d'urgence"
  },
  "Soins post-opératoire confiés par un autre dentiste ": {
    en: "Postoperative care by another dentist",
    fr: "Soins post-opératoire confiés par un autre dentiste"
  },
  "Soins post-opératoire confiés à un autre dentiste ": {
    en: "Postoperative care given to another dentist",
    fr: "Soins post-opératoire confiés à un autre dentiste"
  },
  "Solde Actuel": {
    en: "Actual Balance",
    fr: "Solde actuel"
  },
  "Solde pour AC": {
    en: "AC Balance",
    fr: "Solde pour AC"
  },
  Soldes: {
    en: "Balance",
    fr: "Solde"
  },
  "Special ($)": {
    en: "Special ($)",
    fr: "Spécial ($)"
  },
  Status: {
    en: "Status",
    fr: "Status"
  },
  "Status de recevabilitié": {
    en: "Eligibility Status",
    fr: "Status de recevabilité"
  },
  Submit: {
    en: "Submit",
    fr: "Soumettre"
  },
  Suffixe: {
    en: "Suffix",
    fr: "Suffixe"
  },
  "Suite à un traumatisme ": {
    en: "Following a trauma",
    fr: "Suite à un traumatisme"
  },
  "Suite à une malformation osseuse ": {
    en: "Following a bone malformation",
    fr: "Suite à une malformation osseuse"
  },
  Suivant: {
    en: "Next",
    fr: "Suivant"
  },
  "Suivi médical": {
    en: "Medical monitoring",
    fr: "Suivi médical"
  },
  Supprimer: {
    en: "Delete",
    fr: "Supprimer"
  },
  "Supprimer les médicaments": {
    en: "Delete Drugs",
    fr: "Supprimer les médicaments"
  },
  "Supprimer les traitements": {
    en: "Remove treatments",
    fr: "Supprimer les traitements"
  },
  "Supprimer les versements": {
    en: "Remove Payment",
    fr: "Supprimer les versements"
  },
  "Surf.": {
    en: "Area",
    fr: "Surf."
  },
  Surface: {
    en: "Area",
    fr: "Surface"
  },
  "Séance différente": {
    en: "Different session",
    fr: "Séance différente"
  },
  "Séance différente ": {
    en: "Different session",
    fr: "Séance différente"
  },
  "Sélection buccale ou labiale": {
    en: "Oral or labial selection",
    fr: "Sélection buccale ou labiale"
  },
  "Sélection de la dent": {
    en: "Tooth selection",
    fr: "Sélection de la dent"
  },
  "Sélection des surfaces": {
    en: "Surface selection",
    fr: "Sélection des surfaces"
  },
  "Sélection médiale ou distale": {
    en: "Medial or distal selection",
    fr: "Sélection médiale ou distale"
  },
  "Sélectionnez le type de dentiste": {
    en: "Select the type of dentist",
    fr: "Sélectionnez le type de dentiste"
  },
  TD: {
    en: "TD",
    fr: "TD"
  },
  TEST: {
    en: "Test",
    fr: "Test"
  },
  TOTAL: {
    en: "Total ",
    fr: "Total"
  },
  "Tarif régulier": {
    en: "Regular Rate",
    fr: "Tarif régulier"
  },
  "Tarif spécial": {
    en: "Special Rate",
    fr: "Tarif spécial"
  },
  Telephone: {
    en: "Telephone",
    fr: "Téléphone"
  },
  TestModal: {
    en: "Test Modal",
    fr: "Test interface"
  },
  Titre: {
    en: "Title",
    fr: "Titre"
  },
  Total: {
    en: "Total",
    fr: "Total"
  },
  "Total Facture": {
    en: "Total Bill",
    fr: "Total Facture"
  },
  "Total Facture:": {
    en: "Total Bill ",
    fr: "Total facture"
  },
  "Total de l'entente :": {
    en: "Total Agreement",
    fr: "Total de l'entente"
  },
  "Total du plan de traitement": {
    en: "Total treatment plan",
    fr: "Total du plan de traitement"
  },
  "Total paiements": {
    en: "Total Payments",
    fr: "Total paiements"
  },
  Tous: {
    en: "All",
    fr: "Tous"
  },
  "Tous les factures": {
    en: "All Bills",
    fr: "Toutes les factures"
  },
  "Tous les messages": {
    en: "All messages",
    fr: "Tous les messages"
  },
  "Tous les patients": {
    en: "All Patients ",
    fr: "Tous les patients"
  },
  Traitement: {
    en: "Treatment",
    fr: "Traitement"
  },
  "Traitement dentaire": {
    en: "Dental treatment",
    fr: "Traitement dentaire"
  },
  Traitements: {
    en: "Treatments",
    fr: "Traitements"
  },
  Traits: {
    en: "Treats",
    fr: "Traits"
  },
  "Transférer à l'assurance": {
    en: "Transfer to insurance ",
    fr: "Transférer à l'assurence"
  },
  "Transférer à la Régie": {
    en: "Transfert to The Régie",
    fr: "Transférer à la Régie"
  },
  Type: {
    en: "Type",
    fr: "Type"
  },
  "Type 1": {
    en: "Type 1",
    fr: "Type 1"
  },
  "Type 2": {
    en: "Type 2",
    fr: "Type 2"
  },
  "Type de lieu": {
    en: "Type of place ",
    fr: "Type de lieu"
  },
  "Type de référant": {
    en: "Referring type ",
    fr: "Type de référant"
  },
  "Type de transaction:": {
    en: "Transaction Type",
    fr: "Type de transaction"
  },
  "Type:": {
    en: "Type",
    fr: "Type"
  },
  "Types de paiements ou d'assurances": {
    en: "Payments or Insurance Type",
    fr: "Types de paiements ou d'assurances"
  },
  "Télé Etat. compte": {
    en: "Tel. Statement of account",
    fr: "Télé. État de compte"
  },
  "Télé. Paiements": {
    en: "Tel.Payments",
    fr: "Télé. paiements"
  },
  "Unité coronarienne": {
    en: "Coronary Unit",
    fr: "Unité coronarienne"
  },
  "Unité de soins de longue durée (hébergement)": {
    en: "Long Term Care Unit (Accommodation)",
    fr: "Unité de soins de longue durée (hébergement)"
  },
  "Unité de soins de longue durée (prolongés)": {
    en: "Long Term Care Unit (extended)",
    fr: "Unité de soins de longue durée (prolongés)"
  },
  "Unité de soins généraux et spécialisés": {
    en: "General and specialized care unit",
    fr: "Unité de soins généraux et spécialisés"
  },
  "Unité de soins intensifs": {
    en: "Intensive care unit",
    fr: "Unité de soins intensifs"
  },
  "Unités": {
    en: "Units",
    fr: "Unités"
  },
  Update: {
    en: "Update",
    fr: "Mise à jour"
  },
  "Urgence Seulement": {
    en: "Emergency Only",
    fr: "Urgence seulement"
  },
  VISA: {
    en: "VISA ",
    fr: "VISA"
  },
  "Va rappeler": {
    en: "Will call back ",
    fr: "Va rappeler"
  },
  "Va rappeler pour RV": {
    en: "Will call back for appointment",
    fr: "Va rappeler pour RV"
  },
  Valider: {
    en: "Validate",
    fr: "Valider"
  },
  Versement: {
    en: "Payment ",
    fr: "Versement"
  },
  Ville: {
    en: "City",
    fr: "Ville"
  },
  XYZ: {
    en: " ",
    fr: " "
  },
  cdanET: {
    en: "CDANET",
    fr: "CDANET"
  },
  non: {
    en: "No ",
    fr: "Non"
  },
  "retour a facturation": {
    en: "Back to billing section",
    fr: "Retour à facturation"
  },
  "À faire": {
    en: "To do",
    fr: "À faire"
  },
  "À surveiller": {
    en: "To monitor",
    fr: "À surveiller"
  },
  "Élements mesurables": {
    en: "Measurable elements",
    fr: "Élements mesurables"
  },
  "Éléments de contexte": {
    en: "Contextual elements",
    fr: "Éléments de contexte"
  },
  "État de compte": {
    en: "Statement of account",
    fr: "État de compte"
  },
  "État normal": {
    en: "Normal State ",
    fr: "État normal"
  },
  "Événement": {
    en: "Event",
    fr: "Événement"
  }
}