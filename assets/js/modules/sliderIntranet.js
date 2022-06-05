const sliderIntranet = {
    path: "http://localhost/sliderIntranetPictures/assets/img/",

    info: {
        play: "Lecture en cours",
        pause: "Lecture en pause",
    },

    images: [{
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
    ],

    init: () => {

        /* Variables list */
        btPlay = document.querySelector("#slider-hfno .control__play");
        btPause = document.querySelector("#slider-hfno .control__pause");
        sliderStateInfo = document.querySelector("#slider-hfno .control__info");
        i = 0;
        affichage;

        /* Event list */
        btPlay.addEventListener("click", sliderIntranet.playSlider);
        btPause.addEventListener("click", sliderIntranet.pauseSlider);

        /* Create 1st image */
        sliderIntranet.createImg();
        image = document.querySelector("#slider-hfno img");
        fc = document.querySelector("#slider-hfno figcaption");

        /* Slider auto run */
        sliderIntranet.playSlider();
    },

    createImg: () => {
        const imgSrc = sliderIntranet.path + sliderIntranet.images[i].url;
        const figCaption = sliderIntranet.images[i].title;
        const html = `
            <figure class="sld__image">
                <img src="${imgSrc}" alt="diaporama"/>
                <figcaption>${figCaption}</figcaption>
            </figure>
        `;
        $("#slider-hfno").prepend(html);
        i++;
    },

    changeImg: () => {
        image.src = sliderIntranet.path + sliderIntranet.images[i].url;
        fc.innerText = sliderIntranet.images[i].title;
        if (i < sliderIntranet.images.length - 1) {
            i++;
        } else {
            i = 0;
        }
    },

    playSlider: () => {
        affichage = setInterval(sliderIntranet.changeImg, 5000);
        btPlay.disabled = true;
        btPause.disabled = false;
        btPlay.classList.add("active");
        btPause.classList.remove("active");
        sliderStateInfo.innerText = sliderIntranet.info.play;
    },

    pauseSlider: () => {
        clearInterval(affichage);
        btPause.disabled = true;
        btPlay.disabled = false;
        btPause.classList.add("active");
        btPlay.classList.remove("active");
        sliderStateInfo.innerText = sliderIntranet.info.pause;
    },
};

document.addEventListener("DOMContentLoaded", sliderIntranet.init);