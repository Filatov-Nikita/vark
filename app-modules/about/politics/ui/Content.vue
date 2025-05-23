<template>
  <article class="block">
    <h3 class="h3 title">Наша цель</h3>
    <p>{{ aim }}</p>
  </article>
  <article class="block">
    <h3 class="h3 title">Наши принципы</h3>
    <ul class="list">
      <li
        class="list-item"
        v-for="pr in principles"
      >
        {{ pr }}
      </li>
    </ul>
  </article>
  <BaseButton v-if="!showed" class="btn" @click="showed = !showed">Читать полностью</BaseButton>
  <Transition name="extra">
    <div class="extra-text" v-show="showed">
      <article class="block">
        <h3 class="h3 title">Основные направления</h3>
        <ul class="list">
          <li
            class="list-item"
            v-for="dir in dirs"
          >
            {{ dir }}
          </li>
        </ul>
      </article>
      <p class="description" v-html="description"></p>
      <button class="collapse" @click="showed = false">Свернуть</button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  const aim = 'Разработка, выпуск и реализация конкурентоспособной запорной, запорно-регулирующей и предохранительной трубопроводной арматуры для широкого спектра применения в различных отраслях народного хозяйства, в установленные сроки, в заданных объемах, с уровнем качества, удовлетворяющим требованиям и ожиданиям наших потребителей и других заинтересованных сторон; обеспечение устойчивого экономического положения организации, здоровья и безопасности персонала с учетом минимальных воздействий на окружающую среду и рисков в области охраны труда.';
  const principles = [
    'Лидерство и ответственность на всех уровнях управления организации',
    'Каждый работник, выполняя свою работу несет ответственность за качество продукции, охрану окружающей среды и безопасность своего труда, добросовестно выполняя свою работу',
    'Постоянное проведение мониторинга бизнес-среды Предприятия, применение риск-ориентированного подхода',
    'Повышение качества продукции и безопасности труда, снижение экологической нагрузки на окружающую среду является постоянной целью всех подразделений и сотрудников организации',
    'Каждый работник, выполняя свою работу на стадии производственного процесса, рассматривает работника на последующей операции, как своего потребителя.',
  ];

  const description = `
    Политика в области качества, экологии, охраны здоровья и безопасности труда соответствуют целям, намерениям и среде Предприятия, поддерживает его стратегическое направление, является открытой информацией и обязательна к применению всеми сотрудниками ООО «ВАРК».
    <br/><br/>
    Руководство ООО «Восточная арматурная компания» берёт на себя обязательства за реализацию данной Политики в области качества, экологии, охраны здоровья и безопасности труда и выделение необходимых для этого ресурсов, за обеспечение понимания и поддержки её всеми работниками организации.
  `;

  const dirs = [
    'Повышение эффективности деятельности организации и ее конкурентоспособности, учитывая внешний и внутренний контекст, связанные с ним риски и возможности, а также требования и ожидания всех заинтересованных сторон',
    'Создание, внедрение и постоянное повышение результативности системы менеджмента, отвечающей требованиям внутренних нормативных документов, а также ГОСТ Р ИСО 9001-2015, ГОСТ Р ИСО 14001-2016, ГОСТ Р ИСО 45001-2020, СТО Газпром 9001-2018, СТО ИНТИ S.QS.7 (версия 2024 года) и ГОСТ ISO/IEC 17025-2019',
    'Выполнение законодательных и нормативно-правовых требований Российской Федерации, при осуществлении деятельности, в том числе в области обеспечении безопасности труда, промышленной и пожарной безопасности, охраны окружающей среды',
    'Построение взаимовыгодных отношений с заинтересованными сторонами, в т.ч. с поставщиками и с персоналом по результатам консультаций и участия их мнения в принятии решений',
    'Систематический мониторинг и анализ текущих и перспективных требований потребителей и их удовлетворенности нашей продукцией, услугами',
    'Совершенствование процессов, необходимых организации для достижения поставленных целей и успеха на рынке с учетом предотвращения загрязнения и результатов оценки  рисков от опасностей для пероснала',
    'Освоение новых и внедрение наилучших доступных технологий производства',
    'Развитие материально-технической базы организации, реконструкция и техническое перевооружение производства, приобретение новой техники и оборудования, в том числе для мониторинга и измерений',
    'Поиск и анализ потребностей рынка в новых видах продукции, гарантирующих надежность и безопасность объектов, создаваемых нашими партнерами',
    'Выполнение конструкторских разработок продукции с учетом передового научно-технического опыта и обеспечения патентной новизны',
  ];

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .block {
    max-width: 1071px;
    @apply tw-text-body-m-regular;

    @include sm {
      @apply tw-text-body-s-regular;
    }

    & + & {
      margin-top: 22px;
    }
  }

  .title {
    @apply tw-mb-10;
  }

  .list {
    list-style: disc;
    padding-left: 20px;
  }

  .list-item {
    & + & {
      @apply tw-mt-8;
    }
  }

  .btn {
    margin-top: 40px;
    background: #333333;

    @include sm {
      margin-top: 30px;
      width: 100%;
    }
  }

  .extra-text {
    padding-top: 22px;
  }

  .extra-enter-active {
    animation: fadeInDown;
    animation-duration: 600ms;
  }

  .extra-leave-active {
    animation: fadeOutUp;
    animation-duration: 800ms;
  }

  .description {
    font-size: 18px;
    line-height: 1.3;
    @apply tw-mt-40;

    @include sm {
      font-size: 16px;
      margin-top: 20px;
    }
  }

  .collapse {
    display: block;
    width: 100%;
    text-align: left;
    padding: 10px 0;
    @apply tw-text-text-gray tw-mt-20;

    @include sm {
      margin-top: 10px;
    }
  }
</style>
