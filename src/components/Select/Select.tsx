
export const Select = (props: any) => {
    const {allCurrencies} = props
    const {setCurrency} = props                       
    return (
        <select onChange={(e) => setCurrency(e.target.value)}>
                {
                    allCurrencies.map((cur: string) => {
                       return <option key={cur}>{cur}</option>
                    })
                }
        </select>
    )
}