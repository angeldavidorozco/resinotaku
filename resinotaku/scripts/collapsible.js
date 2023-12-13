var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    content.classList.toggle('d-none')
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight =  "1000px";
    }
  });
}