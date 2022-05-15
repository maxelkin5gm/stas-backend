import {Controller, Get} from '@nestjs/common';
import {TestService} from './test.service';

@Controller()
export class TestController {
    constructor(private readonly testService: TestService) {
    }

    @Get()
    home(): string {
        return this.testService.getHello();
    }

    @Get('api')
    get(): string {
        return 'Hello API!';
    }

}
