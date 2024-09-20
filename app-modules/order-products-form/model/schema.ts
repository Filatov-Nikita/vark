import { object, string, type InferType } from 'yup';

export default function schema() {
  return object({
    name: string().required().label('Имя'),
    email: string().required().email().label('Email'),
  });
}

export type Form = InferType<ReturnType<typeof schema>>;
