import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TechnologyComponent} from './technology.component';
import {TechnologyRouting} from './technology-routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { FooterModule } from 'src/app/common/footer/footer.module';

@NgModule({
    declarations: [
        TechnologyComponent,
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FooterModule,
        TechnologyRouting
    ],
    entryComponents: [
      FooterComponent
    ],
})
export class TechnologyModule {
}
