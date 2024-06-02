// Actions pour la gestion des tâches
export const ADD_TASK = "ADD_TASK"; // Action pour ajouter une tâche
export const EDIT_TASK = "EDIT_TASK"; // Action pour éditer une tâche
export const TOGGLE_TASK = "TOGGLE_TASK"; // Action pour basculer l'état d'une tâche (complète/incomplète)
export const DELETE_TASK = "DELETE_TASK"; // Action pour supprimer une tâche

// Action pour filtrer les tâches
export const FILTER_TASKS = "FILTER_TASKS"; // Action pour filtrer les tâches en fonction de leur état (complètes/incomplètes)

// Action pour définir le terme de recherche
export const SET_SEARCH_TERM = "SET_SEARCH_TERM"; // Action pour définir le terme de recherche dans la barre de recherche

// Action pour mettre à jour le terme de recherche
export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

// Action pour ajouter une tâche
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

// Action pour éditer une tâche
export const editTask = (id, updatedTask) => ({
  type: EDIT_TASK,
  payload: { id, updatedTask },
});

// Action pour basculer l'état d'une tâche (complète/incomplète)
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

// Action pour supprimer une tâche
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

// Action pour filtrer les tâches en fonction de leur état (complètes/incomplètes)
export const filterTasks = (status) => ({
  type: FILTER_TASKS,
  payload: status,
});
