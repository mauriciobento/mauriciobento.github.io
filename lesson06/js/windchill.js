function windChillCalculation(){

    var t =  parseFloat(document.getElementById("temperature").textContent);
    var s =  parseFloat(document.getElementById("windSpeed").textContent);
    var f = 'N/A';
    if (t <= 50 && s >= 3.0) {
        f = 35.74 + 0.6215*t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
        Math.round(f);
    }
    document.getElementById("windchill").textContent = f;
}