import { ChangeEvent } from 'react'
import { range } from './util'

type Props = {
    value: string,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const monthNames = range(12).map(i => new Date(0, 11 - i).toLocaleString('he-IL', { month: 'long' }))

const SelectYearMonth = ({ value, onChange }: Props) => {
    const currentYear = new Date().getFullYear()

    return (
        <select onChange={onChange} value={value}>
            {range(currentYear - 1899, currentYear, -1).map(year => (
                <optgroup key={year} label={`${year}`}>
                    {monthNames.map((monthName, month) => {
                        return (
                            <option key={monthName} value={`${year}-${month + 1}`}>
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
