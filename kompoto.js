if (document.URL.indexOf("osobowe") != -1) {
    var elements = document.getElementsByClassName('om-offer-item');
    for (var i = 0; i < elements.length; i++) {
        var car = elements[i].getElementsByClassName('om-title')[0];
        var href = car.getElementsByTagName('a')[0].href;
        var btn = document.createElement("BUTTON");
        btn.title = "Dodaj do kompoto";
        btn.onclick = addToKompoto;
        car.appendChild(btn)
    }
}

function addToKompoto(){
    alert('ddoane')
}
