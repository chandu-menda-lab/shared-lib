import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SharedButtonComponent {
    label: string;
    disabled: boolean;
    pressed: EventEmitter<void>;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SharedButtonComponent, "shared-button", never, { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "pressed": "pressed"; }, never, ["*"], false, never>;
}
