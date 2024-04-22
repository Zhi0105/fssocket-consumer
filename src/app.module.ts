import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RootModule } from './root/root.module';
import { PrismaModule } from './prisma/prisma.module';
import { SocketModule } from './socket/socket.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    RootModule,
    PrismaModule,
    SocketModule,
    AnalyticsModule, 
  ],
})
export class AppModule {}
