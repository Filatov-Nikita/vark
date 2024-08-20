import type { Image } from '../shared/image';
import type { PostListItem } from './listItem';

export interface PostDetailed {
  id: number,
  title: string,
  created_at: string,
  image: Image,
  body: string,
  slug: string,
};
