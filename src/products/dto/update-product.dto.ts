import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// Data transfer object for updating a product, extending CreateProductDto with all fields optional
export class UpdateProductDto extends PartialType(CreateProductDto) {}
