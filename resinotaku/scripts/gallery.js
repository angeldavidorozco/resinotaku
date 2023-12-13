//JSON Request

const linksURL = "data/pics.json";


async function getInfo() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayInfo(data.gallery); 
}
  
  getInfo();


  const displayInfo = (links) => {

    let carousel = document.querySelector('.carousel');

    var slides = document.createElement("ul");
    slides.className = "slides";
    
    for (let count = 1; count <= links; count++) {
      
      var radioButtons = document.createElement("input");
      radioButtons.type = "radio";
      radioButtons.id = `img-${count}`;
      radioButtons.name = "radio-buttons";
      radioButtons.setAttribute('checked', true);

      var slideContainer = document.createElement("li");
      slideContainer.className = "slide-container";

      var slideImage = document.createElement("div");
      slideImage.className = "slide-image";
        
      var img = document.createElement("img");
      img.src = `styles/images/gallery/${count}.jpg`
      img.height = 50;
      img.width = 70;

      var carouselControls = document.createElement("div");
      carouselControls.className = "carousel-controls"

      var prevSlide = document.createElement("label");
      prevSlide.className = "prev-slide"
      var nextSlide = document.createElement("label");
      prevSlide.className = "next-slide"

      if(count == 1)
      {
        prevSlide.setAttribute('for', `img-${links}`);
        nextSlide.setAttribute('for', `img-2`);
      }
      else if(count == links)
      {
        prevSlide.setAttribute('for', `img-${links - 1}`);
        nextSlide.setAttribute('for', `img-1`);
      }
      else
      {
        prevSlide.setAttribute('for', `img-${count-1}`);
        nextSlide.setAttribute('for', `img-${count+1}`);
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
      slides.appendChild(slideContainer)

      carousel.appendChild(slides);
        
    }

    

}