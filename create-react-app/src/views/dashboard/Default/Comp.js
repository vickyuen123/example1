import { useEffect } from "react"
import { useState } from "react"

// life cycle
// mounted born

// unmounted die

// remount o

const Comp = ({ text, count, color }) => {
    // This is a hook, for changing value and getting value
    const [displayNum, setDisplayNum] = useState(count)
    const [name, setName] = useState('')
    const [isLoading, setLoading] = useState(true)

    const onClick = () => {
        setDisplayNum(displayNum + 1)
    }

    // Could be used for search function (When name gets updated, it will call the API)
    useEffect(() => {
        alert(name)
        console.log('CALL API to change name to', { name })
    }, [name])

    // Used for when the component starts
    useEffect(() => {
        alert('RAN IN BEGINNING, getting backend data for page first load')
        // zset values properly
        setLoading(false)
    }, [])



    return (
        isLoading ? null :
            <>
                <div style={{ backgroundColor: color }}>{text} {displayNum}</div>
                <button onClick={onClick}>Click me bro!</button>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </>
    )
}

export default Comp