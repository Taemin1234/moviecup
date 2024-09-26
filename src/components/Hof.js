import { useSelector } from 'react-redux';
import * as MI from '../style/style'

const Hof = () => {
    let winner = useSelector((state) => state.winner)
    console.log(winner)

    return (
        <MI.Container>
            <MI.BoxWrap4Col>
                {winner.map((w, i) => {
                    return (
                        <MI.Box key={i}>
                            <h3>{w[14]}</h3>
                            <img src={`https://image.tmdb.org/t/p/w200/${w[8]}`} alt={w[10]} />
                            <p>{w[10]}</p>
                        </MI.Box>
                    )
                })}
            </MI.BoxWrap4Col>
        </MI.Container>
    )
}

export default Hof