var data = {
  entries: [],
  editing: null,
  nextEntryId: 1,
  view: null
};

var previousJSON = localStorage.getItem('schedule-info');

if (previousJSON !== null) {
  data = JSON.parse(previousJSON);
}

function saveLocal(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('schedule-info', dataJSON);
}

window.addEventListener('beforeunload', saveLocal);
