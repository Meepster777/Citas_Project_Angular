import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    spinnerRequestCount = 0;

    constructor(private spinnerService: NgxSpinnerService) { }

    spin() {
        this.spinnerRequestCount++;
        this.spinnerService.show(undefined, {
            type: "fire",
            bdColor: "rgba(28,221,172,0)",
            color: "#dd0e90"
        });
    }

    idle() {
        this.spinnerRequestCount--;
        if (this.spinnerRequestCount <= 0) {
            this.spinnerRequestCount = 0;
            this.spinnerService.hide();
        }
    }
}