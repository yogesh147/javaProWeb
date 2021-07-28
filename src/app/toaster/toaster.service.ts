import { Injectable } from '@angular/core';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
import { Subscription, Observable } from "rxjs";
@Injectable({ providedIn: 'root' })
export class Toaster {

    private toastOptions: ToastOptions = {
        title: 'title',
        showClose: true,
        showDuration: false,
        timeout: 5000,
        theme: 'bootstrap',
        onAdd: (toast: ToastData) => {
        },
        onRemove: function (toast: ToastData) {
        }
    }
    
    constructor() {
    }

    default(toastaService: ToastaService, title: any, message: any) {
        let interval = 2000;
        let subscription: Subscription;
        this.toastOptions.msg = message;
        this.toastOptions.title = title;
        toastaService.default(this.toastOptions);
    }

    info(toastaService: ToastaService, title: any, message: any) {
        let interval = 2000;
        let subscription: Subscription;
        this.toastOptions.msg = message;
        this.toastOptions.title = title;
        toastaService.info(this.toastOptions);
    }

    success(toastaService: ToastaService, title: any, message: any) {
        let interval = 5000;
        let subscription: Subscription;
        this.toastOptions.msg = message;
        this.toastOptions.title = title;
        toastaService.success(this.toastOptions);
    }


    wait(toastaService: ToastaService, title: any, message: any) {
        let interval = 2000;
        let subscription: Subscription;
        this.toastOptions.msg = message;
        this.toastOptions.title = title;
        toastaService.wait(this.toastOptions);
    }

    error(toastaService: ToastaService, title: any, message: any) {
        let interval = 2000;
        let subscription: Subscription;
        this.toastOptions.msg = message;
        this.toastOptions.title = title;
        toastaService.error(this.toastOptions);
    }

    warning(toastaService: ToastaService, title: any, message: any) {
        let interval = 2000;
        let subscription: Subscription;
        this.toastOptions.msg = message;
        this.toastOptions.title = title;
        toastaService.warning(this.toastOptions);

    }
}
