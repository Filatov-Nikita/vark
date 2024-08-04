<template>
  <div class="post-one page-pb">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread" />
      <PostDetailed :post="post" />
      <PostsOther :posts="post.other_posts" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import PostDetailed from '@/app-modules/posts/detailed/ui/index.vue';
  import PostsOther from '@/app-modules/posts/other/ui/index.vue';
  import postImage from '@/app-modules/home/posts/ui/assets/1.jpg';

  useBreadcrumbsStore().set([
    { label: 'Новости', to: { name: 'posts' } },
    { label: 'Новости 1', to: { name: 'posts' } },
  ]);

  const p = {
    title: 'ООО «ВАРК» участвовал в выставке «Газ. Нефть. Технологии» в 2024 г. Выставка проходит в ЭКСПО-центре',
    created_at: '2 июня 2024',
    image: {
      width: 1408,
      height: 940,
      path: postImage,
    },
  };

  const post = {
    id: 1,
    title: 'ООО «ВАРК» участвовал в выставке «Газ. Нефть. Технологии» в 2024 г. Выставка проходит в ЭКСПО-центре',
    created_at: '2 июня 2024',
    body: `
      <p>15-16 марта 2023 года г. Новый Уренгой, Деловой центр "ЯМАЛ", ул. Юбилейная, 5. ООО «Восточная Арматурная Компания» примет участие в 17-й международной специализированной выставке «Газ Нефть Новые Технологии - Крайнему Северу», которая состоится с 15 по 16 марта 2023 года в городе Новый Уренгой в рамках Ямальского форума. На стенде компании будет представлена продукция компании, новые разработки и возможности компании.</p>
      <p>Выставка состоится с 15 по 16 марта 2023 года в городе Новый Уренгой в рамках Ямальского форума. На стенде компании будет представлена продукция компании, новые разработки и возможности компании.</p>
    `,
    other_posts: [ p, p, p ],
    image: {
      width: 1408,
      height: 940,
      path: postImage,
    },
  };
</script>

<style scoped lang="scss">
  .post-one {
    padding-top: 75px;
  }

  .bread {
    margin-bottom: 60px;
  }
</style>
