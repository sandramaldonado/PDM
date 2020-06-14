import { NgModule, ModuleWithProviders } from '@angular/core';
import { OnboardingComponent } from './components/Onboarding/Onboarding.component';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        OnboardingComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        OnboardingComponent
    ]
})
export class IonicAcademyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicAcademyModule,
            providers: []
        };
    }
}