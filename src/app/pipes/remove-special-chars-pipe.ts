import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpecialChars'
})
export class RemoveSpecialCharsPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.replace(/[^a-zA-Z0-9]/g, '');
  }
}
