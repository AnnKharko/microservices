import { IPost } from '../post.inerface';

export interface ISetPublished {
  setPublished(): void;
}

export const SET_PUBLISHED = async function (this: IPost) {
  this.published = true;
};
