import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule, MatIconModule, MatListModule, MatExpansionModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule, MatIconModule, MatListModule, MatExpansionModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule, MatIconModule, MatListModule, MatExpansionModule],
})
export class MaterialModule { }