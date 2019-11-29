import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { Component } from '@angular/core';
@Component({
  selector: 'd-image-preview-demo',
  templateUrl: './image-preview-demo.component.html',
})
export class ImagePreviewDemoComponent {
  imagePreviewDemoBasic: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./basic/basic.component.html')},
    {title: 'TS', language: 'typescript', code: require('!!raw-loader!./basic/basic.component.ts')},
  ];
  constructor() {
  }
}
