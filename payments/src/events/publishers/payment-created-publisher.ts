import { Subjects, Publisher, PaymentCreatedEvent } from '@i-root/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
