import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ExpandService } from './expand.service';
import { ExpandUrlDto } from './dtos/ExpandUrl.dto';

@Controller('expand')
export class ExpandController {
    constructor(
        private readonly expandService: ExpandService
    ){}

    @Get(':shortcode')
    async ExpandURL(@Param() params: ExpandUrlDto){
        const originalURL = await this.expandService.expandUrl(params);

        if(!originalURL){
            throw new BadRequestException('Invalid Shortcode!');
        }

        return {originalURL};
    }
}
