document.querySelector('.addTask').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('submitTask').removeAttribute('data-dismiss', 'modal');
});

i = 0;
var tbodySelector = document.querySelector("tbody");
//boucle pour trouver si l'element exsiste déjà && si la deadline est la mm


function addRow(title, deadline, status) {
  tbodySelector.innerHTML += '<tr id="'+ title +'"><td class="titleTask"><p>' + title + '</p></td><td class="deadlineTask" id="deadlineTask' + i + '"><p>' + deadline + '</p></td><td class="statusTask"><p>' + status + '</p></td><td class="editTask" data-toggle="modal" data-target="#editModal">Edit</td><td class="deleteTask">x</td></tr>';
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
  var emptyTitle = document.getElementById("emptyTitle");
  var emptyDeadline = document.getElementById("emptydeadline");
  var verifySameTask = false
  

  for (const child of tbodySelector.children) {
    if (child.id == titleTask && child.children[1].textContent.trim() == (deadlineTask.trim())) {
      verifySameTask = true;
    }
  }

  if (verifySameTask == true) {
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
    var status = document.querySelectorAll('.statusTask')
    console.log(status);
    status.forEach(element => {
      console.log(element.textContent.trim());
      // text-decoration: line-through;
      if (element.textContent.trim() == 'To do') {
        element.children[0].style.cssText = "color:orangered!important;";
        console.log("todo");
      }else if (element.textContent.trim() == 'Pending') {
        console.log("Pending");
        element.children[0].style.cssText = "color:orange!important;";
  
      }else if (element.textContent.trim() == 'Done') {
        console.log("Done");
        element.children[0].style.cssText = "color:green!important;";
      }else{
        console.log("error");
      }
    });
    var editTask = document.querySelectorAll('.editTask');
    editTask.forEach(ele => {
      ele.addEventListener('click', (e) => {
        var tdRow = document.getElementById(titleTask);
        var td = e.target.parentElement;
        var tr = td.parentNode;
        document.getElementById('titleInputEditTask').value = td.children[0].textContent;
        document.getElementById('deadlineInputEditTask').value = td.children[1].textContent;
        if (td.children[2].textContent == "To do") {
          document.getElementById('statusSelecteEditTask').value = "0";
        }else if (td.children[2].textContent == "Pending") {
          document.getElementById('statusSelecteEditTask').value = "1";
        }else if (td.children[2].textContent == "Done") {
          document.getElementById('statusSelecteEditTask').value = "2";
        }else{
          alert('Error of Status')
        }
      });
    });


    var xDeleteTask = document.querySelectorAll('.deleteTask');
    xDeleteTask.forEach(ele => {
      ele.addEventListener('click', (e) => {
        var tdRow = document.getElementById(titleTask);
        var td = e.target.parentElement;
        var tr = td.parentNode;
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
document.getElementById('submitEditTask').addEventListener('click', (e) => {

});