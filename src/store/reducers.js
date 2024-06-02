import {
  ADD_TASK,
  EDIT_TASK,
  TOGGLE_TASK,
  FILTER_TASKS,
  DELETE_TASK,
  SET_SEARCH_TERM,
} from "./action";

// État initial du magasin Redux
const initialState = {
  tasks: [], // Tableau des tâches
  filter: "all", // Filtre actuel des tâches (toutes, complétées, non complétées)
  searchTerm: "", // Terme de recherche pour filtrer les tâches par titre ou description
};

// Réducteur pour gérer les actions sur les tâches
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action pour ajouter une nouvelle tâche
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    // Action pour éditer une tâche existante
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updatedTask }
            : task
        ),
      };
    // Action pour basculer l'état d'une tâche (complète/incomplète)
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    // Action pour supprimer une tâche existante
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    // Action pour filtrer les tâches en fonction de leur état
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    // Action pour définir le terme de recherche
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
