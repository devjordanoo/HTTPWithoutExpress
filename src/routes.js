import ContactController from "./controllers/ContactController.js";

const routes = [
  {
    path: "/contacts",
    method: "GET",
    handler: ContactController.GET,
  },
  {
    path: "/contacts/:id",
    method: "POST",
    handler: ContactController.POST,
  },
  {
    path: "/contacts/:id",
    method: "PUT",
    handler: ContactController.PUT,
  },
  {
    path: "/contacts/:id",
    method: "DELETE",
    handler: ContactController.DELETE,
  },
]

export default routes
