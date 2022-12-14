import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  controllers: [HttpModule, DatabaseModule],
})
export class AppModule {}
