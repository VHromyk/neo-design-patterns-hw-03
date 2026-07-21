import { INotificationChannel, INotificationService } from "../core/interfaces";

export class NotificationService implements INotificationService {
  constructor(private readonly channels: INotificationChannel[]) {}

  notify(message: string): void {
    this.channels.forEach((channel) => channel.send(message));
  }
}
