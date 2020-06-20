var allSelectedSeats = [];
var selectedClass = ''
var priceConfig = {
    'gold' : 200,
    'diamond' : 500
}

var seatConfig = {
    'gold': ['A', 'B', 'C', 'D', 'E'],
    'diamond': ['F', 'G', 'H', 'I', 'J']
}

function selectedValue(event){

    var currentVal = event.target.value;
    var seatRow = currentVal[0];
    if(seatConfig['gold'].indexOf(seatRow) != -1){
        currentSeatClass = 'gold'
    }
    else {
        currentSeatClass = 'diamond'
    }

    if (selectedClass && selectedClass != currentSeatClass){
        alert('Cannot select seat of another class', selectedClass)
        event.target.checked = false
    } else {
        selectedClass = currentSeatClass;   
        var idx = allSelectedSeats.indexOf(currentVal)
        if( idx != -1){
            allSelectedSeats.splice(idx)
        } else {
            allSelectedSeats.push(currentVal)

        }
        $('#selected-seats').html('Seats Selected :' + allSelectedSeats);
        $('#total-price').html(' Total Price : ' + (priceConfig[selectedClass] * allSelectedSeats.length));

    }
}

$( document ).ready(function() {
    var seats ='',seatNumbers='';
    var seatRow =["A","B","C","D","E","gap","F","G","H","I","J"];

    for (let i = 0; i < seatRow.length; i++) {

        if(seatRow[i] ==='gap'){
            seats += '<tr class="seatVGap"></tr>'
        }else{
            seats += '<tr>'
            for (let j = 0; j < 12; j++) {
                if(j == 0){
                    seats += '<td>'+seatRow[i]+'</td>'
                }else if(seatRow[i] !== 'A' && j === 6){
                    seats += '<td></td>'
                }else if(seatRow[i] === 'A' && j === 6){
                    seats += '<td class="seatGap"></td>'
                }else if(seatRow[i] == 'E' ||  seatRow[i] == 'I'){
                    seats += '<td><input type="checkbox" class="greyBox" value='+seatRow[i]+j+'></td>'
                }else{
                    seats += '<td><input type="checkbox" class="seats" onClick="selectedValue(event)" value='+seatRow[i]+j+'></td>'
                }
            }
            seats += '</tr>'
        }
    }
    $("#seatsBlock").append(seats);

    for (let i = 0; i < 12; i++) {
        if(i == 0 || i == 6 ){
            seatNumbers += '<td></td>';
        }else if(i >=6 ){
            seatNumbers += '<td>'+(i-1)+'</td>';
        }else{
            seatNumbers += '<td>'+i+'</td>';
        }
    }
    $('#rowNumber').append(seatNumbers);
});