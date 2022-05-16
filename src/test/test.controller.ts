import {Controller, Get} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {TestService} from './test.service';
import {TestEntity} from "../entities/Test.entity";
import {DataSource, Repository} from "typeorm";

@Controller()
export class TestController {
    constructor(private readonly testService: TestService,
                @InjectRepository(TestEntity)
                private testRepository: Repository<TestEntity>,
                private dataSource: DataSource) {
    }

    @Get()
    async home() {
        return await this.dataSource.query('SELECT name FROM STO')
    }

    @Get('api')
    get(): string {
        return 'Hello API!';
    }

}
