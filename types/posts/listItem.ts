import type { Image } from '../shared/image';

export interface PostListItem {
  image: Image,
  created_at: string,
  title: string,
}
