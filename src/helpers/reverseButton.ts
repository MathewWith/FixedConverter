import { ReverseButtonProps } from "src/types/FunctionProps";

export const reverseButton = ({
  leftCurrency,
  rightCurrency,
  setLeftCurrency,
  setRightCurrency,
}: ReverseButtonProps): void => {
    
  let swap = leftCurrency;
  setLeftCurrency(rightCurrency);
  setRightCurrency(swap);
};
