import { Module } from '@nestjs/common';
import { ShortenService } from './shorten.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortenController } from './shorten.controller';
import { UrlMapper } from 'src/entities/url-mapper.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UrlMapper])],
  providers: [ShortenService],
  controllers: [ShortenController],
})
export class ShortenModule {
  
}
