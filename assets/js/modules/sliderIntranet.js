const sliderIntranet = {
    path: "http://localhost/sliderIntranetPictures/assets/img/",

    info: {
        play: "Lecture en cours",
        pause: "Lecture en pause",
    },

    init: function() {
        /* Images list */
        let images = [{
                title: "Cathy Bliem",
                url: "01.jpg",
            },
            {
                title: "Hervé Meinrad",
                url: "02.jpg",
            },
            {
                title: "Annie-Claude Manteau",
                url: "03.jpg",
            },
            {
                title: " ",
                url: "04.jpg",
            },
        ];

        /* Variables list */
        let btPlay = document.getElementById("play");
        let btPause = document.getElementById("pause");
        let sliderStateInfo = document.querySelector("#controle p");
        let image;
        let fc;
        let i = 0;
        let affichage;

        /* Functions list */
        const createImg = () => {

            const imgSrc = sliderIntranet.path + images[i].url;
            const figCaption = images[i].title;
            const html = `
                <figure>
                    <img src="${imgSrc}" alt="diaporama"/>
                    <figcaption>${figCaption}</figcaption>
                </figure>
            `;
            $("#box").prepend(html);
            i++;
        };

        const changeImg = () => {
            image.src = sliderIntranet.path + images[i].url;
            fc.innerText = images[i].title;
            if (i < images.length - 1) {
                i++;
            } else {
                i = 0;
            }
        };

        const playSlider = () => {
            affichage = setInterval(changeImg, 5000);
            btPlay.disabled = true;
            btPause.disabled = false;
            btPlay.classList.add("active");
            btPause.classList.remove("active");
            sliderStateInfo.innerText = sliderIntranet.info.play;
        };

        const pauseSlider = () => {
            clearInterval(affichage);
            btPause.disabled = true;
            btPlay.disabled = false;
            btPause.classList.add("active");
            btPlay.classList.remove("active");
            sliderStateInfo.innerText = sliderIntranet.info.pause;
        };

        /* Event list */
        btPlay.addEventListener("click", playSlider);
        btPause.addEventListener("click", pauseSlider);

        /* Create 1st image */
        createImg();
        image = document.querySelector("#box img");
        fc = document.querySelector("#box figcaption");

        /* Slider auto run */
        playSlider();
        console.log("test");
    },
};

document.addEventListener("DOMContentLoaded", sliderIntranet.init);