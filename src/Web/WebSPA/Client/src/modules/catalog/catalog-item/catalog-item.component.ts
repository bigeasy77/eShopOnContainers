import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { ICatalogItem } from '../../shared/models/catalogItem.model';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'modules/shared/services/configuration.service';

@Component({
    selector: 'esh-catalog_item .esh-catalog_item .mb-5',
    styleUrls: ['./catalog-item.component.scss'],
    templateUrl: './catalog-item.component.html'
})
export class CatalogItemComponent implements OnInit {
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