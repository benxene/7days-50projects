export const initialOptions = {
  noOfChars: 10,
  allowCaps: true,
  allowSmall: true,
  allowNumbers: true,
  allowSpecial: true
};

export const reducer = (currentState: any, action: string) => {
  switch (action) {
    case 'increase':
      if (currentState.noOfChars === 20) {
        return currentState;
      }
      return { ...currentState, noOfChars: currentState.noOfChars + 1 };

    case 'decrease':
      if (currentState.noOfChars === 6) {
        return currentState;
      }
      return { ...currentState, noOfChars: currentState.noOfChars - 1 };

    case 'allowCaps':
      return { ...currentState, allowCaps: !currentState.allowCaps };

    case 'allowSmall':
      return { ...currentState, allowSmall: !currentState.allowSmall };

    case 'allowNumbers':
      return { ...currentState, allowNumbers: !currentState.allowNumbers };

    case 'allowSpecial':
      return { ...currentState, allowSpecial: !currentState.allowSpecial };

    default:
      break;
  }
};
