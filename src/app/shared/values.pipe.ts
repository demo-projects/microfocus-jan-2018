import { Pipe, PipeTransform } from '@angular/core';
import { values } from 'lodash';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(object: any): any[] {
    return values(object);
  }

}
