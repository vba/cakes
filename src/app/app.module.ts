import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {CakeCreatePage} from '../pages/cake/create';
import {HomePage} from '../pages/home/home';
import {CakeRepository} from '../readonly/CakeRepository'
import {Cake} from "../domain/Cake";
import {CakeReviewPage} from "../pages/cake/review";

@NgModule({
    declarations: [
        MyApp,
        CakeCreatePage,
        CakeReviewPage,
        HomePage,
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CakeCreatePage,
        CakeReviewPage,
        HomePage,
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CakeRepository,
        Cake,
    ]
})
export class AppModule {
}
