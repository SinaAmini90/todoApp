import "./App.css";
import React, { useState } from "react";
import AddFormComponent from "./components/AddFormComponent.js";
import TaskListComponent from "./components/taskListComponent.js";
import ButtonComponent from "./components/ButtonComponent.js";
function App() {
  const [tasks, setTasks] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (taskData) => {
    setTasks([...tasks, taskData]);
  };
  const handleToggle = () => {
    setIsDisplayed((prevState) => !prevState);
  };
  return (
    <div className=" flex ">
      <div className="side">
        <ButtonComponent
          onClick={handleToggle}
          context="کار جدید"
          icon="add"
          className="sideBar"
        />
        <ButtonComponent context="بیش نویس" icon="add" className="sideBar" />
        <ButtonComponent
          context="کارهای امروز"
          icon="add"
          className="sideBar"
        />
        <ButtonComponent context="همه کارها" icon="add" className="sideBar" />
        <hr class="border-t-2 border-gray-300 w-full max-w-md my-4" />
        <ButtonComponent context="پروژه های من" className="sideBar" />
        <ButtonComponent context="شخصی" icon="add" className="sideBar" />
        <ButtonComponent context="خانه" icon="add" className="sideBar" />
        <ButtonComponent context="شغلی" icon="add" className="sideBar" />
        <ButtonComponent context="ورزش" icon="add" className="sideBar" />
        <ButtonComponent context="مطالعه" icon="add" className="sideBar" />
        <ButtonComponent context="مناسبت" icon="add" className="sideBar" />
      </div>
      <TaskListComponent tasks={tasks} deleteTask={handleDeleteTask} />
      <div className={isDisplayed ? "" : " hidden"}>
        <AddFormComponent onAddTask={handleAddTask} onExit={handleToggle} />
      </div>
    </div>
  );
}

export default App;
