function date() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(document.getElementById("date").value);
    document.getElementById("year").innerHTML = "The Year Of Birth: " + d.getFullYear();
    document.getElementById("month").innerHTML = "The Month Of Birth: " + months[d.getMonth()]; +parseInt(1)
    document.getElementById("day").innerHTML = "The Day Of Birth: " + d.getDate();
}