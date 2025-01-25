import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySymbols',
  standalone: true
})
export class CurrencySymbolsPipe implements PipeTransform {
  transform(value: string): string {
    return  value.slice(0, 3).toUpperCase();
  }
}