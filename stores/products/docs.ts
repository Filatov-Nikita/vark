import type { Image } from '@/types/shared/image';

export interface DocItem {
  name: string,
  preview: Image,
  url: string,
}

function getDocItem(name: string, baseUrl: string): DocItem {
  return {
    name,
    url: '/product-docs/' + baseUrl + '/doc.pdf',
    preview: {
      width: 524,
      height: 752,
      url: '/product-docs/' + baseUrl + '/preview.jpg',
    },
  };
}

const sharovyie = [
  getDocItem(
    'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-493)',
    'krany-sharovyie/0',
  ),
  getDocItem(
    'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1102.В02738)',
    'krany-sharovyie/1',
  ),
  getDocItem(
    'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.АБ53.В.00826_20)',
    'krany-sharovyie/2',
  ),
  getDocItem(
    'Сертификат ТР ТС 012 (ЕАЭС RU C-RU.АЖ58.В.04047_23)',
    'krany-sharovyie/3',
  ),
  getDocItem(
    'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АД07.В.02532_20)',
    'krany-sharovyie/4',
  ),
  getDocItem(
    'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01268_20)',
    'krany-sharovyie/5',
  ),
  getDocItem(
    'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП29.22571)',
    'krany-sharovyie/6',
  ),
  getDocItem(
    'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП29.22572)',
    'krany-sharovyie/7',
  ),
  getDocItem(
    'Сертификат огнестойкость (РОСС RU.04РИД0.ОСП01.К00137)',
    'krany-sharovyie/8',
  ),
  getDocItem(
    'САНПИН (413)',
    'krany-sharovyie/9',
  ),
];

