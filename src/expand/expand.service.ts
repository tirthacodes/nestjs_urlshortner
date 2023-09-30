import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlMapper } from 'src/entities/url-mapper.entity';
import { Repository } from 'typeorm';
import { expandUrlParams } from './types/ExpandUrlParams.types';

@Injectable()
export class ExpandService {
    constructor(
        @InjectRepository(UrlMapper)
        private readonly urlMapperRepository: Repository<UrlMapper>
    ){}

    async expandUrl(data: expandUrlParams){
        const urlMapper= await this.urlMapperRepository.findOne({
            where:{
                shortCode : data.shortCode
            }
        });

        return urlMapper ? urlMapper.originalURL : null;
    }
}
