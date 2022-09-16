var $addEntry = document.querySelector('.add-entry');
var $modal = document.querySelector('.modal-background');
var $form = document.querySelector('.entry-form');
var $day = document.querySelector('.day');
var $time = document.querySelector('.time');
var $description = document.querySelector('.description');
var $cancel = document.querySelector('.cancel');

$addEntry.addEventListener('click', function (event) {
  $modal.classList.remove('hidden');
});

$cancel.addEventListener('click', function (event) {
  $modal.classList.add('hidden');
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
    day: $day.value,
    time: $time.value,
    description: $description.value
  };
  data.entries.push(entry);
  $modal.classList.add('hidden');
});

function createDom(entry) {
  var tr = document.createElement('tr');

  var time = document.createElement('td');
  time.textContent = entry.time;
  tr.appendChild(time);

  var description = document.createElement('td');
  description.textContent = entry.description;
  tr.appendChild(description);
  return tr;
}
