import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatSelectModule,
        MatDialogModule,
        MatGridListModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatSortModule
    } from "@angular/material";
import { MatIconModule} from "@angular/material";
import { MatFormFieldModule} from "@angular/material";
import { MatInputModule} from "@angular/material";
import { MatDatepickerModule} from "@angular/material";





@NgModule({
    imports: [MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatSelectModule,
        MatDialogModule,
        MatGridListModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatSortModule],
    exports: [ MatButtonModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatTableModule,
         MatSelectModule,
         MatDialogModule,
         MatGridListModule,
         MatSnackBarModule,
         MatPaginatorModule,
         MatSortModule],
        

})
export class MaterialModule{


}