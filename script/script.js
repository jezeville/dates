function afficherHeureEtDate(ville, fuseauHoraire) {
    const date = new Date().toLocaleString('fr-FR', {timeZone: fuseauHoraire});
    console.log("Heure et date à " + ville + ": " + date);
}
// Ancrage, États-Unis (UTC-9)
afficherHeureEtDate('Ancrage', 'America/Anchorage');
// Reykjavik, Islande (UTC)
afficherHeureEtDate('Reykjavik', 'Atlantic/Reykjavik');
// Saint-Pétersbourg, Russie (UTC+3)
afficherHeureEtDate('Saint-Pétersbourg', 'Europe/Moscow');
// Bruxelles, Belgique (UTC+1)
afficherHeureEtDate('Bruxelles', 'Europe/Brussels');



// À l’aide des horodatages, déterminez combien de jours se sont écoulés depuis votre date de naissance. Vous vous sentez déjà vieux ?
    let naissance = new Date('2001-04-12');
    let ajd = Date.now();

    console.log(((ajd - naissance.getTime()) / (1000*86400)).toFixed(0) + " jours depuis ma naissance");

// Écrivez une fonction pour déterminer combien de jours se sont écoulés depuis un moment donné (après 1970).

function timeEcoule (jour){
    let date = new Date(jour);
    console.log(date.getTime()/(1000*86400) + " jours depuis 1970");
}
timeEcoule ("2000-12-25");


// À l'aide des horodatages, trouvez l'heure et la date exactes auxquelles nous serons dans 80 000 heures.

let currentDate = Date.now();
let nextDate = currentDate + (80000 * 60 * 60 * 1000);

console.log(new Date(nextDate)+ " date avec 80 000 heures de plus");

// Écrivez une fonction pour afficher l'heure et la date pour n'importe quel nombre d'heures donné dans le futur. Créez une entrée numérique pour les heures et écoutez keyup les événements, affichez dynamiquement la date dans le nombre d'heures donné par l'entrée.

function nextTime (heure){
    let DateActuelle = Date.now();
    let ProchaineDate = DateActuelle + (heure * 60 * 60 * 1000);
    console.log(new Date(ProchaineDate));
}
nextTime(60000);

// La date doit être celle d'aujourd'hui, dans votre fuseau horaire. Actualisez l'affichage toutes les secondes ( indice ), pour que l'heure reste exacte même lorsque la page reste ouverte pendant une longue période

// En cliquant sur les heures, basculez l'affichage au format 12 heures ou revenez au format 24 heures.

// Partie de gauche

    //Partie haute

    let leftTop = document.querySelector('.box__left__top');
    leftTop.innerHTML = new Date().toLocaleString('fr-FR', { weekday: 'short' });

    //Partie milieu

    let leftMiddle = document.querySelector('.box__left__middle');
    let dateChiffre = new Date().getDate();
    let dateMonth = new Date().toLocaleString('fr-FR', {month : 'short'});
    leftMiddle.innerHTML = dateChiffre + " " + dateMonth;

    //Partie bas

    let leftBottom = document.querySelector('.box__left__bottom');
    leftBottom.innerHTML = new Date().getFullYear();

// Partie de droite
let changementHeure = true;

let right = document.querySelector('.box__right');

let temps = () => {
    let options = {hour12: !changementHeure ,hour: 'numeric',minute: 'numeric',second: 'numeric'};
    right.innerHTML = new Date().toLocaleString('fr-FR', options);
}


right.addEventListener('click', () => {
    changementHeure = !changementHeure;
    temps();
});
setInterval(temps , 1000);