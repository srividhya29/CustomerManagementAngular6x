import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortwithName'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    array.sort((a: any, b: any) => {
      if (!a.lastName.localeCompare(b.lastName)) {
        return a.firstName.localeCompare(b.firstName);
      }
      return a.lastName.localeCompare(b.lastName);
    });
    return array;
  }

}
