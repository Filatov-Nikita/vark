import type { Image } from '../shared/image';

export interface PostListItem {
  id: number,
  title: string,
  thumbnail: Image | null,
  slug: string,
  created_at: string,
}
