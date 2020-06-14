import { NgModule, ModuleWithProviders } from '@angular/core';
import { HomeHito3PageModule } from './components/home-hito3/home-hito3.module'
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        HomeHito3PageModule
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        HomeHito3PageModule
    ]
})
export class OnboardingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: OnboardingModule,
        };
    }
}