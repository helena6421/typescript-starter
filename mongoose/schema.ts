import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Book>;
export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  public id: number;

  @Prop({ required: true })
  public title: string;

  @Prop({ required: true })
  public description: string;

  @Prop()
  public authors: string;

  @Prop()
  public favorite: string;

  @Prop()
  public fileCover: string;

  @Prop()
  public fileName: string;

  @Prop()
  public fileBook: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
