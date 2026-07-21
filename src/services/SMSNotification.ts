import { ILogger, INotificationChannel } from "../core/interfaces";

export class SMSNotification implements INotificationChannel {
  constructor(
    private readonly phone: string,
    private readonly logger: ILogger,
  ) {}

  send(message: string): void {
    this.logger.log(`Sending SMS to ${this.phone}`);
    console.log(`SMS sent to ${this.phone}: ${message}`);
  }
}