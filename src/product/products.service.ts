import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    
    constructor( @InjectModel(Product)  private productModel: typeof Product) { }

    
    async All(): Promise<Product[]> {
        return this.productModel.findAll()
    }

    async getById(id: number): Promise<Product>{
        return this.productModel.findByPk(id);
    }

    async getByName(name: string): Promise<Product> {
        return this.productModel.findOne(name)
    }
    
    
    async create(product: Product) {
        this.productModel.create(product);
    }

    
    async update(product: Product): Promise<[number, Product[]]>{
        return this.productModel.update(product, {
            where: {
                id: product.id
            }
        })
    }

    
    async delete(id: number) {
         const product: Product = await this.getById(id)
         if (product)
            product.destroy()
    }

     
}