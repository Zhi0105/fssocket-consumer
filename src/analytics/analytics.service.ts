import { Injectable } from '@nestjs/common';
import { addAnalyticsDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async addAnalytics(dto: addAnalyticsDto) {
    // const analytics = await this.prisma.log.create({
    //   data: {
    //     ...dto
    //   }
    // })
    // console.log("new session logs successfully created")
    // return analytics
  }
}
