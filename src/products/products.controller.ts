import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// All endpoints in this controller are protected by the JwtAuthGuard
@UseGuards(JwtAuthGuard)
// Defines the base route for all endpoints in this controller as '/products'
@Controller('products')
export class ProductsController {
  // Injects the ProductsService to handle the business logic
  constructor(private readonly productsService: ProductsService) {}

  // Endpoint to create a new product
  /**
   * Handles POST requests to create a new product.
   * @param createProductDto - The data for the new product.
   * @returns The newly created product.
   */
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // Endpoint to get all products
  /**
   * Handles GET requests to retrieve all products.
   * @returns A list of all products.
   */
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  // Endpoint to get a single product by ID
  /**
   * Handles GET requests to retrieve a single product by its ID.
   * @param id - The ID of the product to retrieve.
   * @returns The product with the specified ID.
   */
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // Endpoint to update a product's data
  /**
   * Handles PATCH requests to update a product's information.
   * @param id - The ID of the product to update.
   * @param updateProductDto - The data to update the product with.
   * @returns The updated product.
   */
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  // Endpoint to delete a product
  /**
   * Handles DELETE requests to remove a product.
   * @param id - The ID of the product to remove.
   * @returns The removed product.
   */
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
