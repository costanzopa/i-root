import { Publisher, Subjects, TicketCreatedEvent } from '@i-root/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
