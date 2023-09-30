import { Module } from '@nestjs/common';
import { ExpandController } from './expand.controller';
import { ExpandService } from './expand.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlMapper } from 'src/entities/url-mapper.entity';

@Module({
    imports:[
       TypeOrmModule.forFeature([UrlMapper]),
    ],
  controllers: [ExpandController],
  providers: [ExpandService]
})
export class ExpnadModule {}
