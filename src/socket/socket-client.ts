import { Injectable, OnModuleInit } from "@nestjs/common";
import { io, Socket } from 'socket.io-client'
import { ConfigService } from "@nestjs/config";
import { AnalyticsService } from "src/analytics/analytics.service";
import { addAnalyticsDto } from "src/analytics/dto";

@Injectable()
export class SocketClientConnection implements OnModuleInit{
  public socketClient: Socket

  constructor (config: ConfigService, private analytics: AnalyticsService) {
    this.socketClient = io(config.get("SOCKET_URL"))
  }

  onModuleInit() {
    this.registerConsumerEvents()
  }

  private registerConsumerEvents() {
    this.socketClient.on('connect', () => {
      console.log('Connected to Gateway')
    })

    this.socketClient.on('onLog', (payload: addAnalyticsDto) => {
      let dto = {
        session: payload.session,
        data: JSON.stringify(payload.data)
      }
      if(!JSON.parse(dto.data).length){
        console.log("can't saved session data without logs")
      } else {
        return this.analytics.addAnalytics(dto)
        // console.log(dto)
        
      }
    })
  } 
}