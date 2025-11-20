import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TruncatePipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGlwZXMvdHJ1bmNhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLFFBQVEsR0FBRyxLQUFLO1FBQ25ELElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEIsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekUsQ0FBQzt3R0FKVSxZQUFZO3NHQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBRHhCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndHJ1bmNhdGUnIH0pXHJcbmV4cG9ydCBjbGFzcyBUcnVuY2F0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbGltaXQgPSAyMCwgZWxsaXBzaXMgPSAnLi4uJyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gbGltaXQgPyB2YWx1ZS5zbGljZSgwLCBsaW1pdCkgKyBlbGxpcHNpcyA6IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=