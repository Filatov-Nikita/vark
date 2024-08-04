import { object, string, mixed } from 'yup';

export default function() {
  return object({
    name: string().required().label('Имя'),
    phone: string().required().label('Номер телефона'),
    file: mixed<File>()
          .required()
          .test('is-type-pdf', 'Файл должен быть в pdf формате', (file) => file.type === 'application/pdf')
          .test('is-valid-size', 'Файл не должен превышать 10мб', (file) => file.size < 10000000),
  });
}
