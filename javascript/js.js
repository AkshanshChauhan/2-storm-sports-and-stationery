function opan_dash() {
    document.getElementById("dash").style.display = "flex";
    document.getElementById("table").style.display = "none";
}

function open_table() {
    document.getElementById("table").style.display = "flex";
    document.getElementById("dash").style.display = "none";
}

function search(value) {
    var textvalue, suggest;
    var filter = value.toUpperCase();
    var sugbox = document.getElementById("show");
    var li = sugbox.getElementsByTagName("li");
    for(let i=0; i<li.length; i++) {
        suggest = li[i].getElementsByTagName("a")[0];
        textvalue = suggest.textContent || suggest.innerText;
        if(textvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "flex";
        } else {
            li[i].style.display = "none";
        }
        if(value == "") {
            sugbox.style.display = "none";
        } else {
            sugbox.style.display = "flex";
        }
    }
}
