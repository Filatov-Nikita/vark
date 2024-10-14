import type { DocItem } from '@/stores/products/docs';

function getDocItem(name: string, baseUrl: string): DocItem {
  return {
    name,
    url: '/common-docs/' + baseUrl + '/doc.pdf',
    preview: {
      width: 524,
      height: 752,
      url: '/common-docs/' + baseUrl + '/preview.jpg',
    },
  };
}

export default function() {
  const tabs = [
    'Разрешительная документация',
    'Система менеджмента качества',
    'Лаборатория',
    'Патенты',
  ];

  const tab = ref(0);

  const commonDocs: Record<string, DocItem[]> = {
    1: [
      getDocItem(
        'Сертификат Р ИСО 45001-2020 (ST.RU.0001.P43470)',
        'managment/0',
      ),
      getDocItem(
        'Сертификат Р ИСО 9001-2015 и ГОСТ Р ИСО 14001-2016',
        'managment/1',
      ),
      getDocItem(
        'Сертификат ГОСТ ИСО 13849-1-2014 и ГОСТ Р МЭК 61508-1-2012',
        'managment/2',
      ),
      getDocItem(
        'Сертификат СТО Газпром 9001 2018 ОГН1 RU 1419 K0009',
        'managment/3',
      ),
    ],
    2: [
      getDocItem(
        'Свидетельство об аккредитации № ИЛ ЛРИ-02055',
        'lab/0',
      ),
      getDocItem(
        'Свидетельство об аттестации ЛВиНМК',
        'lab/1',
      ),
    ],
    3: [
      getDocItem(
        'Патент № 203284',
        'pattent/0',
      ),
      getDocItem(
        'Патент № 208865',
        'pattent/1',
      ),
    ],
  };

  return {
    tabs,
    tab,
    commonDocs,
  }
}
