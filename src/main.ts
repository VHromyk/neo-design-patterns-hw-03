import { INotificationChannel, INotificationService } from "./core/interfaces";
import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";

const user = new User("example@email.com", "+380123456789", "device-token-abc");

const logger = new Logger();

const channels: INotificationChannel[] = [
  new EmailNotification(user.email, logger),
  new SMSNotification(user.phone, logger),
  new PushNotification(user.deviceToken, logger),
];

const notificationService: INotificationService = new NotificationService(channels);

notificationService.notify("Ваш платіж оброблено успішно!");
