import { useState } from "react";

export default function usePersistedState(stateKey,initalState) {
    const [state, setState] = useState(() => {
        const persistentStatetJSON = localStorage.getItem(stateKey)
        if (!persistentStatetJSON) {
            return initalState
        }

        const persistentStateData = JSON.parse(persistentStatetJSON)

        return persistentStateData
    })

    const setPersisdentState = (data) => {
        const persistedData = JSON.stringify(data)

        localStorage.setItem(stateKey, persistedData)
        setState(data)
    }

    return [
        state,
        setPersisdentState
    ]


}