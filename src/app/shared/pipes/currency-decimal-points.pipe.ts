import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyDecimalPoints'
})
export class CurrencyDecimalPointsPipe implements PipeTransform {
  transform(price: number, decimals: number): any {
    return price.toFixed(decimals);
  }
}

