

const sortAttack = (a, b) => {
    return b.stats[1].base_stat - a.stats[1].base_stat
}

export const sortItems = (data, type) => {
    
    switch (type) {
        case 'weight': {
            return data.sort((a, b) => b.weight - a.weight)
            }
            case 'attack': {
                return data.sort(sortAttack)
            }
            default:
                return data;
    }
}

export const classNames = (cls, boolean) => {
    return boolean ? cls : ''
}