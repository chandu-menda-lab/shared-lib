import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, Pipe, NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

class SharedButtonComponent {
    label = 'Click';
    disabled = false;
    pressed = new EventEmitter();
    onClick() {
        if (!this.disabled)
            this.pressed.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SharedButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SharedButtonComponent, selector: "shared-button", inputs: { label: "label", disabled: "disabled" }, outputs: { pressed: "pressed" }, ngImport: i0, template: "<button class=\"shared-btn\" [disabled]=\"disabled\" (click)=\"onClick()\">\r\n  <ng-content></ng-content>\r\n  <span>{{ label }}</span>\r\n</button>\r\n", styles: [".shared-btn{padding:8px 14px;border-radius:8px;border:none;font-weight:600;cursor:pointer;background:linear-gradient(180deg,#1ea7fd,#0b78d1);color:#fff}.shared-btn:disabled{opacity:.6;cursor:not-allowed}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SharedButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-button', template: "<button class=\"shared-btn\" [disabled]=\"disabled\" (click)=\"onClick()\">\r\n  <ng-content></ng-content>\r\n  <span>{{ label }}</span>\r\n</button>\r\n", styles: [".shared-btn{padding:8px 14px;border-radius:8px;border:none;font-weight:600;cursor:pointer;background:linear-gradient(180deg,#1ea7fd,#0b78d1);color:#fff}.shared-btn:disabled{opacity:.6;cursor:not-allowed}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], pressed: [{
                type: Output
            }] } });

class TruncatePipe {
    transform(value, limit = 20, ellipsis = '...') {
        if (!value)
            return '';
        return value.length > limit ? value.slice(0, limit) + ellipsis : value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TruncatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TruncatePipe, name: "truncate" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TruncatePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'truncate' }]
        }] });

class SharedModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: SharedModule, declarations: [SharedButtonComponent, TruncatePipe], imports: [CommonModule], exports: [SharedButtonComponent, TruncatePipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SharedModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SharedButtonComponent, TruncatePipe],
                    imports: [CommonModule],
                    exports: [SharedButtonComponent, TruncatePipe]
                }]
        }] });

class SharedService {
    _counter = 0;
    get counter() { return this._counter; }
    increment() { this._counter++; }
    reset() { this._counter = 0; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SharedService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SharedButtonComponent, SharedModule, SharedService, TruncatePipe };
//# sourceMappingURL=example-shared-lib.mjs.map
