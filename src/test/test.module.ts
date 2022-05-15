import {Module} from "@nestjs/common";
import {TestController} from "./test.controller";
import {TestService} from "./test.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TestEntity} from "../entities/Test.entity";


@Module({
    imports: [TypeOrmModule.forFeature([TestEntity])],
    controllers: [TestController],
    providers: [TestService]
})
export class TestModule {}