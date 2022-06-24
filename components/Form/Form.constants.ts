export const CVV_RULES = {
  required: 'CVV is required',
  minLength: {
    value: 3,
    message: 'CVV cannot less then 3 symbols',
  },
  maxLength: {
    value: 3,
    message: 'CVV Number cannot more than 3 symbols',
  },
};

export const DATE_RULES = {
  required: 'Expiration Date is required',
};

export const CARD_RULES = {
  required: 'Card Number is required',
  minLength: {
    value: 16,
    message: 'Card Number cannot less then 9 symbols',
  },
  maxLength: {
    value: 16,
    message: 'Card Number cannot more than 19 symbols',
  },
};

export const AMOUNT_RULES = {
  required: 'Amount is required',
};
