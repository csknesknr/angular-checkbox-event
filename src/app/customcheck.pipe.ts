import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customcheck',
})
export class CustomcheckPipe implements PipeTransform {
  transform(value: { value: number; selected: boolean }[], search: number) {
    return value.filter((f) => f.value == search);
  }
}
