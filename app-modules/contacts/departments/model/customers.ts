interface Customer {
  name: string,
  position?: string,
  phone: string,
  email?: string,
  phoneCap?: string,
};

const generalPhone: Customer = {
  name: 'Общий телефон',
  phone: '+7 (347) 226 00 00',
};

const customers: Record<string, Customer[]> = {
  gazprom: [
    generalPhone,
    {
      name: 'Горбань Андрей Алексеевич',
      position: 'Директор департамента',
      phone: '+7 (927) 398 68 88',
      email: 'GorbanAA@vark.ru',
    },
    {
      name: 'Ишмухаметов Руслан Рагитович',
      position: 'Заместитель директора департамента',
      phone: '+7 (917) 770 77 82',
      phoneCap: '(доб. 131)',
      email: 'Proekt@vark.ru',
    },
    {
      name: 'Валеев Азат Салаватович',
      position: 'Заместитель директора департамента по работе с ПАО «НОВАТЭК»',
      phone: '+7 (937) 480 16 91',
      phoneCap: '(доб. 132)',
      email: 'ValeevAS@vark.ru',
    },
    {
      name: 'Шпилевая Екатерина Владимировна',
      position: 'Ведущий специалист департамента',
      phone: '+7 (999) 240 83 98',
      phoneCap: '(доб. 133)',
      email: 'ShpilevayaEV@vark.ru',
    },
  ],
  rosneft: [
    generalPhone,
    {
      name: 'Ганеева Эльвира Ильгизовна',
      position: 'Заместитель директора департамента по работе с ПАО НК «Роснефть»',
      phone: '+7 (987) 100 86 26',
      phoneCap: '(доб. 175)',
      email: 'GaneevaEI@vark.ru',
    },
    {
      name: 'Фаузетдинов Тимур Вадимович',
      position: 'Ведущий специалист по продажам департамента по работе с ПАО «НК Роснефть»',
      phone: '+7 (917) 770 77 82',
      phoneCap: '(доб. 179)',
      email: 'FauzetdinovTV@vark.ru',
    },
  ],
  lukoil: [
    generalPhone,
    {
      name: 'Халиков Денис Ильдусович',
      position: 'Директор департамента по работе с ПАО «ЛУКОЙЛ» и ПАО «Газпром Нефть»',
      phone: '+7 (960) 396 39 75',
      phoneCap: '(доб. 177)',
      email: 'KHalikovDI@vark.ru',
    },
    {
      name: 'Юльякшин Эдуард Сергеевич',
      position: 'Ведущий специалист департамента по работе с ПАО «ЛУКОЙЛ»',
      phone: '+7 (917) 353 17 07',
      phoneCap: '(доб. 124)',
      email: 'YuliakshinES@vark.ru',
    },
    {
      name: 'Халитов Тимур Сергеевич',
      position: 'Специалист департамента продаж',
      phone: '+7 (347) 226 00 00',
      phoneCap: '(доб. 129)',
      email: 'KHalitovTS@vark.ru',
    },
  ],
  sibur: [
    generalPhone,
    {
      name: 'Черный Денис Николаевич',
      position: 'Директор департамента по работе с ПАО «Сибур»',
      phone: '+7 (927) 343 22 65',
      phoneCap: '(доб. 189)',
      email: 'ChernyDN@vark.ru',
    },
    {
      name: 'Лаврова Кира Владимировна',
      position: 'Ведущий менеджер',
      phone: '+7 (937) 351 23 35',
      email: 'LavrovaKV@vark.ru',
    },
  ],
  clients: [
    generalPhone,
    {
      name: 'Хисамов Ильдар Рифкатович',
      position: 'Директор по работе с ключевыми клиентами',
      phone: '+7 (965) 923 61 32',
      email: 'HisamovIR@vark.ru',
    },
  ],
  neft: [
    generalPhone,
    {
      name: 'Гудым Анатолий Андреевич',
      position: 'Директор департамента продаж нефтегазового оборудования',
      phone: '+7 (964) 956 11 11',
      phoneCap: '(доб. 127)',
      email: 'GudymAA@vark.ru',
    },
  ],
  tender: [
    generalPhone,
    {
      name: 'Ахунова Альбина Ринатовна',
      position: 'Ведущий специалист по тендерам',
      phone: '+7 (963) 904 70 49',
      phoneCap: '(доб. 171)',
      email: 'AkhunovaAR@vark.ru',
    },
  ],
};

export default customers;
