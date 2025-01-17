import ContactController from "./controllers/ContactController.js";

const routes = [
  {
    path: "/contacts",
    method: "GET",
    handler: ContactController.List,
  },
  {
    path: "/contacts/:id",
    method: "GET",
    handler: ContactController.Get,
  },
  {
    path: "/contacts",
    method: "POST",
    handler: ContactController.Create,
  },
  {
    path: "/contacts/:id",
    method: "PUT",
    handler: ContactController.Edit,
  },
  {
    path: "/contacts/:id",
    method: "DELETE",
    handler: ContactController.Delete,
  },
]

export default routes
