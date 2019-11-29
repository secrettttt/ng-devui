import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { ImageOption } from './image-preview.type';

@Component({
  selector: 'd-image-preview',
  template: `
    <div>
      <a [href]="images[0].link" target="_blank">
        <img [src]="images[0].src" [alt]="images[0].alt" (click)="preview($event)">
      </a>
    </div>

    <!-- <div *ngFor="let image of images">
      <ng-template *ngIf="image.link; then linkImg; else onlyImg"></ng-template>
      <ng-template #linkImg>
        <a [href]="image.link" target="_blank">
          <ng-template *ngTemplateOutlet="pureImg; context: { src: image.src, alt: image.alt }"></ng-template>
        </a>
      </ng-template>
      <ng-template #onlyImg>
          <ng-template *ngTemplateOutlet="pureImg; context: { src: image.src, alt: image.alt }"></ng-template>
      </ng-template>
      
      <ng-template #pureImg let-src="src" let-alt="alt">
        <img [src]="src" [alt]="alt" (click)="preview($event)">
      </ng-template>
    </div> -->
  `,
  styles: []
})
export class ImagePreviewComponent implements OnInit {

  @Input() images: string | ImageOption | ImageOption[];
  @ViewChild('pureImg', null) pureImg: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  preview(event: MouseEvent) {
    console.log('Current image url:', (event.target as any).getAttribute('src'));
  }

}
