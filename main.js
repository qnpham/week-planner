/* global data */

var $addEntry = document.querySelector('.add-entry');
var $modal = document.querySelector('.modal-background');
var $form = document.querySelector('.entry-form');
var $day = document.querySelector('.day');
var $time = document.querySelector('.time');
var $description = document.querySelector('.description');
var $cancel = document.querySelector('.cancel');
var $schedule = document.querySelector('.schedule');
var $span = document.querySelector('.day-title');
var $days = document.querySelector('.btn-container');
var $tbody = document.querySelector('tbody');

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

  createDom(entry);
  $form.reset();
  $modal.classList.add('hidden');
});

function createDom(entry) {
  var tr = document.createElement('tr');
  tr.classList.add(entry.day);

  var time = document.createElement('td');
  time.textContent = entry.time + ':00';
  tr.appendChild(time);

  var description = document.createElement('td');
  var $updateButton = document.createElement('button');
  $updateButton.textContent = 'Update';
  $updateButton.setAttribute('type', 'button');
  console.log($updateButton);
  description.textContent = entry.description;
  description.appendChild($updateButton);
  tr.appendChild(description);

  $schedule.appendChild(tr);

  if (entry.day !== $span.textContent.toLowerCase()) {
    tr.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', reload);

function reload(event) {
  for (var i = 0; i < data.entries.length; i++) {
    createDom(data.entries[i]);
  }
}

$days.addEventListener('click', viewSwap);

function viewSwap(event) {
  if (event.target.className === 'week column-7') {
    $span.textContent = event.target.textContent;
    var $tr = $tbody.querySelectorAll('tr');
    for (var i = 0; i < $tr.length; i++) {
      if ($tr[i].className.includes($span.textContent.toLowerCase())) {

        $tr[i].classList.remove('hidden');
      } else {
        $tr[i].classList.add('hidden');
      }
    }
  }
}
