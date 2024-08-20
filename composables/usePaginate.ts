import type { UnwrapRef } from 'vue';
import type { PaginateRes, Meta } from '@/types/shared/paginate';

export type FetchOptions = {
  page: Ref<number>,
};

export default function<T>(key: string, fetchFn: (opts: FetchOptions) => Promise<PaginateRes<T[]>>, pageInit = 1) {
  function getKey(str: string) {
    return key + str;
  }

  const page = ref<number>(pageInit);
  const meta = ref<Meta | null>(null);
  const data = ref<T[] | null>(null);
  const loading = ref(false);

  const isEnd = computed(() => {
    if(!meta.value) return false;
    return meta.value.current_page >= meta.value.last_page;
  });

  const nextPage = computed(() => {
    if(!meta.value) return -1;
    return meta.value.current_page + 1;
  });

  async function asyncLoad() {
    return useAsyncData(getKey('load'), () => fetchFn({ page }));
  };

  function setPaginate(res: PaginateRes<T[]>) {
    data.value = res.data as UnwrapRef<T[]>;
    meta.value = res.meta;
  }

  async function loadMore() {
    loading.value = true;
    const res = await fetchFn({ page: nextPage });
    meta.value = res.meta;
    page.value = res.meta.current_page;
    loading.value = false;

    if(data.value === null) {
      data.value = res.data as UnwrapRef<T[]>;
    } else {
      const _data: T[] = [
        ...(data.value as T[]),
        ...res.data,
      ];
      data.value = _data as UnwrapRef<T[]>;
    }

    return res;
  };

  function reset() {
    page.value = pageInit;
    data.value = null;
    meta.value = null;
  }

  return {
    page,
    data,
    isEnd,
    loading,
    setPaginate,
    asyncLoad,
    loadMore,
    reset,
  }
};
