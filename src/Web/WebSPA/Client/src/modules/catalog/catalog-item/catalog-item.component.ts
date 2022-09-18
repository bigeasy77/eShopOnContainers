import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CatalogService } from '../catalog.service';
import { ICatalogItem } from '../../shared/models/catalogItem.model';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'modules/shared/services/configuration.service';
import { SecurityService } from 'modules/shared/services/security.service';
import { BasketWrapperService } from 'modules/shared/services/basket.wrapper.service';

@Component({
    selector: 'esh-catalog_item .esh-catalog_item .mb-5',
    styleUrls: ['./catalog-item.component.scss'],
    templateUrl: './catalog-item.component.html'
})
export class CatalogItemComponent implements OnInit {
    public item: ICatalogItem = <ICatalogItem>{};
    authenticated: boolean;
    authSubscription: Subscription;

    constructor(private service: CatalogService, private basketService: BasketWrapperService, private securityService: SecurityService, private configurationService: ConfigurationService, private route: ActivatedRoute) { 
        this.authenticated = securityService.IsAuthorized;
    }

    ngOnInit() {
        // Configuration Settings:
        if (this.configurationService.isReady) 
            this.loadData();
        else
            this.configurationService.settingsLoaded$.subscribe(x => {
                this.loadData();
            });
        // Subscribe to login and logout observable
        this.authSubscription = this.securityService.authenticationChallenge$.subscribe(res => {
            this.authenticated = res;
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

    addToCart(item: ICatalogItem) {
        if (!this.authenticated) {
            return;
        }
        this.basketService.addItemToBasket(item);
    }
}