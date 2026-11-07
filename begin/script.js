function display() {
    let input = document.getElementById("inp").value
    document.getElementById("demo").innerHTML = input
    alert(input)
}

function color(col){
    document.getElementById("screen").style.background = col
}