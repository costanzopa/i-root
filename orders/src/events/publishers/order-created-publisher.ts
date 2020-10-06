import { Publisher, OrderCreatedEvent, Subjects } from '@i-root/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
