import { ChangeEvent } from 'react'
import { range } from './util'

type Props = {
    value: string,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectYearMonth = ({ value, onChange }: Props) => {
    const currentYear = new Date().getFullYear()

    return (
        <select onChange={onChange} value={value}>
            {range(currentYear - 1899, currentYear, -1).map(year => (
                <optgroup key={year} label={`${year}`}>
                    {range(12).map(month => {
                        const monthName = new Date(0, 11 - month).toLocaleString('he-IL', { month: 'long' })
                        return (
                            <option key={month} value={`${year}-${month + 1}`}>
                                {monthName} - {year}
                            </option>
                        )
                    })}
                </optgroup>
            ))}
        </select>
    )
}
export default SelectYearMonth
