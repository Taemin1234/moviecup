import { useSelector } from 'react-redux';
import * as MI from '../style/style'

const Hof = () => {
    let winner = useSelector((state) => state.winner)

    return (
        <MI.Container>
            <MI.BoxWrap4Col>
                {winner.map(w => {
                    return (
                        <MI.Box>
                            <p>{w[11]}</p>
                            <img src={`https://image.tmdb.org/t/p/w200/${w[8]}`} alt={w[10]} />
                            <p>{w[10]}</p>
                        </MI.Box>
                    )
                })}
            </MI.BoxWrap4Col>
            {winner}   
        </MI.Container>
    )
}

export default Hof