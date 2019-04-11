// $(document).ready(function() {
//   var topics = [];
//   var output = $('#output');
//   var inputInfo1 = document.getElementById('#inputInfo1');
//   var inputInfo2 = document.getElementById('#inputInfo2');
//   var inputInfo3 = document.getElementById('#inputInfo3');
//   var text = '';

//   $('#addInfo').on('click', function(event) {
//     event.preventDefault();

//     text += inputInfo1.val() + ' ' + inputInfo2.val() + ' ' + inputInfo3.val();
//     console.log(text);
    
   
 
//       displayInfo();
//   });

//   function displayInfo() {
//     console.log('hello');
//   }
// });
var table = document.getElementById('table');
var trHeader = ['Name', 'Team', 'Number'];
var tableHead ='';
var tableBody = '';
var i;

for(var i=0; i < trHeader.length; i++) {
  tableHead += '<tr><th>' + trHeader[i] + '</th></tr>';
}

table.innerHTML = tableHead; 
console.log(tableHead);

function addInfo() {

  var input1 = document.getElementById('inputInfo1').value;
  var input2 = document.getElementById('inputInfo2').value;
  var input3 = document.getElementById('inputInfo3').value;

  var tr = document.createElement('tr');
  var text='';

  console.log(input1, input2, input3);

  if(input1 == '' || input2 == '' || input3 == '' || input3 < 1 || input3 > 500) {

    alert('Please field in your Name, Team & Ticket Number!');
  }else {

    text+= '<td>' + input1 + '</td>' + ' ' + '<td>' + input2 + '</td>' + ' ' + '<td>' + input3 + '</td>';
  }

    tr.className = 'blue';

  tr.innerHTML = text;
  table.appendChild(tr);

  console.log(table);
}













