import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from '../../../../app/repositories/notifications-repository';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }
}
