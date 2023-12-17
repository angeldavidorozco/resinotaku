const linksCalendar = "data/events.json";


async function getInfo() {
    const response = await fetch(linksCalendar);
    const data = await response.json();

    displayInfoCalendar(data); 
}
  
getInfo();

let events = document.getElementById("eventos");

const displayInfoCalendar = (structure) => {
  Object.keys(structure).forEach(months => {

    let title = document.createElement("h4");
    let ul = document.createElement("ul");

    title.innerText = months
    
    Object.keys(structure[months]).forEach(date => {
        
        let li = document.createElement("li");

        li.innerHTML = 
        `
        <h4>${structure[months][date][0]}:</h4>
        <br>
        <h5>¿Donde? 🗺 -> ${structure[months][date][3]}</h5>
        <h5>¿Cuando? 📅 -> ${structure[months][date][1]} ${structure[months][date][2]}</h5>
        <br>
        `
        
        ul.appendChild(li);
        

      });

        events.appendChild(title);
        events.appendChild(ul);
    
  });
};