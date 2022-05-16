import {join} from 'path';
import {Module} from '@nestjs/common';
import {ServeStaticModule} from '@nestjs/serve-static';
import {TypeOrmModule} from "@nestjs/typeorm";

import {TestModule} from "./test/test.module";
import {connectionOptions} from "./db/connectionOptions";


@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'react'),
        }),
        TypeOrmModule.forRoot(connectionOptions),
        TestModule
    ],
})
export class AppModule {}

