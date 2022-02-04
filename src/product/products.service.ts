import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = [
        new Product("COO1", "PS4 CONTROLLER", 224.00),
        new Product("COO2", "XBOX CONTROLLER", 468.04),
        new Product("COO3", "MAD MAX PS4 GAME", 24.40),
        new Product("COO4", "FORZA HORIZON 2 XBOX GAME", 97.40),
        new Product("COO5", "METRO 2033 PS4 GAME", 43.35),
    ]

    
    All(): Product[] {
        return this.products;
    }

    getById(id: number): Product{
        return this.products[id];
    }

    getByName(name: string): Product {
        return this.products.find( p => p.name === name);
    }
    
    
    create(product: Product): void {
        this.products.push(product);
    }

    
    update(product: Product): Product{
        return product
    }

    
    delete(id: number): void {
         this.products.pop()
    }

     
}