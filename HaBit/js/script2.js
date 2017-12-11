function imageClick(url) {
    window.location.href = url;
}


//Class: Day
function Day(date, todo, finished) {
    this.date = date;
    this.todo = todo;
    this.finished = finished;
}

//Class: Habit
function Habit(name, completion, days) {
    this.name = name;
    this.completion = completion;
    this.days = days;
}

Habit.prototype.getName = function() {
    return this.name;
}

Habit.prototype.toString = function() {
    alert(this.name);
}

Habit.prototype.removeHabit = function(completion, position) {
    if (completion === false) {
        var localName = this.name;
        var oldBox = document.getElementById(localName+"box");
        oldBox.parentNode.removeChild(oldBox);
    
        var oldCheckbox = document.getElementById(localName+"checkbox");
        oldCheckbox.parentNode.removeChild(oldCheckbox);
    
        var oldText = document.getElementById(localName+"text");
        oldText.parentNode.removeChild(oldText);
    
        var oldCheckboxChecked = document.getElementById(localName+"checkboxchecked");
        oldCheckboxChecked.parentNode.removeChild(oldCheckboxChecked);
        
        var oldPlus = document.getElementById(position+1);
        console.log(position);
        oldPlus.parentNode.removeChild(oldPlus);
    }
    else {
        //
    }
    
   
}

//Class: toDoCatalog
function toDoCatalog() {
    this.elements = [];
    this.catalogcounter = -1;
}

toDoCatalog.prototype.addHabit = function(habit) {
    this.elements.push(habit);
    this.catalogcounter = this.catalogcounter + 1;
}

toDoCatalog.prototype.getHabit = function(i) {
    return this.elements[i];
}

toDoCatalog.prototype.getCounter = function() {
    return this.catalogcounter;
}

toDoCatalog.prototype.removeHabit = function(i) {
    this.elements[i].removeHabit(false, this.catalogcounter);
    this.elements.splice(i, 1);
    this.catalogcounter = this.catalogcounter - 1;
}

toDoCatalog.prototype.displayHabits = function() {
    for (var i = 0; i < this.catalogcounter+1; i++) {
        this.elements[i].displayHabit(false, i);
    }
}

//Class: finishedCatalog
function finishedCatalog() {
    this.elements = [];
    this.catalogcounter = -1;
}

finishedCatalog.prototype.addHabit = function(habit) {
   this.elements.push(habit);
   this.catalogcounter = this.catalogcounter + 1;
}

finishedCatalog.prototype.getHabit = function(i) {
    return this.elements[i];
}

finishedCatalog.prototype.getCounter = function() {
    return this.catalogcounter;
}

finishedCatalog.prototype.removeHabit = function(i) {
    this.elements[i].removeHabit(true, this.catalogcounter);
    this.elements.splice(i, 1);
    this.catalogcounter = this.catalogcounter - 1;
}


var main = function() {
   "use strict";

   window.alert("hello world");
};

//$(document).ready(main);






var catalogus = new toDoCatalog();
var catalogus2 = new finishedCatalog();
var counter = 1;
var counter2 = 0;
var plusClickCounter = 0;
function plusClick() {
    catalogus.getCounter();
    var habitName = prompt("Please enter a name for a new HaBit:", "Enter HaBit name");
    var weekDays = prompt("Please indicate on which days this HaBit occurs by specifying each day by its first 2 letters.", "Type days here");
    if (habitName != null && weekDays != null) {
        catalogus.addHabit(new Habit(habitName, false, weekDays));
    }
    var position = catalogus.getCounter();
    catalogus.getHabit(position).displayHabit(false, position);
    
}

Habit.prototype.displayHabit = function(completion, position) {
    if (completion === false) {
        this.displayToDoHabit(position);
    }
    else {
        this.displayFinishedHabit(position);
    }

}

