import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlMapper } from 'src/entities/url-mapper.entity';
import { Repository } from 'typeorm';
import { ExpandUrlParams } from './types/ExpandUrlParams.types';

@Injectable()
export class ExpandService {
    constructor(
        @InjectRepository(UrlMapper)
        private readonly urlMapperRepository: Repository<UrlMapper>
    ){}

    async expandUrl(data: string){
        try{
            const urlMapper= await this.urlMapperRepository.findOne({
                where:{
                    shortCode : data
                }
            });
    
            return urlMapper ? urlMapper.originalURL : null;
        }
        catch(e){
            throw new BadRequestException('incorrect shortcode');
        }
    }
}
