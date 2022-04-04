
export interface IReverseButton {
    leftCurrency: string,
    rightCurrency: string,
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>
}