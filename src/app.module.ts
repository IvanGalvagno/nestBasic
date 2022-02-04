import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductsService } from './product/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
