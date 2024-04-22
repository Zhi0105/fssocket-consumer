import { Module } from '@nestjs/common';
import { SocketClientConnection } from './socket-client';
import { AnalyticsService } from 'src/analytics/analytics.service';
@Module({
  providers: [SocketClientConnection, AnalyticsService]
})
export class SocketModule {}
