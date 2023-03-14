const {
  addContactHandler,
  getAllContactsHandler,
  deleteContactByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/contact",
    handler: addContactHandler,
  },
  {
    method: "GET",
    path: "/contact",
    handler: getAllContactsHandler,
  },

  {
    method: "DELETE",
    path: "/contact/{contactId}",
    handler: deleteContactByIdHandler,
  },
];

module.exports = routes;
