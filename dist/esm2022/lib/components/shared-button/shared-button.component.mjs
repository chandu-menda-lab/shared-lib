import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class SharedButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc2hhcmVkLWJ1dHRvbi9zaGFyZWQtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zaGFyZWQtYnV0dG9uL3NoYXJlZC1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPdkUsTUFBTSxPQUFPLHFCQUFxQjtJQUN2QixLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ2hCLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDaEIsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFN0MsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUMsQ0FBQzt3R0FQVSxxQkFBcUI7NEZBQXJCLHFCQUFxQix3SUNQbEMsMkpBSUE7OzRGREdhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxlQUFlOzhCQUtoQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2hhcmVkLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NoYXJlZC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NoYXJlZC1idXR0b24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsYWJlbCA9ICdDbGljayc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcHJlc3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkgdGhpcy5wcmVzc2VkLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvbiBjbGFzcz1cInNoYXJlZC1idG5cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwib25DbGljaygpXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDxzcGFuPnt7IGxhYmVsIH19PC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19