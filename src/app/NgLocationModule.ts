import {CommonModule}  from "@angular/common";
import {NgModule}      from '@angular/core';
import {LocationProxy} from "./Service/LocationProxy";

@NgModule({
    imports  : [
        CommonModule
    ],
    providers: [
        LocationProxy
    ]
})
export class NgLocationModule {


}

