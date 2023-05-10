import { IPost } from './post.inerface';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { AggregateRoot } from '@nestjs/cqrs';

export class PostAggregate extends AggregateRoot implements IPost {
  id: string = randomStringGenerator();
  title: string;
  message: string;
  author_id: string;
  published: string;
  created_at: string;
  updated_at: string;

  private constructor() {
    super();
  }
  static create(post: Partial<IPost>) {
    const _post = new PostAggregate();
    Object.assign(_post, post);
    return _post;
  }
}
