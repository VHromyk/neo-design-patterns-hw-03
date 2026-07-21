import { ILogger, INotificationChannel } from "../core/interfaces";

export class PushNotification implements INotificationChannel {
  constructor(
    private readonly deviceToken: string,
    private readonly logger: ILogger,
  ) {}

  send(message: string): void {
    this.logger.log(`Sending PUSH to ${this.deviceToken}`);
    console.log(`Push sent to ${this.deviceToken}: ${message}`);
  }
}