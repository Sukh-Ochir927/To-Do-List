const input = document.querySelector("#input");

const add$ = document.querySelector("#add");

const taskSectionContainer = document.querySelector("#task_section_container");

const countArrLength = document.querySelector("#counting");

let taskArr = [];

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
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    add();
  }
});

const taskView = (a) => {
  let taskDisplay = "";

  taskArr.forEach((task) => {
    const task$ = ` 
        <div class="task">
          <input type="checkbox" ${
            task.isCompleted && "checked"
          } onclick="onToggleComplete(${task.objID})"/>
          <p>${task.text}</p>
          <button onclick="onDelete(${task.objID})">Delete</button>
        </div>`;

    taskDisplay += task$;
  });

  taskSectionContainer.innerHTML = taskDisplay;
};

const onToggleComplete = (id) => {
  const newTasksArr = taskArr.map((task) => {
    if (task.objID === id) {
      const newTask = {
        objID: task.objID,
        text: task.text,
        isCompleted: task.isCompleted ? false : true,
      };
      return newTask;
    } else {
      return task;
    }
  });

  taskArr = newTasksArr;
  console.log(newTasksArr);

  taskView();
};

const onDelete = (id) => {
  const taskDelete = taskArr.filter((task) => {
    if (task.objID !== id) {
      return true;
    } else {
      return false;
    }
  });

  taskArr = taskDelete;
  // console.log(taskDelete);
  taskView();
};

const btnActive = (el) => {
  const newArrActive = taskArr.filter((task) => {
    if (task.isCompleted === false) {
      return true;
    }
  });

  taskView(newArrActive);
  console.log(newArrActive, "Active");
};

const btnCompleted = (compEl) => {
  const ComplatedArr = taskArr.filter((task) => {
    if (task.isCompleted !== false) {
      return task;
    }
    taskView();
  });
  console.log(ComplatedArr, "Complated");
};

const btnAll = (allEl) => {
  const allArr = taskArr.map((task) => {
    return task;
  });
  taskView();
  countArr();
  console.log(allArr, "All");
};
const countArr = () => {
  const taskLength = taskArr.filter((task) => {
    console.log(task.length);
  });
};

const clearInput = () => {
  input.value = "";
};
