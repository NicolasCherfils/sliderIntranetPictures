const sliderIntranet = {

    path: "assets/img/",

    init: function() {
        /* Liste des images */
        let images = [{
                title: "Cathy Bliem",
                url: "01.jpg"
            },
            {
                title: "Hervé Meinrad",
                url: "02.jpg"
            },
            {
                title: "Annie-Claude Manteau",
                url: "03.jpg"
            },
            {
                title: " ",
                url: "04.jpg"
            }
        ];

        /* Liste des variables */
        let bt_play = document.getElementById("play");
        let bt_pause = document.getElementById("pause");
        let p = document.querySelector("#controle p");
        let image = document.querySelector("#box img");
        let fc = document.querySelector("#box figcaption");
        let i = 1;
        let affichage;

        /* Liste des fonctions */
        const CHANGERIMG = () => {
            image.src = sliderIntranet.path + images[i].url;
            fc.innerText = images[i].title;
            if (i < images.length - 1) {
                i++;
            } else {
                i = 0;
            }
        };
        const PLAY = () => {
            affichage = setInterval(CHANGERIMG, 5000);
            bt_play.disabled = true;
            bt_pause.disabled = false;
            bt_play.classList.add("active");
            bt_pause.classList.remove("active");
            p.innerText = "Lecture en cours";
        };
        const PAUSE = () => {
            clearInterval(affichage);
            bt_pause.disabled = true;
            bt_play.disabled = false;
            bt_pause.classList.add("active");
            bt_play.classList.remove("active");
            p.innerText = "Lecture en pause";
        };

        /* Liste des événements */
        bt_play.addEventListener("click", PLAY);
        bt_pause.addEventListener("click", PAUSE);
    },
};

document.addEventListener("DOMContentLoaded", sliderIntranet.init);