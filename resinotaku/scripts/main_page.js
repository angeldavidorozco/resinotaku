const linkMain = "data/products.json";


async function getInfo() {
    const response = await fetch(linkMain);
    const data = await response.json();

    displayInfo(data.gallery); 
}
  
getInfo();

const displayInfo = (amount) => {
    
    let subcategoryDiv = document.querySelector(`#gallery`);

      
    let carousel_inner = document.createElement('div');
    carousel_inner.className = 'carousel-inner';

    
    
    for (let count = 1; count <= amount; count++) {

      let carousel_item = document.createElement('div');
      
          
        var img = document.createElement("img");
      
        img.src = `styles/images/gallery/${count}.jpg`;
        img.alt = `styles/images/gallery/${count}.jpg`;
        img.height = 50;
        img.width = 70;

        img.loading = 'lazy'
  
        if(count == 1)
        {
          carousel_item.className = 'carousel-item active'
        }
        else{
          carousel_item.className = 'carousel-item'
        }

  
        carousel_item.appendChild(img);
        carousel_inner.appendChild(carousel_item)
    }

    let span1 = document.createElement("span");
    span1.className = "carousel-control-prev-icon"
    span1.setAttribute('aria-hidden', `true`);

    let span2 = document.createElement("span");
    span2.className = "sr-only"
    span2.innerText = "Previous"

    let span3 = document.createElement("span");
    span3.className = "carousel-control-next-icon"
    span3.setAttribute('aria-hidden', `true`);

    let span4 = document.createElement("span");
    span4.className = "sr-only"
    span4.innerText = "Next"


    let anext = document.createElement("a");
    let aprev = document.createElement("a");

    anext.className = "carousel-control-next"
    anext.setAttribute('href', `#gallery`);
    anext.setAttribute('role', `button`);
    anext.setAttribute('data-slide', `next`);

    aprev.className = "carousel-control-prev"
    aprev.setAttribute('href', `#gallery`);
    aprev.setAttribute('role', `button`);
    aprev.setAttribute('data-slide', `prev`);


    aprev.appendChild(span1);
    aprev.appendChild(span2);

    anext.appendChild(span3);
    anext.appendChild(span4);

    subcategoryDiv.appendChild(carousel_inner)
    subcategoryDiv.appendChild(aprev);
    subcategoryDiv.appendChild(anext);
};

$('.caroulsel').carousel({
  interval: false
});