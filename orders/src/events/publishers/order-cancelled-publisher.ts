import { Subjects, Publisher, OrderCancelledEvent } from '@i-root/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
