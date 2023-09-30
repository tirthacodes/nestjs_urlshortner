import { Body, Controller, Post } from '@nestjs/common';
import { ShortenService } from './shorten.service';

@Controller('url')
export class ShortenController {
    constructor(
        private readonly shortenService: ShortenService
    ){}

    @Post('shorten')
    async shortenURL(@Body() body: string){
        const shortenedUrl = await this.shortenService.shortenUrl(body);
        return {shortenedUrl};
    }
}