Habit.prototype.displayToDoHabit = function(position) {
    var localName = catalogus.getHabit(position).getName();
    var plusHeight = 250+(80*(position+1));
    var boxHeight = 230+(80*position);
    var checkboxHeight = boxHeight + 30;
    var plusStyle = "position:absolute; TOP:" + plusHeight +"px; LEFT:270px";
    var habitBoxStyle = "position:absolute; TOP:" + boxHeight + "px; LEFT:150px"
    var checkBoxStyle = "position:absolute; TOP:" + checkboxHeight + "px; LEFT:370px"
    var deleteStyle = "position:absolute; TOP:" + checkboxHeight + "px; LEFT: 435px"
    catalogus.getHabit(catalogus.getCounter()).toString();
    show_image("HaBit_habitboxempty.jpg", 280, 80, "Box", habitBoxStyle, localName+"box");
    show_image("HaBit_checkboxempty.jpg", 20, 20, "checkbox", checkBoxStyle, localName+"checkbox", "checkboxClick(catalogus.getHabit("+ position +"), " + position + ")");
    show_image("HaBit_plusicon.jpg", 40, 40,"Plusicon", plusStyle, position+1, "plusClick()");
    show_image("Habit_deleteicon.jpg", 20, 20, "Deleteicon", deleteStyle, position, "deleteClick()");
    var textHeight = 245 + (80*position)
    var textstyle = "position:absolute; TOP:" + textHeight + "px; LEFT:160px; font-family:'Courier New'"
    show_text(localName, textstyle, undefined, localName+"text");
    var oldPlus = document.getElementById(position);
    oldPlus.parentNode.removeChild(oldPlus);
}

Habit.prototype.displayFinishedHabit = function(position) {
    var localName = this.getName();
    var boxHeight = 230+(80*position);
    var checkboxHeight = boxHeight + 30;
    var style3 = "position:absolute; TOP:" + boxHeight + "px; LEFT:800px";
    var stylebox = "position:absolute; TOP:" + checkboxHeight + "px; LEFT:1030px";
    var textHeight = 245 + (80*position);
    var textstyle = "position:absolute; TOP:" + textHeight + "px; LEFT:810px; font-family:'Courier New'";
    show_image("HaBit_habitboxempty.jpg", 280, 80, "Box", style3, this.getName()+"box");
    show_image("HaBit_checkboxchecked.jpg", 20, 20, "checkbox", stylebox, this.getName()+"checkboxchecked");
    show_text(this.getName(), textstyle, undefined, this.getName()+"text");
}


function show_image(src, width, height, alt, style, id, onclick, map) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = id;
    img.setAttribute("style", style);
    if (onclick != undefined) {
        img.setAttribute("onclick", onclick);
    }
    if (map != undefined) {
        var mapname = "#" + map;
        img.setAttribute("usemap", mapname);
    }

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function getTime() {
    n =  new Date();
    y = n.getYear() - 100;
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
}

function show_text(text, style, onclick, id) {
    var p = document.createElement("p");
    var text = document.createTextNode(text);
    p.setAttribute("style", style);
    p.id = id;
    if (onclick != undefined) {
        text.setAttribute("onclick", onclick);
    }

    // This next line will just add it to the <body> tag
    p.appendChild(text);
    document.body.appendChild(p);
}


function checkboxClick(habit, position) {
    var localName = habit.getName();
    var stylebox = "position:absolute; TOP:" + checkboxHeight + "px; LEFT:370px";
    var imageHeight = 250+(80*position+1);
    var plusHeight = 250+(80*catalogus.getCounter());
    var plusIconStyle = "position:absolute; TOP:" + plusHeight +"px; LEFT:280px";
    var boxHeight = 230+(80*position);
    var checkboxHeight = boxHeight + 30;
    var style2 = "position:absolute; TOP:" + imageHeight +"px; LEFT:550px";
    var style3 = "position:absolute; TOP:" + boxHeight + "px; LEFT:800px"
    var stylebox = "position:absolute; TOP:" + checkboxHeight + "px; LEFT:1030px"
    var textHeight = 245 + (80*position)
    show_image("HaBit_checkboxchecked.jpg", 20, 20, "checkbox", stylebox, localName+"checkboxchecked");
   
    catalogus.removeHabit(position);
    catalogus2.addHabit(habit);
    console.log(catalogus2.getCounter());
    catalogus2.getHabit(catalogus2.getCounter()).displayHabit(true, catalogus2.getCounter());
    show_image("HaBit_plusicon.jpg", 40, 40,"Plusicon", plusIconStyle, catalogus.getCounter()+1, "plusClick()");
    catalogus.displayHabits();
    
    
}
