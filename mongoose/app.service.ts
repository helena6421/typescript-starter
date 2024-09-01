import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import {
  Model,
  Connection,
  HydratedDocument,
  QueryWithHelpers,
} from 'mongoose';
import { Book, BookDocument } from './schema';
import CreateBookDTO from './dto/update.book.dto';
import UpdateBookDTO from './dto/update.book.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  create(data: CreateBookDTO): Promise<BookDocument> {
    const book = new this.BookModel(data);
    return book.save();
  }

  public getAll(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  update(
    id: number,
    data: UpdateBookDTO,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, object, object> | null,
    HydratedDocument<BookDocument, object, object>,
    object,
    BookDocument
  > {
    return this.BookModel.findOneAndUpdate({ _id: id }, data);
  }

  delete(
    id: number,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, object, object> | null,
    HydratedDocument<BookDocument, object, object>,
    object,
    BookDocument
  > {
    return this.BookModel.findOneAndDelete({ _id: id });
  }
}
