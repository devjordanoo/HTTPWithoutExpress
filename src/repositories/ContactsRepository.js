import ContactsData from "../mocks/contacts.js";

class ContactsRepository {
  async getAll() {
    return ContactsData;
  }

  async getById(id) {
    return ContactsData.find((contact) => contact.id === Number(id));
  }

  async create(contact) {
    ContactsData.push(contact);
    return contact;
  }

  async update(contact) {
    const index = ContactsData.findIndex((c) => c.id === contact.id);
    if(index === -1) {
      return false;
    }

    ContactsData[index] = contact;
    return contact;
  }

  async delete(id) {
    const index = ContactsData.findIndex((c) => c.id === Number(id));
    if(index => 0) {
      ContactsData.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default new ContactsRepository();
