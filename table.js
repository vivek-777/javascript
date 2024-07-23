// import './style.css';

const apiCall = async () => {
  const result = await fetch('https://api.spacexdata.com/v4/launches/');
  const res = await result.json();
  return res;
};

function addTableData(data, element) {
  var td = document.createElement(element);
  td.innerHTML = data;
  return td;
}

function addTableRow(item, element) {
  var tr = document.createElement('tr');
  tr.appendChild(addTableData(item.name, element));
  tr.appendChild(addTableData(item.rocket, element));
  tr.appendChild(addTableData(item.success, element));
  return tr;
}

async function tableCreate() {
  let list = await apiCall();
  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  var app = document.getElementById('app');
  app.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);

  thead.appendChild(
    addTableRow(
      {
        name: 'Name',
        rocket: 'Rocket',
        success: 'Success',
      },
      'th'
    )
  );

  list.forEach((item) => {
    tbody.appendChild(addTableRow(item, 'td'));
  });
}

tableCreate();

// Write Javascript code!
const appDiv = document.getElementById('app');



/////////////////////////////////////////////sort///////////////////////////////////////////////////

var objs = [ 
  { first_nom: 'Lazslo', last_nom: 'Jamf'     },
  { first_nom: 'Pig',    last_nom: 'Bodine'   },
  { first_nom: 'Pirate', last_nom: 'Prentice' }
];

// function compare( a, b ) {
//   if ( a.last_nom < b.last_nom ){
//     return -1;
//   }
//   if ( a.last_nom > b.last_nom ){
//     return 1;
//   }
//   return 0;
// }

// objs.sort( compare );