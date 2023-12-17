function spotForDay() {
    var date = new Date();
    var dayOfWeek = date.getDay(); // This will return a number from 0 (Sunday) to 6 (Saturday)

    // Now you can select a number based on the day of the week
    
    switch(dayOfWeek) {
        case 0:
            type = 'keychains'; // number for Sunday
            break;
        case 1:
            type = 'collectibles'; // number for Monday
            break;
        case 3:
            type = 'mascots'; // number for Tuesday
            break;
        case 2:
            type = 'otaku_wear'; // number for Wednesday
            break;
        case 4:
            type = 'keychains'; // number for Thursday
            break;
        case 5:
            type = 'collectibles'; // number for Friday
            break;
        case 6:
            type = 'otaku_wear'; // number for Saturday
            break;
    }

   
}

let type = '';

const linkspot = "data/products.json";


async function getInfoSpot() {
    const response = await fetch(linkspot);
    const data = await response.json();

    spotForDay()

    displayInfoSpot(data[type]); 
}
  
getInfoSpot();

const displayInfoSpot = (data) => {

    let token = 0;
    
    let subcategoryDiv = document.querySelector(`#spotlight`);

    let spot_prod = document.querySelector(`.spot-prod`);
    spot_prod.innerText = `${type}!`
    let carousel_inner = document.createElement('div');
    carousel_inner.className = 'carousel-inner';

    Object.keys(data).forEach(subcategory => {

        
        for (let count = 1; count <= data[subcategory]; count++) {

            let carousel_item = document.createElement('div');
            
                
              var img = document.createElement("img");
            
              img.src = `styles/images/products/${type}/${subcategory}/${count}.jpg`;
              img.alt = `styles/images/products/${type}/${subcategory}/${count}.jpg`;
             
              img.height = 50;
              img.width = 70;
      
              img.loading = 'lazy'
        
              if(token == 0)
              {
                carousel_item.className = 'carousel-item active';
                token = 1;
              }
              else{
                carousel_item.className = 'carousel-item';
              }
      
        
              carousel_item.appendChild(img);
              carousel_inner.appendChild(carousel_item)
          }
      
          
    });

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
          anext.setAttribute('href', `#spotlight`);
          anext.setAttribute('role', `button`);
          anext.setAttribute('data-slide', `next`);
      
          aprev.className = "carousel-control-prev"
          aprev.setAttribute('href', `#spotlight`);
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
