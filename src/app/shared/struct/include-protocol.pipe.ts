import { Pipe, PipeTransform } from '@angular/core';

/**
 * Parses a url and includes a protocal if it does not
 * already have one
 */
@Pipe({
  name: 'includeProtocol',
})
export class IncludeProtocol implements PipeTransform {
  /**
   * Transforms the provided url, adding a protocol
   * if it does not have one
   * @param {string} url The url to transform
   * @return {string} The url with the inclusion of a protocol
   */
  transform(url: string): string {
    if (url.startsWith('https://') || url.startsWith('http://')) {
      return url;
    }
    // For safety, assume that site is to be https
    return `https://${url}`;
  }
}
