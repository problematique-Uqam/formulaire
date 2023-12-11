var champ1 = document.getElementById("champ1");
var cap1 = document.getElementById("cap1").innerHTML;
var field1 = document.querySelector(".champ1");

var champ2 = document.getElementById("champ2");
var cap2 = document.getElementById("cap2").innerHTML;
var field2 = document.querySelector(".champ2");

var champ3 = document.getElementById("blurTrigger");
var cap3 = document.getElementById("cap3").innerHTML;
var field3 = document.querySelector(".champ3");
var popup = document.getElementById("popup");
var ArrayPopup = document.querySelectorAll(".popup");

var champ4 = document.getElementById("champ4");
var cap4 = document.getElementById("cap4").innerHTML;
var field4 = document.querySelector(".champ4");
const popups = document.querySelectorAll(".popup");
let dernierContenuChamp = ""; // Pour suivre le contenu précédent du champ

// Interaction pour le champ 1 (afficher un popup choisi en priorité parmi ceux qui ne sont pas affichés)
function afficherPopup() {
    var contenuChamp = champ1.value.toLowerCase(); // Convertir en minuscules pour la correspondance


    // Vérifier si un caractère a été ajouté
    if (contenuChamp.length > dernierContenuChamp.length) {
        // Filtrer les popups qui ne sont pas affichés
        var popupsNonAffiches = Array.from(popups).filter(function (popup) {
            return popup.style.display === "none";
        });

        // Si au moins un popup n'est pas affiché, choisir celui-ci en priorité
        if (popupsNonAffiches.length > 0) {
            // Cacher tous les popups
            // popups.forEach(function (popup) {
            //     popup.style.display = 'none';
            // });

            // Afficher le premier popup non affiché
            popupsNonAffiches[
                Math.floor(Math.random() * popupsNonAffiches.length)
            ].style.display = "block";

        } else {
            // Sinon, choisir un popup aléatoirement
            var indexPopupAleatoire = Math.floor(Math.random() * popups.length);
            popups[indexPopupAleatoire].style.display = "block";
        }
    }

    // Mettre à jour le suivi du contenu du champ
    dernierContenuChamp = contenuChamp;

    if (cap1 == contenuChamp) {
        field2.style.display = "block";
        ArrayPopup.forEach(pop => {
            pop.style.opacity = "0";
            setTimeout(function () {
                pop.style.display = "none";
            }, 500);
        });

        setTimeout(function () {
            field2.style.opacity = '1';
        }, 10);
    }
}

popups.forEach(function (popup) {
    popup.style.display = "none";
    // Ajouter un gestionnaire d'événements pour fermer le popup lorsqu'il est cliqué
    popup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

let champValue = "";
const correspondanceClavier = {
    a: "a",
    b: "p",
    c: "e",
    d: "q",
    e: "c",
    f: "t",
    g: "j",
    h: "n",
    i: "i",
    j: "g",
    k: "k",
    l: "l",
    m: "m",
    n: "h",
    o: "o",
    p: "b",
    q: "d",
    r: "r",
    s: "s",
    t: "f",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
    y: "y",
    z: "z",
};
var dernierContenu2 = "";
var estEnTrainDeSupprimer2 = false;

// Interaction pour le champ 3 (remapper le clavier)
function remapperClavier() {
    var texteEntree = champ2.value.toLowerCase(); // Convertir en minuscules pour la correspondance

    // Vérifier si le champ est en cours de suppression
    if (dernierContenu2.length > texteEntree.length) {
        estEnTrainDeSupprimer2 = true;
    }

    // Remapper uniquement si le champ n'est pas en cours de suppression
    if (!estEnTrainDeSupprimer2) {
        // Remapper uniquement la dernière lettre
        var derniereLettre = texteEntree.charAt(texteEntree.length - 1);
        var lettreRemappee =
            correspondanceClavier[derniereLettre] || derniereLettre;

        // Mettre à jour le champ avec la lettre remappée
        champ2.value = texteEntree.slice(0, -1) + lettreRemappee;
    }

    // Mettre à jour la variable de suivi
    dernierContenu2 = champ2.value;
    estEnTrainDeSupprimer2 = false;

    if (cap2 == texteEntree) {
        field3.style.display = "block";

        setTimeout(function () {
            field3.style.opacity = '1';
        }, 10);
    }
}
document.getElementById("blurTrigger").addEventListener("focus", function () {
    document.body.classList.add("blurred");
});

document.getElementById("blurTrigger").addEventListener("blur", function () {
    document.body.classList.remove("blurred");
});

document.getElementById("blurTrigger").addEventListener("input", function () {

    var valeurMise = champ3.value.toLowerCase();

    if ("futdcuk" == valeurMise) {

        field4.style.display = "block";
        document.body.classList.remove("blurred");
        setTimeout(function () {
            field4.style.opacity = '1';
        }, 10);
    }
});

function check() {
    let value = champ4.value.toLowerCase();
    var field5 = document.querySelector(".champ5");

    if (cap4 == value) {

        field5.style.display = "block";
        document.body.classList.remove("blurred");


        setTimeout(function () {
            field5.style.opacity = '1';
        }, 10);
    }
}