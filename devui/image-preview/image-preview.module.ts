import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview.component';



@NgModule({
  declarations: [ImagePreviewComponent],
  imports: [
    // CommonModule
  ],
  exports: [ImagePreviewComponent]
})
export class ImagePreviewModule { }
