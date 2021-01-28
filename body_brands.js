customFunction.drawImagesBlocks = function (ImagesBlock) {
    let imagesBlocks = "";
    for (const [idx1, value] of ImagesBlock.entries()) {
     
        imagesBlocks += `
         
        <a class="portfolio__item"
        href="${value.link}">
        <div class="portfolio__image"
            style="background-image: url(${value.img})">
        </div>
        <div class="portfolio__content">
            <h3 class="portfolio__title">${value.title}</h3>
            <h4 class="portfolio__price">
            ${value.price}
                <span class="portfolio__price-details" id="if-price-drop">
                    <span class="portfolio__price-before">${value.price_before || ""}</span> ${value.price_off?'•': ''}
                    <span class="portfolio__price-off">${value.price_off || ""}</span>
                </span>
            </h4>
        </div>
    </a>`;
    }
    if(document.getElementById("portfolio"))
    document.getElementById("portfolio").innerHTML += imagesBlocks;
  };