import { useEffect, useMemo, useState } from "react"

export interface Student
{
    key: string;
    selected: boolean;
}

export function useStudenData() : Student[]{
    const initialData: Student[] = [];
    const [data, setData] = useState(initialData)

    const localData = useMemo(() => {
        /// Llamada intensa a un servidor REST u otro lugar
        const data = [
            {key: 'Adhony', selected: true},
            {key: 'Carlos', selected: false},
            {key: 'Cesar', selected: false},
            {key: 'Daniel', selected: false},
            {key: 'Ean', selected: false},
            {key: 'George', selected: false},
            {key: 'Kandora', selected: false},
            {key: 'Manuel', selected: false},
            {key: 'Milton', selected: false},
            {key: 'Naxiell', selected: false},
          ]
          return data
    }, [])

    useEffect(() => {
        setData(localData)
    }, [localData]);

    return data;
}

//React Hooks

// useState
// useReducer
// useEffect
// useMemo
// useContext
// useCallBack
// useLayoutEffect
// useRef
