import { SaveType } from 'src/app/core/generic/save-type.type';

export interface BookmarkSavedPageQueryParmas {
  type: SaveType;
  bookmarkId: string;
}
