import { Injectable } from '@angular/core';
import { Page } from './page.model';
import { PagedData } from './paged-data.model';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  /**
   * Gets the requested paged records from the provided
   * records
   * @param {T[]} records The records to get page of
   * @param {Page} requestPage The requested page
   * @return {PagedData<T>} The paged data
   */
  getPagedRecords<T>(records: T[], requestPage: Page): PagedData<T> {
    const totalRecords = records.length;
    const firstRecordIndex = requestPage.pageSize * requestPage.pageIndex;
    const lastRecordIndex = firstRecordIndex + requestPage.pageSize;

    const pagedRecords = records.slice(firstRecordIndex, lastRecordIndex);
    return {
      pagedRecords,
      totalRecords,
    };
  }
}
