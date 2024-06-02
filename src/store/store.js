import { createStore } from "redux";
import taskReducer from "./reducers"; // Import du réducteur

// Création du magasin Redux en utilisant le réducteur
const store = createStore(taskReducer);

export default store;
