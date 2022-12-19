import { OfferStatus } from 'src/utils/constants';

export const OFFER_STATUS_OPTIONS = [
  {
    label: 'singleOffer:offer.canceledByConsumer',
    value: OfferStatus.CANCELED_BY_CONSUMER,
  },
  {
    label: 'singleOffer:offer.canceledBySeller',
    value: OfferStatus.CANCELED_BY_SELLER,
  },
  {
    label: 'singleOffer:offer.confirmed',
    value: OfferStatus.CONFIRMED,
  },
  {
    label: 'singleOffer:offer.created',
    value: OfferStatus.CREATED,
  },
  {
    label: 'singleOffer:offer.isHold',
    value: OfferStatus.IS_HOLD,
  },
  {
    label: 'singleOffer:offer.canceled',
    value: OfferStatus.CANCELED,
  },
];
