import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsString, IsNotEmpty, MinLength, IsNumber } from 'class-validator';

@Entity()
export class Contact {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  title: string;

  @IsEmail()
  @Column()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  address: string;

  @Column()
  city: string;
}