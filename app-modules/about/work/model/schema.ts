import { object, string, mixed, type InferType } from 'yup';

export default function schema() {
  return object({
    name: string().required().label('Имя'),
    phone: string().required()
      .test('is-phone', 'Телефон введен неправильно', (phone) => {
        return /^\+7\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}/g.test(phone);
      })
      .label('Номер телефона'),
    file: mixed<File>()
          .required()
          .test('is-type-pdf', 'Файл должен быть в pdf или docx формате', (file) => {
            const mimes = useAppConfig().mimes;
            return [ mimes.pdf, mimes.docx ].includes(file.type);
          })
          .test('is-valid-size', 'Файл не должен превышать 2мб', (file) => file.size < 1024 * 1024 * 2)
          .label('Файл'),
  });
}

export type Form = InferType<ReturnType<typeof schema>>;
