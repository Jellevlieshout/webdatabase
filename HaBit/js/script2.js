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

Habit.prototype.getDays = function() {
    return this.days;
}

Habit.prototype.getName = function() {
    return this.name;
}

Habit.prototype.toString = function() {
    alert(this.name);
}

function deleteClick(index) {
    if (confirm("Are you sure you want to delete this HaBit?") === true) {
        catalogus.getHabit(index).removeHabit(false);
        catalogus.removeHabitCatalog(index);
        catalogus.removeHabits();
        catalogus.displayHabits();  
    }

}



Habit.prototype.removeHabit = function(completion) {
    if (completion === false) {
        var position = catalogus.getIndex(this);
        var localName = this.name;
        var oldBox = document.getElementById(localName+"box");
        oldBox.parentNode.removeChild(oldBox);
    
        var oldCheckbox = document.getElementById(localName+"checkbox");
        oldCheckbox.parentNode.removeChild(oldCheckbox);
    
        var oldText = document.getElementById(localName+"text");
        oldText.parentNode.removeChild(oldText);

        var oldTextDays = document.getElementById(localName+"daystext");
        oldTextDays.parentNode.removeChild(oldTextDays);
        
        var oldplus;
        for (var i = 0; i < 10; i++) {
            oldPlus = document.getElementById(i);
            if (oldPlus != null) {
                oldPlus.parentNode.removeChild(oldPlus);
            }
        }

        var oldDelete = document.getElementById(localName+"delete");
        oldDelete.parentNode.removeChild(oldDelete);
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

toDoCatalog.prototype.removeHabitCatalog = function(i) {
    this.elements.splice(i, 1);
    this.catalogcounter = this.catalogcounter - 1;
    this.clean(null);
}

toDoCatalog.prototype.displayHabits = function() {
    if (this.catalogcounter === -1) {
        var plusHeight = 250;
        var plusStyle = "position:absolute; TOP:" + plusHeight +"px; LEFT:270px";
        show_image("HaBit_plusicon.jpg", 40, 40,"Plusicon", plusStyle, 0 , "plusClick()");
    }
    for (var i = 0; i < this.catalogcounter+1; i++) {
        this.elements[i].displayHabit(false);
    }
}


toDoCatalog.prototype.getIndex = function(habit) {
    var indexnum = -1; 
    for (i = 0; i < this.catalogcounter+1; i++) {
        if (this.elements[i] === habit) {
            indexnum = i;
        }
    }
    return indexnum;
}

toDoCatalog.prototype.removeHabits = function() {
    for (var i = 0; i < 200; i++) {
        if (this.elements[i] != null) {
            this.elements[i].removeHabit(false);
        }
    }
}

toDoCatalog.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == deleteValue) {         
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };

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

finishedCatalog.prototype.removeHabitCatalog = function(i) {
    this.elements.splice(i, 1);
    this.catalogcounter = this.catalogcounter - 1;
}

finishedCatalog.prototype.getIndex = function(habit) {
    var indexnum = -1; 
    for (var i = 0; i < this.catalogcounter+1; i++) {
        if (this.elements[i] === habit) {
            indexnum = i;
        }
    }
    return indexnum;
}


var main = function() {
   "use strict";

   window.alert("hello world");
};

//$(document).ready(main);






var catalogus = new toDoCatalog();
var catalogus2 = new finishedCatalog();
function plusClick() {
    var habitName = prompt("Please enter a name for a new HaBit:", "Enter HaBit name");
    var weekDays = prompt("Please indicate on which days this HaBit occurs by specifying each day by its first 2 letters.", "Type days here");
    if (habitName != null && weekDays != null) {
        catalogus.addHabit(new Habit(habitName, false, weekDays));
    }
    var position = catalogus.getCounter();
    catalogus.getHabit(position).displayHabit(false, position);
    
}

Habit.prototype.displayHabit = function(completion) {
    
    if (completion === false) {
        var position = catalogus.getIndex(this);
        this.displayToDoHabit(position);
    }
    else {
        var position = catalogus2.getIndex(this);
        this.displayFinishedHabit(position);
    }

}

Habit.prototype.displayToDoHabit = function() {
    var plusPosition = catalogus.getCounter();
    var position = catalogus.getIndex(this);
    var localName = catalogus.getHabit(position).getName();
    var plusHeight = 250+(80*(position+1));
    var boxHeight = 230+(80*position);
    var checkboxHeight = boxHeight + 30;
    var plusStyle = "position:absolute; TOP:" + plusHeight +"px; LEFT:270px";
    var habitBoxStyle = "position:absolute; TOP:" + boxHeight + "px; LEFT:150px"
    var checkBoxStyle = "position:absolute; TOP:" + checkboxHeight + "px; LEFT:370px"
    var deleteStyle = "position:absolute; TOP:" + checkboxHeight + "px; LEFT: 435px"
    show_image("HaBit_habitboxempty.jpg", 280, 80, "Box", habitBoxStyle, localName+"box");
    show_image("HaBit_checkboxempty.jpg", 20, 20, "checkbox", checkBoxStyle, localName+"checkbox", "checkboxClick(catalogus.getHabit("+ position +"), " + position + ")");
    
    var oldplus;
    for (var i = 0; i < 10; i++) {
        oldPlus = document.getElementById(i);
        if (oldPlus != null) {
            oldPlus.parentNode.removeChild(oldPlus);
        }
    }
    show_image("HaBit_plusicon.jpg", 40, 40,"Plusicon", plusStyle, plusPosition+1, "plusClick()");
    show_image("Habit_deleteicon.jpg", 20, 20, "Deleteicon", deleteStyle, localName+"delete", "deleteClick(" + catalogus.getIndex(this) +")");
    var textHeight = 245 + (80*position)
    var textstyle = "position:absolute; TOP:" + textHeight + "px; LEFT:160px; font-family:'Courier New'"
    var textstyledays = "position:absolute; TOP:" + (textHeight+20) + "px; LEFT:160px; font-family:'Courier New'; font-size:13px"
    show_text(localName, textstyle, "editHabit("+ catalogus.getIndex(this)+")", localName+"text");
    show_text(this.days, textstyledays, undefined, localName+"daystext");
    var plusPosition = catalogus.getCounter();
    console.log(plusPosition);
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
        p.setAttribute("onclick", onclick);
    }

    // This next line will just add it to the <body> tag
    p.appendChild(text);
    document.body.appendChild(p);
}


