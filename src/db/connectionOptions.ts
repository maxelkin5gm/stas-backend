import {TypeOrmModuleOptions} from "@nestjs/typeorm";

import {ElectronApp} from "../electron";
import {TestEntity} from "../entities/Test.entity";
import {customDriverForOpenReadWriteMode} from "./customDriverForOpenReadWriteMode";


export const connectionOptions: TypeOrmModuleOptions = {
    type: "sqlite",
    database: './sqlite/db.sqlite',
    driver: customDriverForOpenReadWriteMode,
    entities: [TestEntity],
    // synchronize: true,
    logging: true,
    toRetry: (err) => {
        ElectronApp.showErrorDialogSync(err.toString(), 'Ошибка подключения к базе данных')
        process.nextTick(() => {
            process.exit(228)
        })
        return false;
    }
}