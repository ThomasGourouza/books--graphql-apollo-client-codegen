import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'fr':
        return 'Français';
      case 'de':
        return 'Deutsch';
      case 'en':
        return 'English';
      default:
        return '';
    }
  }

}
