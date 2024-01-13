import React from 'react';
import { Col } from 'react-bootstrap';

const SingleDay = (props) => {
    const { results, codtempo, i } = props;

    const getDayOfWeek = (date) => {
        const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
        const dayIndex = new Date(date).getDay();
        return daysOfWeek[dayIndex];
    };

    const formatDate = (date) => {
        const options = { day: "numeric" };
        return new Date(date).toLocaleDateString("it-IT", options);
    };

    return (
        <Col key={i} className='text-dark'>
            <div>
                <div className='d-flex justify-content-center fs-4'>
                    <p>{getDayOfWeek(results.daily.time[i]).slice(0, 3)}&nbsp;</p>
                    <p>{formatDate(results.daily.time[i])}</p>
                </div>
                <div>
                    {codtempo === 0 && 
                    <div>
                        <span className='icone'>☀</span>
                    </div>}
                    {[1, 2, 3].includes(codtempo) && 
                    <div>
                        <span className='icone'>🌦</span>
                    </div>}
                    {[45, 48].includes(codtempo) && 
                    <div>
                        <span className='icone'>🌫</span>
                    </div>}
                    {[51, 53, 55].includes(codtempo) && 
                    <div>
                        <span className='icone'>🌧</span>
                    </div>}
                    {[61, 63, 65, 66, 67, 80, 81, 82].includes(codtempo) && 
                    <div>
                        <span className='icone'>🌩</span>
                    </div>}
                    {[71, 73, 75, 85, 86].includes(codtempo) && 
                    <div>
                       <span className='icone'>🌨</span>
                    </div>}
                    {[95, 96, 99].includes(codtempo) && 
                    <span className='icone'>⛈</span>}
                    {![0, 1, 2, 3, 45, 48, 51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82, 71, 73, 75, 85, 86, 95, 96, 99].includes(codtempo) &&
                        <div>
                            <p>Previsioni non disponibili</p>
                        </div>}

                </div>

                <div className="d-flex justify-content-center">
                    <p>{results.daily.temperature_2m_min[i]}&deg;C&nbsp;/&nbsp;</p>
                    <p>{results.daily.temperature_2m_max[i]}&deg;</p>
                </div>
            </div>
        </Col>

    )
}

export default SingleDay