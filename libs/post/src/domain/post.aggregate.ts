import { IPost } from './post.inerface';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { PostServices } from './services';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsUUID,
  validateSync,
} from 'class-validator';
import { Exclude } from 'class-transformer';

export class PostAggregate extends PostServices implements IPost {
  @IsUUID()
  id: string = randomStringGenerator();

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsUUID()
  author_id: string;

  @IsBoolean()
  @Exclude()
  published = false;

  @IsString()
  created_at = new Date().toISOString();

  @IsString()
  updated_at = new Date().toISOString();

  private constructor() {
    super();
  }
  static create(post: Partial<IPost>) {
    const _post = new PostAggregate();
    _post.setNotPublished();
    Object.assign(_post, post);
    _post.updated_at = post?.id ? new Date().toISOString() : _post.updated_at;
    const errors = validateSync(_post, { whitelist: true });

    if (errors.length) {
      throw new Error('Post not valid');
    }
    return _post;
  }

  //another way WITHOUT USING SERVICES
  //   setPublished() {
  //     this.published = true;
  //   }
}
