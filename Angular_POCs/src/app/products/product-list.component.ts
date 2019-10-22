
import {Component, OnInit} from '@angular/core'
import { template } from '@angular/core/src/render3';
import { IProducts } from "./product";
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list-component.html',
    styleUrls : ['./produt-list.component.css']
})


export class ProductListComponent implements OnInit{
    pageTitle:string ='Product List!'; 
    imageWidth: number=50;
    imageMargin: number= 2;
    isImageVisible : boolean =false;
   // listFilter : 'Cart';
   _currentFilter : string ;
    filteredProducts : IProducts[] ;     

    products : IProducts[] = [];  

    get currentFilter():string{
        return this._currentFilter;
    }
    set currentFilter(value:string){
        this._currentFilter = value;

        this.filteredProducts = this.currentFilter ? this.filterTheItesmBasedOnCurrentFilter(this.currentFilter) : this.products;
    }    

    constructor( private producctService : ProductService)
    {
         
    }

    filterTheItesmBasedOnCurrentFilter (filterBy: string): IProducts[] {
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter(( product : IProducts ) => 
                                        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }   

    onRatingClicked(message : string) : void {
        this.pageTitle = 'Product List'+ message;
    }
    
    ngOnInit():void{
       // console.log('ngOnInit Called');
       this.products = this.producctService.getProducts();
       this.filteredProducts=this.products;    
    }

    toggleImage() : void {
        this.isImageVisible = !this.isImageVisible;
    }

}