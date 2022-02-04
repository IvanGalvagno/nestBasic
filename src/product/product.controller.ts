import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductController{

    constructor(private productService: ProductsService) {}

    @Get()
    All(): Product[] {
        return this.productService.All();
    }

    @Get(':id')
    getById(@Param() params): Product{
        return this.productService.getById(params.id);
    }

    @Get(':name')
    getByName(@Param() params): Product {
        return this.productService.getByName(params.name);
    }
    
    @Post()
    create(@Body() product): void {
       this.productService.create(product)
    }

    @Put()
    update(@Body() product): Product{
       return this.productService.update(product);
    }

    @Delete(':id')
    delete(@Param() params): void {
       this.productService.delete(params.id)
    }

}