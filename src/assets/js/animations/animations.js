"use strict"

export default function() {

    ///////////////////////////////////////////////////////////////////_____PREVIEW_HEADER_ANIMATION
    const text = document.querySelector("h1");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += `<span style="display:inline-block; --i:${i*0.025}s" class="slide-bottom">${splitText[i]}</span>`;
    }


    ///////////////////////////////////////////////////////////////////_____PREVIEW_CARDS_ANIMATION
    document.querySelectorAll(".preview__card").forEach(item => {
        let x, y;

        function onmousemove(e) {
            let X = e.clientX - x + "px";
            let Y = e.clientY - y + "px";
            item.style = `background: radial-gradient(ellipse at top ${Y} left ${X}, #fff7 10%, #fff4 40%, #fff2);`
        }

        item.addEventListener("mouseenter", function() {
            let rect = this.getBoundingClientRect();
            x = rect.left;
            y = rect.top;
            this.addEventListener("mousemove", onmousemove);
        })
    })


    ///////////////////////////////////////////////////////////////////_____TESTIMONIAL_CARDS_ANIMATION
    const testiomonialHeader = document.querySelector(".testimonial h2");
    testiomonialHeader.classList.add("wow", "animate__animated", "animate__bounceInLeft");
    testiomonialHeader.setAttribute('data-wow-delay', "0.3s");


    const testiomonialCards = document.querySelectorAll(".testimonial__card");
    let cardsDelay = 0.2;
    testiomonialCards.forEach((item) => {
        item.classList.add("wow", "animate__animated", "animate__bounceInLeft");
        item.setAttribute('data-wow-delay', `${cardsDelay}s`);
        cardsDelay = cardsDelay - 0.1;
    })


    ///////////////////////////////////////////////////////////////////_____FEATURES_CARDS_ANIMATION
    const featuresHeader = document.querySelector(".features h2");
    featuresHeader.classList.add("wow", "animate__animated", "animate__zoomIn", "animate__faster");


    const featuresCards = document.querySelectorAll(".features__card");
    let features = 0.1;
    featuresCards.forEach((item) => {
        item.classList.add("wow", "animate__animated", "animate__zoomIn", "animate__faster");
        item.setAttribute('data-wow-delay', `${features}s`);
        features = features + 0.1;
    })


    ///////////////////////////////////////////////////////////////////_____TEAM_CARDS_ANIMATION
    const teamRow = document.querySelector(".team__row");
    teamRow.classList.add("wow", "animate__animated", "animate__slideInUp");

    const teamCards = document.querySelectorAll(".team__card");
    teamCards.forEach((item) => item.classList.add("wow", "animate__animated", "animate__slideInUp"))

}