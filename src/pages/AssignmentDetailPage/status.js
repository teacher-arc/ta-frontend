import assignmentreceived from "./../../Assets/upload.png";
import confirmed from "./../../Assets/confirmed.png";
import solutionreceived from "./../../Assets/solutionreceived.png";
import paymentreceived from "./../../Assets/paymentreceived.png";
import assignedtutor from "./../../Assets/assignedtutor.png";

export const status = [
  { img: assignmentreceived, title: "Assignment Uploaded" },
  { img: confirmed, title: "Confirming" },
  { img: paymentreceived, title: "PaymentReceived" },
  { img: assignedtutor, title: "Assigned Tutor" },
  { img: solutionreceived, title: "Solution Received" },
];

export const status_number = {
  ["REQUESTED"]: 0,
  ["CONFIRMING"]: 1,
  ["PAYMENT_RECEIVED"]: 2,
  ["ASSIGNED_TO_TUTOR"]: 3,
  ["SOLUTION_RECEIVED"]: 4,
};
