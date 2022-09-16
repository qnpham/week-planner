var $addEntry = document.querySelector('.add-entry');
var $modal = document.querySelector('.modal-background');
var $form = document.querySelector('.entry-form');
var $day = document.querySelector('.day');
var $time = document.querySelector('.time');
var $description = document.querySelector('.description');
$addEntry.addEventListener('click', function (event) {
  $modal.classList.remove('hidden');
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
    day: $day.value,
    time: $time.value,
    description: $description.value
  };
  data.entries.push(entry);
  console.log(data);
});
