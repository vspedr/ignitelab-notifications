import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notification', () => {
  it('returns notifications of a given recipient', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(makeNotification());
    await notificationsRepository.create(makeNotification());
    await notificationsRepository.create(
      makeNotification({
        recipientId: 'another-recipient-id',
      }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-id' }),
      ]),
    );
  });
});
