function currentDate(){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let d = new Date();
    //alert(days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear())
    document.getElementById("currentDate").innerHTML =  days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
}

function popupAside(){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let d = new Date();
    if(days[d.getDay()] !== "Friday"){
        document.getElementById("banner-aside").style.display = "none";
    }
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
