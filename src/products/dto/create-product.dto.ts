import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// Data transfer object for creating a new product
export class CreateProductDto {
  // The name of the product
  @IsString()
  @IsNotEmpty()
  name: string;

  // The price of the product
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
