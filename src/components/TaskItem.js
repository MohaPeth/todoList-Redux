// Composant individuel pour chaque tâche.
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function TaskItem({ task, updateTask, deleteTask }) {
  // Déclaration des états pour la gestion de l'édition, du titre, de la description et de la boîte de dialogue de suppression
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Fonction de soumission du formulaire d'édition
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...task, title, description });
    setIsEditing(false);
  };

  // Fonction pour basculer l'état de complétion de la tâche
  const toggleCompleted = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  // Fonction pour gérer la suppression de la tâche
  const handleDelete = () => {
    deleteTask(task.id);
    setShowDeleteModal(false);
  };

  return (
    <div
      className={`task-item card ${
        task.completed ? "border-success" : ""
      } mb-3`}
    >
      <div className="card-body">
        {/* Affichage du formulaire d'édition si l'utilisateur est en mode édition */}
        {isEditing ? (
          // Mode édition
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="editTaskTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="editTaskDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="me-2">
              Save
            </Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </Form>
        ) : (
          // Mode visualisation
          <>
            {/* Affichage des détails de la tâche */}
            <h3 className="card-title mb-1" onClick={() => setIsEditing(true)}>
              {task.title}
            </h3>
            <p className="card-text mb-1" onClick={() => setIsEditing(true)}>
              {task.description}
            </p>
            {/* Bouton pour marquer la tâche comme complète ou incomplète */}
            <Button
              variant={task.completed ? "warning" : "success"}
              onClick={toggleCompleted}
              className="me-2"
            >
              {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
            {/* Bouton pour ouvrir la boîte de dialogue de confirmation de suppression */}
            <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
              <i className="bi bi-trash"></i>
            </Button>
          </>
        )}
      </div>

      {/* Boîte de dialogue de confirmation de suppression */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer cette tâche ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TaskItem;
