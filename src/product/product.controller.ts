import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductController{

    constructor(private productService: ProductsService) {}

    @Get()
    async All(): Promise<Product[]> {
        return this.productService.All();
    }

    @Get(':id')
    async getById(@Param() params): Promise<Product>{
        return this.productService.getById(params.id);
    }

    @Get(':name')
    async getByName(@Param() params): Promise<Product> {
        return this.productService.getByName(params.name);
    }
    
    @Post()
    async create(@Body() product) {
       this.productService.create(product)
    }

    @Put()
    async update(@Body() product): Promise<[number, Product[]]>Product{
       return this.productService.update(product);
    }

    @Delete(':id')
    async delete(@Param() params) {
       this.productService.delete(params.id)
    }

}