import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductController{

    @Get()
    All(): string {
        return 'return all products'
    }

    @Get(':id')
    getById(@Param() params): string{
        return `Return product of id: ${params.id}`
    }

    @Get(':name')
    getByName(@Param() params): string {
        return `Return product with name: ${params.name}`
    }
    
    @Post()
    create(@Body() product): string {
        return `Product created !`
    }

    @Put()
    update(@Body() product){
        return `Product updated!`
    }

    @Delete()
    delete(): string {
        return `Product deleted !`
    }

}