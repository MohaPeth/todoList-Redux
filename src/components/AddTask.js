import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/action"; // Import de l'action pour ajouter une tâche
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [title, setTitle] = useState(""); // État local pour le titre de la tâche
  const [description, setDescription] = useState(""); // État local pour la description de la tâche
  const dispatch = useDispatch(); // Utilisation du hook useDispatch pour dispatcher des actions

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification si le titre et la description ne sont pas vides
    if (title.trim() && description.trim()) {
      // Dispatch de l'action pour ajouter une nouvelle tâche avec les données saisies
      dispatch(addTask({ id: uuidv4(), title, description, isDone: false }));
      // Réinitialisation des états locaux pour le titre et la description
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Champ de saisie pour le titre de la tâche */}
      <Form.Group controlId="taskTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Gestion de la modification du titre
          placeholder="Enter task title"
          required
        />
      </Form.Group>
      {/* Champ de saisie pour la description de la tâche */}
      <Form.Group controlId="taskDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Gestion de la modification de la description
          placeholder="Enter task description"
          required
        />
      </Form.Group>
      {/* Bouton pour soumettre le formulaire et ajouter une tâche */}
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default AddTask;
