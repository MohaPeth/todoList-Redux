import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask, deleteTask } from "../store/action";
import { Button, Form, Modal } from "react-bootstrap";

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTask(task.id, { title, description }));
    setIsEditing(false);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setShowDeleteModal(false);
  };

  return (
    <div
      className={`task-item card ${task.isDone ? "border-success" : ""} mb-3`}
    >
      <div className="card-body">
        {isEditing ? (
          <Form onSubmit={handleEdit}>
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
                type="text"
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
          <>
            <h3 className="card-title mb-1">{task.title}</h3>
            <p className="card-text">{task.description}</p>
            <Button
              variant={task.isDone ? "warning" : "success"}
              onClick={handleToggle}
              className="me-2"
            >
              {task.isDone ? "Mark as Incomplete" : "Mark as Complete"}
            </Button>
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
              <i className="bi bi-trash"></i>
            </Button>
          </>
        )}
      </div>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Task;
