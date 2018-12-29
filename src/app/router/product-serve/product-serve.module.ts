import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServeComponent } from './product-serve.component';
import { ProductServeRouting } from './product-serve.routing';
import { RouterModule } from '@angular/router';
import { SeriveViewComponent } from './serive-view/serive-view.component';
import { SeriveIntroductionComponent } from './serive-introduction/serive-introduction.component';
import { SeriveHardwareComponent } from './serive-hardware/serive-hardware.component';
import { SerivePlatformComponent } from './serive-platform/serive-platform.component';
import { SeriveFunctionComponent } from './serive-function/serive-function.component';
import { SeriveAdvantageComponent } from './serive-advantage/serive-advantage.component';
import { ServicesService } from './services.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { ServiceProjectComponent } from './service-project/service-project.component';
import { ServiceFeaturesComponent } from './service-features/service-features.component';
import { ServiceSolutionComponent } from './service-solution/service-solution.component';

@NgModule({
  declarations: [
    ProductServeComponent,
    SeriveViewComponent,
    SeriveIntroductionComponent,
    SeriveHardwareComponent,
    SerivePlatformComponent,
    SeriveFunctionComponent,
    SeriveAdvantageComponent,
    ServiceProjectComponent,
    ServiceFeaturesComponent,
    ServiceSolutionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    RouterModule,
    FormsModule,
    ProductServeRouting
  ],
  providers: [ServicesService]
})
export class ProductServeModule {}
