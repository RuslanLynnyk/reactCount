const useState = (initialState) => {

    let state = initialState;

    const setState = (value) => {
        state = value;
    }

    return[state, setState]

}


cosnt [state, setState]= useState (10);