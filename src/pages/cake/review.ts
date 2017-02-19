

import {NavController, Events, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Component} from "@angular/core";
import {Cake} from "../../domain/Cake";
import {CakeDto} from "../../readonly/CakeDto";
import {Constants} from "../../app/constants";
import {CakeReviewCommand} from "../../domain/CakeReviewCommand";

@Component({
    selector: 'page-review-cake',
    templateUrl: 'review.html'
})

export class CakeReviewPage {
    private readonly form: FormGroup;
    private readonly cakeDto: CakeDto;

    constructor(readonly navCtrl: NavController,
                readonly formBuilder: FormBuilder,
                readonly navParams: NavParams,
                readonly events: Events,
                readonly cake: Cake) {
        this.cakeDto = navParams.data;
        this.form = formBuilder.group({
            comment: [this.cakeDto.comment, Validators.required],
        });
    }

    public isValidUrl (str: string): boolean {
        return Constants.UrlPattern.test(str);
    }

    public review() {
        if (!this.form.valid) return;
        const command: CakeReviewCommand = { comment: this.form.value.comment, id: this.cakeDto.id};
        this.cake.reviewCake(command).subscribe(x => {
            if (x == 200) this.events.publish(Constants.CakesInfoUpdated, 'Cake was reviewed successfully');
        }, e => {
            console.error(e); // Needs more sophisticated and advanced error management
        }, () => {
            this.navCtrl.pop();
        });
    }
}