import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@i-root/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
  > {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
