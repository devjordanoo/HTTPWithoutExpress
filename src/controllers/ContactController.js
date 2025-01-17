import ContactsRepository from "../repositories/ContactsRepository.js";

class ContactController {
  async List(request, response) {
    const contacts = await ContactsRepository.getAll();
    response.send(contacts, 200);
  }

  async Get(request, response) {
    const contact = await ContactsRepository.getById(request.params.id);

    if(!contact) {
      response.send({ message: `Contact not found` }, 404);
      return;
    }

    response.send(contact, 200);
  }

  async Create(request, response) {
    const contact = await ContactsRepository.create(request.body);

    if(!contact) {
      response.send({ message: `Create contact failed` }, 404);
      return;
    }

    response.send(contact, 200);
  }

  async Edit(request, response) {
    const contact = await ContactsRepository.update(request.body);

    if(!contact) {
      response.send({ message: `Edit contact failed` }, 404);
      return;
    }

    response.send(contact, 200);
  }

  async Delete(request, response) {
    const deleted = await ContactsRepository.delete(request.params.id);

    if(!deleted) {
      response.send({ message: `Delete contact failed` }, 404);
      return;
    }

    response.send({ message: `Deleted` }, 200);
  }
}

export default new ContactController();
