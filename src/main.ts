import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ElectronApp} from './electron';

import 'dotenv/config';
import isDevElectron = require('electron-is-dev');

async function bootstrap() {
    if (process.env.ELECTRON || !isDevElectron) await ElectronApp.start();

    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
