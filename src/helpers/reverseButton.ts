import { ReverseButtonProps } from "src/types/FunctionProps";


export const reverseButton = (props: ReverseButtonProps): void => {
    const { leftCurrency, 
            rightCurrency,
            setLeftCurrency,
            setRightCurrency} = props;

    let swap = leftCurrency;
    setLeftCurrency(rightCurrency)
    setRightCurrency(swap)
}