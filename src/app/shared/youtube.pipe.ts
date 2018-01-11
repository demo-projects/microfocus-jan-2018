import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${value}`
    );
  }

}
