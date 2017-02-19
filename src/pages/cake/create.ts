import { Component } from '@angular/core';
import { Constants } from '../../app/constants'
import {NavController, Events} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Cake} from "../../domain/Cake";

@Component({
    selector: 'page-new-cake',
    templateUrl: 'create.html'
})
export class CakeCreatePage {

    private form: FormGroup;

    constructor(readonly navCtrl: NavController,
                readonly formBuilder: FormBuilder,
                readonly events: Events,
                readonly cake: Cake) {
        this.form = formBuilder.group({
            name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            comment: ['', Validators.required],
            imageUrl: ['', Validators.compose([Validators.pattern('^(https?|ftp)://.*'), Validators.required])],
            yumFactor: ['', Validators.compose([Validators.pattern('^[1-9]\d*$'), Validators.required])]
        });
    }

    public add() {
        if (!this.form.valid) return;
        this.cake.addCake(this.form.value).subscribe(x => {
            if (x == 201) this.events.publish(Constants.CakesInfoUpdated, 'Cake was added successfully');
        }, e => {
            console.error(e); // Needs more sophisticated and advanced error management
        }, () => {
            this.navCtrl.pop();
        });
    }
}
