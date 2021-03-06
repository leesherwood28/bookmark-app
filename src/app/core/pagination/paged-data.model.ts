export interface PagedData<T> {
  /**
   * Holds the paged data
   */
  pagedRecords: T[];

  /**
   * Indicates the total number of records available
   */
  totalRecords: number;

  /**
   * The page index of the paged data
   */
  pageIndex: number;
}
