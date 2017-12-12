import {EventEmitter, Injectable} from "@angular/core";
import {Location} from "@angular/common";

@Injectable()
export class LocationProxy {


    onGo           = new EventEmitter<string>();
    onReplaceState = new EventEmitter<string>();
    onChange       = new EventEmitter<string>();

    constructor(public location: Location) {
    }


    go(url: string) {
        this.location.go(url);
        this.onGo.emit(url);
        this.onChange.emit(url);
    }

    replaceState(url: string) {
        this.location.replaceState(url);
        this.onReplaceState.emit(url);
        this.onChange.emit(url);
    }

    path() {
        return this.location.path();
    }

}
