import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  // Déclaration des états pour la liste des tâches , recherche et l'affichage du formulaire
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Chargement des tâches depuis le stockage local lors du chargement initial
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Enregistrement des tâches dans le stockage local chaque fois qu'il y a un changement dans la liste des tâches
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Fonction pour ajouter une nouvelle tâche à la liste
  const addTask = (task) => {
    setTasks([...tasks, task]);
    setShowForm(false); // Masquer le formulaire après l'ajout d'une tâche
  };

  // Fonction pour mettre à jour une tâche existante dans la liste
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Filtrage des tâches en fonction du terme de recherche saisi par l'utilisateur
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>My Todo List</h1>
          {/* Champ de recherche pour filtrer les tâches en fonction du titre ou de la description */}
          <Form.Control
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Affichage de la liste des tâches filtrées */}
          <TaskList
            tasks={filteredTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </Col>
      </Row>
      {/* Affichage du formulaire d'ajout de tâche si showForm est true */}
      {showForm && (
        <div id="addTaskForm">
          <TaskForm addTask={addTask} />
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

export default App;
