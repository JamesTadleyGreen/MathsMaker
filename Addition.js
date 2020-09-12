//Function to create the whole table
function create_table(dif) {
    var tble = document.getElementById("whole");
    var new_tble = document.createElement("TABLE");
    var tbdy = document.createElement('tbody');
    for (i=0; i<5; i++){
        var tr = document.createElement('tr');
        for (j=0; j<5; j++) {
            var td = document.createElement('td');
            x = Math.floor(Math.random()*10**dif*10**digitSlider.value)/10**digitSlider.value
            y = Math.floor(Math.random()*10**dif*10**digitSlider.value)/10**digitSlider.value
            td.innerHTML = single_problem(x, y, digitSlider.value)
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    new_tble.appendChild(tbdy);
    tble.innerHTML = new_tble.innerHTML
}


//Function to create each cell
function single_problem(x ,y, nodigits) {
    return '<table class="problem">' +
                        '<tr><td></td><td>' + x.toFixed(nodigits) + '</td></tr>' +
                        '<tr><td style="border-bottom: thin solid;">' + '+' + '</td><td style="border-bottom: thin solid;">' + y.toFixed(nodigits) + '</td></tr>' +
                        '<tr><td></td><td style="color: #fff;" id="answer">' + (x+y).toFixed(nodigits) + '</td></tr>' +
                        '</table>';
    }

//Silder
var slider = $( "#difRange")[0];
var output = document.getElementById("demo");
var digitSlider = $( "#digitRange")[0];
var digitOutput = document.getElementById("digitLabel");
output.innerHTML = "Sums including numbers with up to " + slider.value + " digits."; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = "Sums including numbers with up to " + this.value + " digits.";
    create_table(this.value)
    $("input[type=checkbox]").prop('checked', false)
}

// Update the current slider value (each time you drag the slider handle)
digitSlider.oninput = function() {
    digitOutput.innerHTML = "Number of decimal places is " + this.value + ".";
    create_table(slider.value)
    $("input[type=checkbox]").prop('checked', false)
}


//Checkbox
$("input[type=checkbox]").on('change',function(){
    if($(this).prop('checked')) 
    {
        $( "td#answer" ).css('color', '#000');
    }
    else{
        $( "td#answer" ).css('color', '#fff');
    }
});

create_table(5);