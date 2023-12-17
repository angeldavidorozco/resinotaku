function redirectBasedOnInput() {

    var textboxValue = document.getElementById("descrip").value;
    var name = document.getElementById("fname").value;
    var location = document.getElementById("location").value;

    var message = `Hi! I'm ${name}, from ${location}. And I would like to know ${textboxValue}`;


    var send = encodeURIComponent(message);
    
    window.open(`https://wa.me/5493512125140?text=${send}`);
    console.log(`https://wa.me/5493512125140?text=${send}`);
}