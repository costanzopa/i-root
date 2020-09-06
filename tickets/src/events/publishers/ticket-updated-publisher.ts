import { Publisher, Subjects, TicketUpdatedEvent } from '@i-root/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}