import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TagsInputDemoBasicComponent } from './basic/basic.component';
import { TagsInputDemoComponent } from './tags.input-demo.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TagsInputModule } from '../tags.input.module';
import { TagsInputDemoAsyncComponent } from './async/async.component';
import { StickyModule, StickyComponent } from '../../sticky';
import { AnchorModule } from '../../anchor';
import { DDemoNavModule } from 'src/app/component/d-demo-nav.module';

@NgModule({
  imports: [
    DDemoNavModule,
    CommonModule,
    FormsModule,
    TagsInputModule,
    DevUIApiModule,
    DevUICodeboxModule,
    StickyModule,
    AnchorModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo' },
      { path: 'demo', component: TagsInputDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        api: require('!html-loader!markdown-loader!../doc/api.md')
      }}
    ])
  ],
  exports: [

  ],
  declarations: [
    TagsInputDemoComponent,
    TagsInputDemoBasicComponent,
    TagsInputDemoAsyncComponent
  ]
})
export class TagsInputDemoModule { }
