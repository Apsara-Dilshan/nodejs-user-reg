import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Dilshan',
      email: 'dilshan@google.com',
      password: bycrypt.hasgSync('12345'),
    },
    {
      name: 'Apsara',
      email: 'apsara@google.com',
      password: bcrypt.hasgSync('12345'),
    },
  ],
};
export default data;
