<template>
  <div class="post-one page-pb">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread" />
      <PostDetailed v-if="post" :post="post.data" />
      <PostsOther v-if="otherPosts" :posts="otherPosts.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import PostDetailed from '@/app-modules/posts/detailed/ui/index.vue';
  import PostsOther from '@/app-modules/posts/other/ui/index.vue';
  import type { PostDetailed as IPostDetailed } from '@/types/posts/detailed';
  import type { PostListItem } from '@/types/posts/listItem';
  import type { DataRes } from '@/types/shared/response';

  const route = useRoute();

  const url = computed(() => `posts/${route.params.slug}`);
  const { data: post, error } = await useFetch<DataRes<IPostDetailed>>(url, { baseURL: useAppConfig().apiPrefix });

  if(error.value || !post.value) {
    throw createError({
      statusCode: error.value?.statusCode ?? 500,
      fatal: true,
    });
  };

  const { data: otherPosts } = await useFetch<DataRes<PostListItem[]>>('posts/others', {
    baseURL: useAppConfig().apiPrefix,
    query: computed(() => ({
      slug: route.params.slug,
    })),
  });

  useBreadcrumbsStore().set([
    { label: 'Новости', to: { name: 'posts' } },
    { label: post.value.data.title, to: { name: 'posts-slug', params: { slug: post.value.data.slug } } },
  ]);
</script>

<style scoped lang="scss">
  .post-one {
    padding-top: 75px;
  }

  .bread {
    margin-bottom: 60px;
  }
</style>
