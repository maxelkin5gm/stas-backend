import {Module} from '@nestjs/common';

import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {TestModule} from "./test/test.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'react'),
        }),
        TestModule
    ],
})
export class AppModule {}
