import { NgModule } from '@angular/core';

import { KogniticSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [KogniticSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [KogniticSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class KogniticSharedCommonModule {}
