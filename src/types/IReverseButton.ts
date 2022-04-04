
export interface IReverseButton {
    isReversed: boolean,
    setRightInputValue: React.Dispatch<React.SetStateAction<string | number>>,
    setIsReversed: React.Dispatch<React.SetStateAction<boolean>>,
    setLeftInputValue: React.Dispatch<React.SetStateAction<string | number>>,
    leftInputValue: string | number,
    rightInputValue: string | number,
    leftCurrency: string,
    rightCurrency: string,
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>
}