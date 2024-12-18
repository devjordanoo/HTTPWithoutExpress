import ContactController from "./controllers/ContactController.js";

const routes = [
  {
    path: "/",
    method: "GET",
    handler: ContactController.GET,
  },
  {
    path: "/",
    method: "POST",
    handler: ContactController.POST,
  },
  {
    path: "/",
    method: "PUT",
    handler: ContactController.PUT,
  },
  {
    path: "/",
    method: "DELETE",
    handler: ContactController.DELETE,
  },
]

export default routes
