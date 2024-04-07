import { useState } from 'react'
import SelectYearMonth from './SelectYearMonth'

const App = () => {
    const [name, setName] = useState('')
    const [yearMonthBirth, setYearMonthBirth] = useState('')
    const [yearMonthRegister, setYearMonthRegister] = useState('')

    return (
        <>
            <span>שם: </span>
            <input value={name} onChange={e => setName(e.target.value)} />
            <br />
            <span>חודש ושנת לידה: </span>
            <SelectYearMonth value={yearMonthBirth} onChange={e => setYearMonthBirth(e.target.value)} />
            <br />
            <span>חודש ושנת רישום: </span>
            <SelectYearMonth value={yearMonthRegister} onChange={e => setYearMonthRegister(e.target.value)} />
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>שם</th>
                        <th>חודש ושנת לידה</th>
                        <th>חודש ושנת רישום</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name || <br />}</td>
                        <td>{yearMonthBirth}</td>
                        <td>{yearMonthRegister}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default App
