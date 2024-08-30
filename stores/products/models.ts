export interface ModelItem {
  url: string,
  poster: {
    url: string,
  },
};

function getModelItem(slug: string): ModelItem {
  return {
    url: '/models/' + slug + '/model/model.glb',
    poster: {
      url: '/models/' + slug + '/model/poster.png'
    }
  }
}

export const useProductsModelsStore = defineStore('productsModelsStore', () => {
  const productModels: Record<string, ModelItem> = {
    'zadvizhki-klinovyie-stalnyie':
      getModelItem('zadvizhki-klinovyie-stalnyie'),
    'klapany-zapornyie':
      getModelItem('klapany-zapornyie'),
    'zatvory-obratnyie':
      getModelItem('zatvory-obratnyie'),
    'zatvory-diskovyie-povorotnyie-zaslonki':
      getModelItem('zatvory-diskovyie-povorotnyie-zaslonki'),
    'krany-sharovyie-razbornyie-iz-dvukh-chastiei':
      getModelItem('krany-sharovyie-razbornyie-iz-dvukh-chastiei'),
    'krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei':
      getModelItem('krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei'),
    'krany-sharovyie-razbornyie-iz-triekh-chastiei':
      getModelItem('krany-sharovyie-razbornyie-iz-triekh-chastiei'),
    'krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei':
      getModelItem('krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei'),
    'krany-sharovyie-razbornyie-s-vierkhniei-kryshkoi':
      getModelItem('krany-sharovyie-razbornyie-s-vierkhniei-kryshkoi'),
    'krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei-podziemnyie':
      getModelItem('krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei-podziemnyie'),
    'krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei-podziemnyie':
      getModelItem('krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei-podziemnyie'),
    'krany-sharovyie-vysokotsiklichnyie':
      getModelItem('krany-sharovyie-vysokotsiklichnyie'),
    'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie':
      getModelItem('klapany-stalnyie-pruzhinnyie-priedokhranitielnyie'),
    'zadvizhki-shibiernyie-zms':
      getModelItem('zadvizhki-shibiernyie-zms'),
    'zadvizhki-shibiernyie-zsh':
      getModelItem('zadvizhki-shibiernyie-zsh'),
    'ustroistva-pieriekliuchaiushchiie':
      getModelItem('ustroistva-pieriekliuchaiushchiie'),
    'bloki-priedokhranitielnykh-klapanov':
      getModelItem('bloki-priedokhranitielnykh-klapanov'),
    'krany-sharovyie-spietsialnyie':
      getModelItem('krany-sharovyie-spietsialnyie'),
    'priedokhranitielnyie-klapany-spietsialnyie':
      getModelItem('priedokhranitielnyie-klapany-spietsialnyie'),
    'bloki-priedokhranitielnykh-klapanov-spietsialnyie':
      getModelItem('bloki-priedokhranitielnykh-klapanov-spietsialnyie'),
    'klapany-obratnyie-spietsialnyie':
      getModelItem('klapany-obratnyie-spietsialnyie'),
  };

  return {
    productModels,
  };
});
