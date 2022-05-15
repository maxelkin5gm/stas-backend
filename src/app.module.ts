import {join} from 'path';
import {Module} from '@nestjs/common';
import {ServeStaticModule} from '@nestjs/serve-static';
import {TypeOrmModule} from "@nestjs/typeorm";

import {TestModule} from "./test/test.module";
import {TestEntity} from "./entities/Test.entity";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'react'),
        }),
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: './sqlite/db.sqlite',
            entities: [TestEntity],
            synchronize: true,
            logging: true,
        }),
        TestModule
    ],
})
export class AppModule {}
