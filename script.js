const input = document.querySelector("#input");

const add$ = document.querySelector("#add");

const taskSectionContainer = document.querySelector("#task_section_container");

const taskArr = [];

let taskObjID = 1;

const add = () => {
  const taskText = input.value;
  const taskObj = {
    text: taskText,
    isCompleted: false,
    objID: taskObjID,
  };

  taskArr.push(taskObj);

  taskObjID++;

  taskView();
  clearInput();
  console.log(taskArr);
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    add();
  }
});

const taskView = () => {
  let taskDisplay = "";
  taskArr.forEach((task) => {
    const task$ = ` 
        <div class="task">
          <input type="checkbox" ${
            task.isCompleted && "checked"
          } onchange="isChecked(${task.objID}, this )"/>
          <p>${task.text}</p>
          <button>Delete</button>
        </div>`;

    taskDisplay += task$;
  });

  taskSectionContainer.innerHTML = taskDisplay;
};

const isChecked = (id, checkbox) => {
  // console.log(id);
  console.log(checkbox);

  if ((checkbox.checked = true)) {
    return console.log("Yes it is True that checkbox Checked");
  } else {
    console.log(task.isCompleted);
  }
};

const clearInput = () => {
  input.value = "";
};

// Odoo checkbox checkleh uyd completedruu shiljih bolon checkbox checklegdeegui bol active tab-d haragddag baidlaar hiine

// Teghiin tuld #1 checkbox checkleh uyd true utgiig ugdug boliy.
