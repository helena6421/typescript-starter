// Обработчик маршрута POST не принимает никаких параметров клиента если не добавить @Body() декоратор.

import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { HydratedDocument, QueryWithHelpers } from 'mongoose';

import { BookDocument } from './schema';
import { AppService } from './app.service';

import { CreateBookDTO } from './dto/update.book.dto';
import { UpdateBookDTO } from './dto/update.book.dto';
import { Id } from './dto/id';

@Controller('app.controller')
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Post()
  create(@Body() body: CreateBookDTO): Promise<BookDocument> {
    return this.AppService.create(body);
  }

  @Get()
  getAll(): Promise<BookDocument[]> {
    return this.AppService.getAll();
  }

  @Put(':id')
  update(
    @Param() { id }: Id,
    @Body() body: UpdateBookDTO,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, object, object> | null,
    HydratedDocument<BookDocument, object, object>,
    object,
    BookDocument
  > {
    return this.AppService.update(id, body);
  }

  @Delete(':id')
  delete(
    @Param() { id }: Id,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, object, object> | null,
    HydratedDocument<BookDocument, object, object>,
    object,
    BookDocument
  > {
    return this.AppService.delete(id);
  }
}
