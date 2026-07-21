import { ILogger, INotificationChannel } from "../core/interfaces";

export class EmailNotification implements INotificationChannel {
  constructor(
    private readonly email: string,
    private readonly logger: ILogger,
  ) {}

  send(message: string): void {
    this.logger.log(`Sending EMAIL to ${this.email}`);
    console.log(`Email sent to ${this.email}: ${message}`);
  }
}