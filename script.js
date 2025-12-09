const input = document.querySelector("#input");

const add$ = document.querySelector("#add");

const taskSectionContainer = document.querySelector("#task_section_container");

const taskArr = [];

let taskId = 1;

const add = () => {
  const textTask = input.value;

  const taskObj = {
    id: taskId,
    text: textTask,
    isComplate: false,
  };
  taskArr.push(textTask);
};
