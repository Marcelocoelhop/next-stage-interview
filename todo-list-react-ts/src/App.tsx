import { ChangeEvent, FormEvent, useMemo, useEffect, useState } from "react";
import { ClipboardText, PlusCircle } from "@phosphor-icons/react";

import { getStorageTasks, setStorageTasks } from "./storage/storageTask";
import { Header } from "./components/Header";
import { TaskDTO } from "./dtos/TaskDTO";
import { Task } from "./components/Task";
import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState("");
  const sizeTasks = useMemo(() => tasks.length, [tasks]);
  const tasksCompletedCount = useMemo(
    () => tasks.filter((task) => task.isChecked).length,
    [tasks]
  );

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    if (newTask.trim().length > 0) {
      const newCurrentTask = {
        id: 1,
        content: newTask,
        isChecked: false,
      };
      setTasks((oldTasks) => [...oldTasks, newCurrentTask]);
      setStorageTasks([...tasks, newCurrentTask]);
    }
  }

  function onTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCheckTask(taskId: number) {
    const tasksList = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });
    setStorageTasks(tasksList);
    setTasks(tasksList);
  }

  function handleDeleteTask(taskId: number) {
    // TODO
  }

  function loadTasks() {
    const tasks = getStorageTasks();
    setTasks(tasks);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <form
          onSubmit={handleAddNewTask}
          className={styles.form}
        >
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
            onChange={onTaskChange}
            value={newTask}
          />
          <button type='submit'>
            Criar
            <PlusCircle />
          </button>
        </form>
        <div className={styles.tasksList}>
          <header className={styles.tasksListHeader}>
            <div className={styles.tasksInfo}>
              <strong className={styles.taskCreated}>Tarefas criadas</strong>
              <span>{sizeTasks}</span>
            </div>
            <div className={styles.tasksInfo}>
              <strong className={styles.taskCompleted}>Concluídas</strong>
              <span>
                {tasksCompletedCount} de {sizeTasks}
              </span>
            </div>
          </header>
          <section className={styles.tasksContainer}>
            {tasks.length === 0 && (
              <div className={styles.tasksEmpty}>
                <hr />
                <div className={styles.tasksEmptyInfo}>
                  <ClipboardText size={56} />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            )}
            {tasks.map((task) => (
              <Task
                key={task.id}
                content={task.content}
                onCheck={() => handleCheckTask(task.id)}
                onDelete={() => handleDeleteTask(task.id)}
                isChecked={task.isChecked}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
