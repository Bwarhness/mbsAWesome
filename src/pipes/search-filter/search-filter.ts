import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchFilter',
  pure:false
})
export class SearchFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(results : any, IndexOf: number, IsAsc:boolean): any[] {
    if (!IndexOf) {
      return results
    }
    if (results) {
      IndexOf--;      
        results.sort((a: any, b: any) => {
          let val1 = a.cells[IndexOf]
          let val2 = b.cells[IndexOf]
          if (val1 < val2) {
            return -1;
          } else if (val1 > val2) {
            return 1;
          } else {
            return 0;
          }
        });
        if (IsAsc == true) {
          results = results.reverse();
        }
        return results;
    }
  }
}