export const useProductsDocsStore = defineStore('productsDocsStore', () => {
  const productDocuments: Record<string, DocItem[]> = {
    'zadvizhki-klinovyie-stalnyie': [
      getDocItem(
        'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-488)',
        'zadvizhki-klinovyie-stalnyie/0',
      ),
      getDocItem(
        'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1102.В01270)',
        'zadvizhki-klinovyie-stalnyie/1',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.АБ53.В.00825_20)',
        'zadvizhki-klinovyie-stalnyie/2',
      ),
      getDocItem(
        'Сертификат ТР ТС 012 (ЕАЭС RU С-RU.АЖ58.В.04046_23)',
        'zadvizhki-klinovyie-stalnyie/3',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АЖ58.В.00129_20)',
        'zadvizhki-klinovyie-stalnyie/4',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01269_20)',
        'zadvizhki-klinovyie-stalnyie/5',
      ),
      getDocItem(
        'Сертификат ТР ТС 043 (ЕАЭС RU С-RU.АБ03.В.00277_23)',
        'zadvizhki-klinovyie-stalnyie/6',
      ),
      getDocItem(
        'Сертификат климатика (РОССRU.32001.04ИБФ1.ОСП29.22565)',
        'zadvizhki-klinovyie-stalnyie/7',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП29.22566)',
        'zadvizhki-klinovyie-stalnyie/8',
      ),
      getDocItem(
        'Сертификат огнестойкость (РОСС RU.04РИД0.ОСП01.К00139)',
        'zadvizhki-klinovyie-stalnyie/9',
      ),
      getDocItem(
        '10. САНПИН (414)',
        'zadvizhki-klinovyie-stalnyie/10',
      ),
    ],
    'klapany-zapornyie': [
      getDocItem(
        'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-491)',
        'klapany-zapornyie/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА01.В.95933_20)',
        'klapany-zapornyie/1',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АД07.В.02534_20)',
        'klapany-zapornyie/2',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01274_20)',
        'klapany-zapornyie/3',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП29.22567)',
        'klapany-zapornyie/4',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП29.22568)',
        'klapany-zapornyie/5',
      ),
    ],
    'zatvory-obratnyie': [
      getDocItem(
        'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-490)',
        'zatvory-obratnyie/0',
      ),
      getDocItem(
        'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1106.В00994)',
        'zatvory-obratnyie/1',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА01.В.95935_20)',
        'zatvory-obratnyie/2',
      ),
      getDocItem(
        'Сертификат ТР ТС 012 (ТС RU C-RU.АД07.В.03348_21)',
        'zatvory-obratnyie/3',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АД07.В.02530_20)',
        'zatvory-obratnyie/4',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01271_20)',
        'zatvory-obratnyie/5',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП29.22569)',
        'zatvory-obratnyie/6',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП29.22570)',
        'zatvory-obratnyie/7',
      ),
      getDocItem(
        'Сертификат огнестойкость (РОСС RU.04РИД0.ОСП01.К00136)',
        'zatvory-obratnyie/8',
      ),
      getDocItem(
        'САНПИН (449)',
        'zatvory-obratnyie/9',
      ),
    ],
    'zatvory-diskovyie-povorotnyie-zaslonki': [
      getDocItem(
        'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-489)',
        'zatvory-diskovyie-povorotnyie-zaslonki/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА01.В.95929_20)',
        'zatvory-diskovyie-povorotnyie-zaslonki/1',
      ),
      getDocItem(
        'Сертификат ТР ТС 012 (ТС RU C-RU.АЖ58.В.00887_20)',
        'zatvory-diskovyie-povorotnyie-zaslonki/2',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АЖ58.В.00130_20)',
        'zatvory-diskovyie-povorotnyie-zaslonki/3',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01273_20)',
        'zatvory-diskovyie-povorotnyie-zaslonki/4',
      ),
      getDocItem(
        'Сертификат ТР ТС 043 (ЕАЭС RU С-RU.АБ03.В.00276_23)',
        'zatvory-diskovyie-povorotnyie-zaslonki/5',
      ),
      getDocItem(
        'Сертификат климатика (Серия 001 № 697)',
        'zatvory-diskovyie-povorotnyie-zaslonki/6',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП29.28703)',
        'zatvory-diskovyie-povorotnyie-zaslonki/7',
      ),
      getDocItem(
        'Сертификат пожарной безопасность (НСОПБ.RU.ЭО.ПР.179.Н.00457)',
        'zatvory-diskovyie-povorotnyie-zaslonki/8',
      ),
      getDocItem(
        'САНПИН (001515)',
        'zatvory-diskovyie-povorotnyie-zaslonki/9',
      ),
    ],
    'krany-sharovyie-razbornyie-iz-dvukh-chastiei':
      sharovyie,
    'krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei':
      sharovyie,
    'krany-sharovyie-razbornyie-iz-triekh-chastiei':
      sharovyie,
    'krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei':
      sharovyie,
    'krany-sharovyie-razbornyie-s-vierkhniei-kryshkoi':
      sharovyie,
    'krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei-podziemnyie':
      sharovyie,
    'krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei-podziemnyie':
      sharovyie,
    'krany-sharovyie-vysokotsiklichnyie':
      sharovyie,
    'krany-sharovyie-spietsialnyie':
      sharovyie,
    'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie': [
      getDocItem(
        'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-492)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.АБ53.В.00827_20)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/1',
      ),
      getDocItem(
        'Сертификат ТР ТС 012 (ТС RU C-RU.АЖ58.В.00598_20)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/2',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АД07.В.02537_20)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/3',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01263_20)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/4',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП29.22573)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/5',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП29.22574)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/6',
      ),
      getDocItem(
        'Сертификат огнестойкость (РОСС RU.04ПТК0.К00115)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/7',
      ),
    ],
    'zadvizhki-shibiernyie-zms': [
      getDocItem(
        'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-488)',
        'zadvizhki-shibiernyie-zms/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА01.В.95931_20)',
        'zadvizhki-shibiernyie-zms/1',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА01.В.87792_21)',
        'zadvizhki-shibiernyie-zms/2',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АБ53.В.00864_21)',
        'zadvizhki-shibiernyie-zms/3',
      ),
      getDocItem(
        'Сертификат климатика (Серия 001 № 555)',
        'zadvizhki-shibiernyie-zms/4',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (Серия 001 №554)',
        'zadvizhki-shibiernyie-zms/5',
      ),
    ],
    'zadvizhki-shibiernyie-zsh': [
      getDocItem(
        'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-488)',
        'zadvizhki-shibiernyie-zsh/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.АБ53.В.00824_20)',
        'zadvizhki-shibiernyie-zsh/1',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АД07.В.02536_20)',
        'zadvizhki-shibiernyie-zsh/2',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01265_20)',
        'zadvizhki-shibiernyie-zsh/3',
      ),
    ],
    'ustroistva-pieriekliuchaiushchiie': [
      getDocItem(
        'Сертификат ИНТИ (INTI.QS.PS.20-12-2023-494)',
        'ustroistva-pieriekliuchaiushchiie/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА01.В.95941_20)',
        'ustroistva-pieriekliuchaiushchiie/1',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АД07.В.02535_20)',
        'ustroistva-pieriekliuchaiushchiie/2',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01267_20)',
        'ustroistva-pieriekliuchaiushchiie/3',
      ),
      getDocItem(
        'Сертификат климатика (Серия 001 № 715)',
        'ustroistva-pieriekliuchaiushchiie/4',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (Серия 001 № 698)',
        'ustroistva-pieriekliuchaiushchiie/5',
      ),
      getDocItem(
        'Сертификат пожарной безопасность (04ИДЮ0.117.RU.Н.00020)',
        'ustroistva-pieriekliuchaiushchiie/6',
      ),
    ],
  };

  return {
    productDocuments,
  }
});
