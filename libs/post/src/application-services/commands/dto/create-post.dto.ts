import { IPost } from '@lib/post/domain';

export type CreatePostDto = Pick<IPost, 'title' | 'message' | 'author_id'>;
