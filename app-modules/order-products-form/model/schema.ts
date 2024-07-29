import { object, string } from 'yup';

export default function() {
  return object({
    name: string().required().label('Имя'),
    email: string().required().email().label('Email'),
  });
}
