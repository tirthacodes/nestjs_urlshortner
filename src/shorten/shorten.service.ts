import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as shortid from 'shortid';
import { UrlMapper } from 'src/entities/url-mapper.entity';
import { Repository } from 'typeorm';
import { shortenUrlParams } from './shortenUrl.types';


@Injectable()
export class ShortenService {
    constructor(
        @InjectRepository(UrlMapper)
        private readonly urlMapperRepository: Repository<UrlMapper>
    ){}

    async shortenUrl(data: shortenUrlParams) : Promise<string> {
        const shortCode = shortid.generate();

        const urlMapper = this.urlMapperRepository.create({
            shortCode,
            originalURL: data.originalUrl
        });

        await this.urlMapperRepository.save(urlMapper);
        return `https://tir.com/${shortCode}`;
    }
}
