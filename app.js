function antwort1() {
  var text1 = document.getElementById("antwort1").className;
  if (text1 == "d-none") {
    document.getElementById("antwort1").className = "";
    document.getElementById("antwort1").className += "d-block";
  } else if (text1 == "d-block") {
    document.getElementById("antwort1").className = "";
    document.getElementById("antwort1").className += "d-none";
  }
}

function antwort2() {
  var text2 = document.getElementById("antwort2").className;
  if (text2 == "d-none") {
    document.getElementById("antwort2").className = "";
    document.getElementById("antwort2").className += "d-block";
  } else if (text2 == "d-block") {
    document.getElementById("antwort2").className = "";
    document.getElementById("antwort2").className += "d-none";
  }
}
