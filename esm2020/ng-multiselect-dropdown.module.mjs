import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectComponent } from './multiselect.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ListFilterPipe } from './list-filter.pipe';
import * as i0 from "@angular/core";
export class NgMultiSelectDropDownModule {
    static forRoot() {
        return {
            ngModule: NgMultiSelectDropDownModule
        };
    }
}
NgMultiSelectDropDownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgMultiSelectDropDownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgMultiSelectDropDownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgMultiSelectDropDownModule, declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe], imports: [CommonModule, FormsModule], exports: [MultiSelectComponent] });
NgMultiSelectDropDownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgMultiSelectDropDownModule, providers: [ListFilterPipe], imports: [[CommonModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgMultiSelectDropDownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                    providers: [ListFilterPipe],
                    exports: [MultiSelectComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbXVsdGlzZWxlY3QtZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25nLW11bHRpc2VsZWN0LWRyb3Bkb3duL3NyYy9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBU3BELE1BQU0sT0FBTywyQkFBMkI7SUFDcEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7d0hBTFEsMkJBQTJCO3lIQUEzQiwyQkFBMkIsaUJBTHZCLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLGNBQWMsYUFEaEUsWUFBWSxFQUFFLFdBQVcsYUFHekIsb0JBQW9CO3lIQUduQiwyQkFBMkIsYUFKM0IsQ0FBQyxjQUFjLENBQUMsWUFGbEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDOzJGQU16QiwyQkFBMkI7a0JBUHZDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDcEMsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxDQUFDO29CQUMzRSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzNCLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNdWx0aVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGlzdEZpbHRlclBpcGUgfSBmcm9tICcuL2xpc3QtZmlsdGVyLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW011bHRpU2VsZWN0Q29tcG9uZW50LCBDbGlja091dHNpZGVEaXJlY3RpdmUsIExpc3RGaWx0ZXJQaXBlXSxcbiAgcHJvdmlkZXJzOiBbTGlzdEZpbHRlclBpcGVdLFxuICBleHBvcnRzOiBbTXVsdGlTZWxlY3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgTmdNdWx0aVNlbGVjdERyb3BEb3duTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nTXVsdGlTZWxlY3REcm9wRG93bk1vZHVsZT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmdNb2R1bGU6IE5nTXVsdGlTZWxlY3REcm9wRG93bk1vZHVsZVxuICAgICAgfTtcbiAgICB9XG59XG4iXX0=