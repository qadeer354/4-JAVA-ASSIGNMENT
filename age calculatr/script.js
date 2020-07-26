function ageFunc() {
    let bornYear = document.getElementById("birthyear").value;
    let date = new Date();
    let currentYear = date.getFullYear();
    // now calculation for Age in Days.
    let ageInDays = (currentYear - bornYear) * 365;
    // creating element h1 and appending it to the div =" result "
    let h1 = document.createElement("h1");
    let text = document.createTextNode('Your are about "' + ageInDays + '" Days Old');
    h1.setAttribute("id", "ageInDay");
    h1.appendChild(text);
    document.getElementById("result").appendChild(h1);
}

function reset() {
    // removing the node
    document.getElementById("ageInDay").remove();
} 