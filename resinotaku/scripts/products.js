const linksURL = "data/products.json";


async function getInfo() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayInfo(data); 
}
  
getInfo();

const displayInfo = (structure) => {
  Object.keys(structure).forEach(category => {

    
    Object.keys(structure[category]).forEach(subcategory => {

      let subcategoryDiv = document.querySelector(`#${subcategory}`);

      
      let carousel_inner = document.createElement('div');
      carousel_inner.className = 'carousel-inner';

      
      
      for (let count = 1; count <= structure[category][subcategory]; count++) {

        let carousel_item = document.createElement('div');
        
            
          var img = document.createElement("img");
        
          img.src = `styles/images/products/${category}/${subcategory}/${count}.jpg`;
          img.alt = `styles/images/products/${category}/${subcategory}/${count}.jpg`
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
      anext.setAttribute('href', `#${subcategory}`);
      anext.setAttribute('role', `button`);
      anext.setAttribute('data-slide', `next`);

      aprev.className = "carousel-control-prev"
      aprev.setAttribute('href', `#${subcategory}`);
      aprev.setAttribute('role', `button`);
      aprev.setAttribute('data-slide', `prev`);


      aprev.appendChild(span1);
      aprev.appendChild(span2);

      anext.appendChild(span3);
      anext.appendChild(span4);

      subcategoryDiv.appendChild(carousel_inner)
      subcategoryDiv.appendChild(aprev);
      subcategoryDiv.appendChild(anext);
    });
  });
};

$('.caroulsel').carousel({
  interval: false
});


/*
const displayInfo = (structure) => {
    Object.keys(structure).forEach(category => {

      
      Object.keys(structure[category]).forEach(subcategory => {

        let subcategoryDiv = document.querySelector(`#${subcategory}`);

        let title = document.createElement('p');
        title.className = 'card-title'

        title.innerHTML = subcategory

        let hr = document.createElement('hr');
        
        let carousel = document.createElement('div');
        carousel.className = 'carousel';
        
        let slides = document.createElement('ul');
        slides.className = 'slides';
        
        for (let count = 1; count <= structure[category][subcategory]; count++) {
            var radioButtons = document.createElement("input");
            radioButtons.type = "radio";
            radioButtons.id = `img-${count}-${subcategory}`;
            radioButtons.name = "radio-buttons";
            radioButtons.setAttribute('checked', true);
      
            var slideContainer = document.createElement("li");
            slideContainer.className = "slide-container";
      
            var slideImage = document.createElement("div");
            slideImage.className = "slide-image";
              
            var img = document.createElement("img");
          
            img.src = `styles/images/products/${category}/${subcategory}/${count}.jpg`;
          
            img.height = 50;
            img.width = 70;

            img.loading = 'lazy'
      
            var carouselControls = document.createElement("div");
            carouselControls.className = "carousel-controls"
      
            var prevSlide = document.createElement("label");
            var nextSlide = document.createElement("label");
      
            if(count == 1)
            {
              prevSlide.setAttribute('for', `img-${structure[category][subcategory]}-${subcategory}`);
              nextSlide.setAttribute('for', `img-2-${subcategory}`);
            }
            else if(count == structure[category][subcategory])
            {
              prevSlide.setAttribute('for', `img-${structure[category][subcategory] - 1}-${subcategory}`);
              nextSlide.setAttribute('for', `img-1-${subcategory}`);
            }
            else
            {
              prevSlide.setAttribute('for', `img-${count-1}-${subcategory}`);
              nextSlide.setAttribute('for', `img-${count+1}-${subcategory}`);
            }
      
            var span1 = document.createElement("span");
            span1.innerHTML = "&lsaquo;";
            var span2 = document.createElement("span");
            span2.innerHTML = "&rsaquo;";
      
      
            prevSlide.appendChild(span1);
            carouselControls.appendChild(prevSlide);
      
            nextSlide.appendChild(span2);      
            carouselControls.appendChild(nextSlide);
            
      
            
            slideImage.appendChild(img);
      
      
            slideContainer.appendChild(slideImage);
            slideContainer.appendChild(carouselControls);
          
            slides.appendChild(radioButtons);
            slides.appendChild(slideContainer);

            carousel.appendChild(slides);
            subcategoryDiv.appendChild(title);
            subcategoryDiv.appendChild(hr);
            subcategoryDiv.appendChild(carousel);
        }
        
      });
    });
  };
  */