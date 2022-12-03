import { NgModule }             from '@angular/core';
import { BrowserModule  }       from '@angular/platform-browser';
import { CommonModule }         from '@angular/common'
import { SharedModule }         from '../shared/shared.module';
import { CatalogComponent }     from './catalog.component';
import { CatalogService }       from './catalog.service';
import { Pager }                from '../shared/components/pager/pager';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';

@NgModule({
    imports: [BrowserModule, SharedModule, CommonModule],
    declarations: [CatalogComponent, CatalogItemComponent],
    providers: [CatalogService]
})
export class CatalogModule { }
