document.querySelector('.addTask').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('submitTask').removeAttribute('data-dismiss', 'modal');
});

i = 0;
var tbodySelector = document.querySelector("tbody");
var tbodyChildren = tbodySelector.children;

//boucle pour trouver si l'element exsiste déjà && si la deadline est la mm

function addRow(title, deadline, status) {
  tbodySelector.innerHTML += '<tr id="'+ title +'"><td class="titleTask"><p>' + title + '</p></td><td class="deadlineTask" id="deadlineTask' + i + '"><p>' + deadline + '</p></td><td class="statusTask"><p>' + status + '</p></td><td class="deleteTask">x</td></tr>';
  i++;
  console.log(i);
}

document.getElementById('submitTask').addEventListener('click', (e) => {
  e.preventDefault();
  var titleTask = document.getElementById('titleInputTask').value;
  const deadlineTask = document.getElementById('deadlineInputTask').value;
  const statusTask = document.getElementById("statusSelecteTask");
  const textstatusTask = statusTask.options[statusTask.selectedIndex].text;
  var body = document.querySelector('body');
  var modalCenter = document.getElementById('exampleModalCenter');
  var xDeleteTask = document.querySelectorAll('.deleteTask');
  var emptyTitle = document.getElementById("emptyTitle");
  var emptyDeadline = document.getElementById("emptydeadline");

  console.log(deadlineTask);

  if (document.getElementById(titleTask) && (document.querySelector("#" + titleTask + " .deadlineTask").textContent) == (deadlineTask)) {
    alert("This task exist alredy please try again")
    
  } else if (titleTask == '' && !deadlineTask == '') {
    document.getElementById("emptyTitle").style.cssText = "display: block;";
    document.getElementById("emptydeadline").style.cssText = "display: none;";

  } else if (deadlineTask == '' && !titleTask == '') {
    document.getElementById("emptydeadline").style.cssText = "display: block;";
    document.getElementById("emptyTitle").style.cssText = "display: none;";

  } else if (deadlineTask == '' && titleTask == '') {
    document.getElementById("emptyTitle").style.cssText = "display: block;";
    document.getElementById("emptydeadline").style.cssText = "display: block;";

  } else {
    modalCenter.style.cssText = "display: none;";
    modalCenter.classList.remove("show");
    body.classList.remove("modal-open");
    modalCenter.setAttribute('aria-hidden', 'true');
    document.getElementById('submitTask').setAttribute('data-dismiss', 'modal');
    addRow(titleTask, deadlineTask, textstatusTask);

    xDeleteTask.forEach(e => {
      e.addEventListener('click', (e) => {
        var tdRow = document.getElementById(titleTask);
        var td = e.target.parentElement;
        var tr = td.parentNode;
        console.log(td);
        console.log(tr);
        tr.removeChild(td);
      });
    });
    emptyTitle.style.cssText = "display: none;";
    emptyDeadline.style.cssText = "display: none;";
    document.getElementById('titleInputTask').value = "";
    document.getElementById('deadlineInputTask').value = "";
    document.getElementById('statusSelecteTask').value = "0";

  }


});