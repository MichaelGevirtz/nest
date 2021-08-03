import { Module } from '@nestjs/common';
import { TenantModule } from 'src/tenant/tenant.module';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [
    TenantModule,
  ],
  controllers: [
    BooksController
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule {}
