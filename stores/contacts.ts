export const useContactsStore = defineStore('contactsStore', () => {
  const phone = ref('+ 7 (347) 226-00-00');
  const email = ref('kontakt@vark.ru');
  const address = ref('Россия, 450092, Республика Башкортостан, г.Уфа, ул. Софьи Перовской, 29');
  const manufactureAddress = ref('г. Благовещенск, ул. Космонавтов, 2');
  const privacyPolicyHref = ref('#');
  const youtubeHref = ref('https://youtube.com/channel/UC344XiPC4X5ZHY8r6fag8aQ?si=7jBEfbryxPS_Vq0q');

  return {
    phone,
    email,
    address,
    manufactureAddress,
    privacyPolicyHref,
    youtubeHref,
  }
});
