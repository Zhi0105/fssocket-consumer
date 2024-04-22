import { IsNotEmpty, IsString } from 'class-validator'

export class addAnalyticsDto {
  @IsString()
  @IsNotEmpty()
  session: string

  @IsString()
  @IsNotEmpty()
  data: string
}