import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: any[], dir = 'ASC'): any {
    const sorted = values.sort();

    return dir === 'ASC' ? sorted : sorted.reverse();
  }

}
