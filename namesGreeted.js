const NamesGreeted = () => {
    let namesGreeted = [];
    let username

    const setName = (name) => {
        username = name
    }

    const getName = () => {
        return username
    }

    const setNamesGreeted = (namesGreetedInput) => {
        namesGreeted = namesGreetedInput
    }

    const userExists = () => {
        if(!namesGreeted.includes(username)){
            namesGreeted.push(username)
        }
        return namesGreeted
    }

    return {
        setName,
        getName,
        setNamesGreeted,
        userExists
    }
}