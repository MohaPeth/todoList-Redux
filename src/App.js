import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store"; // Import du magasin Redux
import AddTask from "./components/AddTask"; // Import du composant AddTask
import TaskList from "./components/ListTask"; // Import du composant TaskList
import { setSearchTerm } from "./store/action"; // Import de l'action setSearchTerm
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function AppContent() {
  const dispatch = useDispatch(); // Utilisation du hook useDispatch pour dispatcher des actions
  const tasks = useSelector((state) => state.tasks); // Sélection des tâches depuis le magasin Redux
  const [showForm, setShowForm] = useState(false); // État local pour afficher/masquer le formulaire d'ajout de tâche
  const [localSearchTerm, setLocalSearchTerm] = useState(""); // État local pour le terme de recherche

  // Fonction pour gérer le changement du terme de recherche
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setLocalSearchTerm(searchTerm);
    // Dispatch de l'action setSearchTerm avec le nouveau terme de recherche
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>My Todo List</h1>
          {/* Champ de recherche pour filtrer les tâches en fonction du titre ou de la description */}
          <Form.Control
            type="text"
            placeholder="Search tasks..."
            value={localSearchTerm}
            onChange={handleSearchChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Affichage de la liste des tâches filtrées */}
          <TaskList />
        </Col>
      </Row>
      {/* Affichage du formulaire d'ajout de tâche si showForm est true */}
      {showForm && (
        <div id="addTaskForm">
          <AddTask />
        </div>
      )}
      {/* Bouton pour afficher/masquer le formulaire d'ajout de tâche */}
      <Button
        variant="primary"
        className="position-fixed bottom-0 end-0 m-4 rounded-circle"
        style={{ width: "60px", height: "60px", fontSize: "24px" }}
        onClick={() => setShowForm(!showForm)}
      >
        +
      </Button>
    </Container>
  );
}

function App() {
  return (
    <Provider store={store}>
      {/* Encapsulation de l'application avec le Provider pour permettre l'accès au magasin Redux */}
      <AppContent />
    </Provider>
  );
}

export default App;