function checkboxClick(habit) {
    var position = catalogus.getIndex(habit);
    var localName = habit.getName();
    var plusHeight = 250+(80*catalogus.getCounter());
    var plusIconStyle = "position:absolute; TOP:" + plusHeight +"px; LEFT:280px";
    catalogus2.addHabit(habit);
    console.log(catalogus2.getCounter());
    catalogus2.getHabit(catalogus2.getCounter()).displayHabit(true, catalogus2.getCounter());
    show_image("HaBit_plusicon.jpg", 40, 40,"Plusicon", plusIconStyle, catalogus.getCounter(), "plusClick()");

    catalogus.removeHabits();

    var plusPosition = catalogus.getCounter();
    catalogus.removeHabitCatalog(plusPosition);

    catalogus.displayHabits();
    
    
    
}

toDoCatalog.prototype.insertHabit = function(habit, i) {
    this.elements.splice(i,0,habit);
    this.catalogcounter = this.catalogcounter + 1;
}

function editHabit(index) {
    console.log(index);
    
    catalogus.getHabit(index).removeHabit(false);
    var habitName = prompt("Please enter a new name for the HaBit '"+catalogus.getHabit(index).getName() +"'", catalogus.getHabit(index).getName());
    var weekDays = prompt("Please indicate on which days this HaBit occurs by specifying each day by its first 2 letters.", catalogus.getHabit(index).getDays());
    catalogus.removeHabitCatalog(index);
    if (habitName != null && weekDays != null) {
        catalogus.insertHabit(new Habit(habitName, false, weekDays), index);
    }
    console.log(catalogus);
    catalogus.getHabit(index).displayHabit(false, index);

}


//node.js

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "habits"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});