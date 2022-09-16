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
var $header = document.querySelector('.modal-header');

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
    description: $description.value,
    id: data.nextEntryId
  };
  if (data.editing !== null) {

  }

  data.nextEntryId++;
  data.entries.push(entry);

  createDom(entry);
  $form.reset();
  $modal.classList.add('hidden');
});

function createDom(entry) {
  var tr = document.createElement('tr');
  tr.classList.add(entry.day);
  tr.setAttribute('data-entry-id', entry.id);

  var time = document.createElement('td');
  time.textContent = entry.time + ':00';
  tr.appendChild(time);

  var description = document.createElement('td');
  var $updateButton = document.createElement('button');
  $updateButton.textContent = 'Update';
  $updateButton.setAttribute('type', 'button');
  $updateButton.className = 'update';
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

$tbody.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    $modal.classList.remove('hidden');
    var realTr = event.target.closest('tr');
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].id === Number(realTr.getAttribute('data-entry-id'))) {
        data.editing = data.entries[i];
      }
    }
    $header.textContent = 'Edit Entry';
    $day.value = data.editing.day;
    $time.value = data.editing.time;
    $description.value = data.editing.description;
  }
});
