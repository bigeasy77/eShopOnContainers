import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { ICatalogItem } from '../../shared/models/catalogItem.model';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'modules/shared/services/configuration.service';

@Component({
    selector: 'esh-catalog_item-detail .esh-catalog_item-detail .mb-5',
    styleUrls: ['./catalog-item-detail.component.scss'],
    templateUrl: './catalog-item-detail.component.html'
})
export class CatalogItemDetailComponent implements OnInit {
    public item: ICatalogItem = <ICatalogItem>{};

    constructor(private service: CatalogService,  private configurationService: ConfigurationService, private route: ActivatedRoute) { }

    ngOnInit() {
        // Configuration Settings:
        if (this.configurationService.isReady) 
            this.loadData();
        else
            this.configurationService.settingsLoaded$.subscribe(x => {
                this.loadData();
            });
    }

    loadData() {
        this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getItem(id);
        });

    }

    getItem(id: number) {
        this.service.getItem(id).subscribe(item => {
            this.item = item;
            console.log('Item retrieved: ' + item.id);
            console.log(this.item);
        });
    }
}