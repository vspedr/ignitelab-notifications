import { Module } from '@nestjs/common';
import { NotificationsController } from '@infra/messaging/kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka-consumer.service';
import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
