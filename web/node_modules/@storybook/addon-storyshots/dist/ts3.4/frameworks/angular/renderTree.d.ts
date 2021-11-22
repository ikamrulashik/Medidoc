declare function getRenderedTree(story: any): Promise<{
    componentInstance: {};
    componentRef: import("@angular/core").ComponentRef<unknown>;
    ngZone: import("@angular/core").NgZone;
    debugElement: import("@angular/core").DebugElement;
    nativeElement: any;
    elementRef: import("@angular/core").ElementRef<any>;
    changeDetectorRef: import("@angular/core").ChangeDetectorRef;
}>;
export default getRenderedTree;
