import bcrypt from 'bcryptjs'; //to hash the password

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aishu',
    email: 'Aishu@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Harry',
    email: 'Harry@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
