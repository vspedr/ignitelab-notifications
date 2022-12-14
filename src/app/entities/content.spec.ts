import { Content } from './content';

describe('Notification content', () => {
  it('creates a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('does not create notification content with less than 5 characters', () => {
    expect(() => {
      new Content('x');
    }).toThrow();
  });

  it('does not create notification content with more than 240 characters', () => {
    expect(() => {
      new Content('x'.repeat(241));
    }).toThrow();
  });
});
