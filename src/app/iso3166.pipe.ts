import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { countryToAlpha2 } from "country-to-iso";

@Pipe({
  name: 'iso3166',
  standalone: true
})
export class Iso3166Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string | null{
    let code = countryToAlpha2(value)?.toString();

    if(!code) return null;
    return code?.toLowerCase();
  }

}
