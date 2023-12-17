const listURL = "data/products.json";


async function getInfo() {
    const response = await fetch(listURL);
    const data = await response.json();

    displayInfo(data); 
}
  
getInfo();

const displayInfo = (structure) => {
  Object.keys(structure).forEach(category => {

    
    Object.keys(structure[category]).forEach(subcategory => {

      let subcategoryDiv = document.querySelector(`#${subcategory}`);

      
      for (let count = 1; count <= structure[category][subcategory]; count++) {
            
          var img = document.createElement("img");
          var br = document.createElement("br");
        
          img.src = `styles/images/products/${category}/${subcategory}/${count}.jpg`;
          img.alt = `styles/images/products/${category}/${subcategory}/${count}.jpg`
          img.height = 50;
          img.width = 70;

          img.loading = 'lazy'
    
    
          subcategoryDiv.appendChild(img);
          subcategoryDiv.appendChild(br);
   
      }

    });
  });
};
