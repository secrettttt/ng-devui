import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'ng-devui/auto-complete/auto-complete.module';

import { ImagePreviewDemoComponent } from './image-preview-demo.component';
import { ButtonModule } from 'ng-devui/button/button.module';
import { ImagePreviewModule } from 'ng-devui/image-preview';
import { BasicComponent } from './basic/basic.component';

import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';

@NgModule({
  imports: [
    CommonModule,
    ImagePreviewModule,
    FormsModule,
    AutoCompleteModule,
    DevUIApiModule,
    DevUICodeboxModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo' },
      { path: 'demo', component: ImagePreviewDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        api: require('!html-loader!markdown-loader!../doc/api.md')
      }}
    ])
  ],
  exports: [ImagePreviewDemoComponent],
  declarations: [
    ImagePreviewDemoComponent,
    BasicComponent
  ],
  providers: [],
  entryComponents: [ImagePreviewDemoComponent]
})
export class ImagePreviewDemoModule {
}
