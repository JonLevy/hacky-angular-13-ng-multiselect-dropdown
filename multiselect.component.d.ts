import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { ListItem, IDropdownSettings } from "./multiselect.model";
import { ListFilterPipe } from "./list-filter.pipe";
import * as i0 from "@angular/core";
export declare const DROPDOWN_CONTROL_VALUE_ACCESSOR: any;
export declare class MultiSelectComponent implements ControlValueAccessor {
    private listFilterPipe;
    private cdr;
    _settings: IDropdownSettings;
    _data: Array<ListItem>;
    selectedItems: Array<ListItem>;
    isDropdownOpen: boolean;
    _placeholder: string;
    private _sourceDataType;
    private _sourceDataFields;
    filter: ListItem;
    defaultSettings: IDropdownSettings;
    set placeholder(value: string);
    disabled: boolean;
    set settings(value: IDropdownSettings);
    set data(value: Array<any>);
    onFilterChange: EventEmitter<ListItem>;
    onDropDownClose: EventEmitter<ListItem>;
    onSelect: EventEmitter<ListItem>;
    onDeSelect: EventEmitter<ListItem>;
    onSelectAll: EventEmitter<Array<ListItem>>;
    onDeSelectAll: EventEmitter<Array<ListItem>>;
    private onTouchedCallback;
    private onChangeCallback;
    onFilterTextChange($event: any): void;
    constructor(listFilterPipe: ListFilterPipe, cdr: ChangeDetectorRef);
    onItemClick($event: any, item: ListItem): boolean;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouched(): void;
    trackByFn(index: any, item: any): any;
    isSelected(clickedItem: ListItem): boolean;
    isLimitSelectionReached(): boolean;
    isAllItemsSelected(): boolean;
    showButton(): boolean;
    itemShowRemaining(): number;
    addSelected(item: ListItem): void;
    removeSelected(itemSel: ListItem): void;
    emittedValue(val: any): any;
    objectify(val: ListItem): {};
    toggleDropdown(evt: any): void;
    closeDropdown(): void;
    toggleSelectAll(): boolean;
    getFields(inputData: any): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiSelectComponent, "ng-multiselect-dropdown", never, { "placeholder": "placeholder"; "disabled": "disabled"; "settings": "settings"; "data": "data"; }, { "onFilterChange": "onFilterChange"; "onDropDownClose": "onDropDownClose"; "onSelect": "onSelect"; "onDeSelect": "onDeSelect"; "onSelectAll": "onSelectAll"; "onDeSelectAll": "onDeSelectAll"; }, never, never>;
}
