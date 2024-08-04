import type { Image } from '../shared/image';
import type { PostListItem } from './listItem';

export interface PostDetailed {
  id: number,
  created_at: string,
  title: string,
  image: Image,
  body: string,
  other_posts: PostListItem[],
};
