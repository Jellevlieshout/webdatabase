function getTime() {
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}

function Date(dayName, day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.dayName = dayName;
}

function getDay() {
    return this.day;
}

function getMonth() {
    return this.month;
}

function getYear() {
    return this.year;
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}