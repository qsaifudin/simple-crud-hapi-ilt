const { nanoid } = require("nanoid");
const contacts = require("./contacts");

const addContactHandler = (request, h) => {
  let { id, name, email, phone } = request.payload;

  const newContact = {
    id,
    name,
    email,
    phone,
  };

  contacts.push(newContact);

  const isSuccess =
    contacts.filter((contacts) => contacts.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Contact berhasil ditambahkan",
      data: {
        contactId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Contact gagal ditambahkan",
  });
  response.code(500);
  return response;
};

const getAllContactsHandler = () => {
  const contactReturn = contacts.map(({ id, name, email, phone }) => ({
    id,
    name,
    email,
    phone,
  }));
  return {
    status: "success",
    data: {
      contacts: contactReturn,
    },
  };
};

const deleteContactByIdHandler = (request, h) => {
  const { contactId } = request.params;

  const index = contacts.findIndex((contacts) => contacts.id === contactId);

  if (index !== -1) {
    contacts.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Contact berhasil dihapus",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Contact gagal dihapus. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = {
  addContactHandler,
  getAllContactsHandler,
  deleteContactByIdHandler,
};
