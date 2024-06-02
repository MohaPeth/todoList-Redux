// // Formulaire pour ajouter/modifier des tâches.
// import React, { useState } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { addTask } from "../store/actions"; // Importez l'action d'ajout de tâche

// function TaskForm() {
//   // États pour le titre, la description et la date d'échéance de la tâche
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const dispatch = useDispatch(); // Utilisez useDispatch pour obtenir la fonction de dispatch

//   // Fonction de soumission du formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Vérification si les champs titre, description et date d'échéance sont remplis
//     if (title.trim() && description.trim() && dueDate.trim()) {
//       // Ajout de la nouvelle tâche avec la date d'échéance
//       const newTask = {
//         id: Date.now(),
//         title,
//         description,
//         dueDate,
//         isDone: false,
//       };
//       dispatch(addTask(newTask)); // Envoyez l'action au store
//       // Réinitialisation des champs titre, description et date d'échéance
//       setTitle("");
//       setDescription("");
//       setDueDate("");
//     }
//   };

//   return (
//     // Formulaire pour ajouter une nouvelle tâche
//     <Form onSubmit={handleSubmit} className="mb-4" id="addTaskForm">
//       {/* Champ de saisie du titre de la tâche */}
//       <Form.Group as={Row} controlId="taskTitle" className="mb-3">
//         <Form.Label column sm="2" className="text-start">
//           Title
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control
//             type="text"
//             placeholder="Enter task title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </Col>
//       </Form.Group>
//       {/* Champ de saisie de la description de la tâche */}
//       <Form.Group as={Row} controlId="taskDescription" className="mb-3">
//         <Form.Label column sm="2" className="text-start">
//           Description
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control
//             as="textarea"
//             rows={3}
//             placeholder="Enter task description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </Col>
//       </Form.Group>
//       {/* Champ de sélection de la date d'échéance */}
//       <Form.Group as={Row} controlId="taskDueDate" className="mb-3">
//         <Form.Label column sm="2" className="text-start">
//           Due Date
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//             required
//           />
//         </Col>
//       </Form.Group>
//       {/* Bouton pour soumettre le formulaire */}
//       <Button variant="primary" type="submit">
//         Save Task
//       </Button>
//     </Form>
//   );
// }

// export default TaskForm;
