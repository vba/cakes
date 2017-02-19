import {Component} from '@angular/core';
import {NavController, Events, ToastController} from 'ionic-angular';
import {CakeRepository} from "../../readonly/CakeRepository";
import {CakeDto} from "../../readonly/CakeDto";
import {CakeCreatePage} from "../cake/create";
import { Constants } from '../../app/constants'
import {CakeReviewPage} from "../cake/review";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private static readonly UrlPattern: RegExp = /^(ftp|http|https):\/\/[^ "]+$/i; // probably permits too much

    cakes: CakeDto[] = [];

    constructor(readonly navCtrl: NavController,
                readonly cakeRepository: CakeRepository,
                readonly toastCtrl: ToastController,
                readonly events: Events) {

        this.refresh();
        this.events.subscribe(Constants.CakesInfoUpdated, (message) => {
            this.toastMessage(message);
            this.refresh();
        });
    }

    private toastMessage(message: string) {
        const toast = this.toastCtrl.create({
            message: message,
            position: 'top',
            duration: 2000
        });
        toast.present();
    }

    private refresh() {
        this.cakeRepository.getAll().subscribe((x: CakeDto[]) => this.cakes = x.filter(y => !this.isEmpty(y)));
    }

    public isValidUrl (str: string): boolean {
        return Constants.UrlPattern.test(str);
    }

    public isEmpty(cakeDto: CakeDto): boolean {
        return [cakeDto.name, cakeDto.comment].join('').trim().length < 1;
    }

    public addNewCake() {
        this.navCtrl.push(CakeCreatePage);
    }

    public onCakeSelected(cake: CakeDto) {
        this.navCtrl.push(CakeReviewPage, cake);
    }
}
