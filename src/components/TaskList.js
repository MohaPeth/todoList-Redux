import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask }) {
  // Affiche une liste de tâches en utilisant le composant TaskItem pour chaque tâche
  return (
    <div className="list-group">
      {/* Parcourt toutes les tâches et affiche un composant TaskItem pour chaque tâche */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Utilisation de l'identifiant unique de chaque tâche comme clé
          task={task} // Passe la tâche actuelle comme propriété au composant TaskItem
          updateTask={updateTask} // Passe la fonction de mise à jour de la tâche au composant TaskItem
          deleteTask={deleteTask} // Passe la fonction de suppression de la tâche au composant TaskItem
        />
      ))}
    </div>
  );
}

export default TaskList;
