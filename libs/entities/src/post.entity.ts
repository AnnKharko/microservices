import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  post_date?: number;

  @Column({ nullable: true })
  text?: string;
}
