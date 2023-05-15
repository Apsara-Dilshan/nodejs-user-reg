import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Dilshan',
      email: 'dilshan@google.com',
      password: bcrypt.hashSync('12345'),
    },
    {
      name: 'Apsara',
      email: 'apsara@google.com',
      password: bcrypt.hashSync('12345'),
    },
  ],
};
export default data;
