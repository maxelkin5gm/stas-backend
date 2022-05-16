import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ElectronApp} from './electron';

import 'dotenv/config';

async function bootstrap() {
    if (process.env.ELECTRON != 'OFF') await ElectronApp.start();

    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 3000);

    await ElectronApp.openBrowser();
}
bootstrap();
