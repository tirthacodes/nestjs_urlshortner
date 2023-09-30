import { Body, Controller, Post } from '@nestjs/common';
import { ShortenService } from './shorten.service';
import { ShortenUrlDto } from './ShortenUrl.dto';

@Controller('url')
export class ShortenController {
    constructor(
        private readonly shortenService: ShortenService
    ){}

    @Post('shorten')
    async shortenURL(@Body() body: ShortenUrlDto) {
        const shortenedUrl = await this.shortenService.shortenUrl(body);
        return {shortenedUrl};
    }
}
