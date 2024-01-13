import Card from 'react-bootstrap/Card';

const HeroToday = (props) => {

    return (
        <div className='d-flex justify-content-center text-dark'>
            <Card className="text-center border-0 mb-3 bg-transparent font-weight-bold text-dark">
                <h1 className='text-capitalize'>{props.city}</h1>
                <Card.Body>
                    <Card.Title className='fs-1 custom-font'>{props.today.tempPerc}&deg;C</Card.Title>
                    <div>
                    {props.today.codeTemp === 0 && 
                    <span className='icone'>☀</span>
                    }
                    {[1, 2, 3].includes(props.today.codeTemp) && 
                    <span className='icone'>🌦</span>
                    }
                    {[45, 48].includes(props.today.codeTemp) && 
                    <span className='icone'>🌫</span>
                    }
                    {[51, 53, 55].includes(props.today.codeTemp) && 
                    <span className='icone'>🌧</span>
                    }
                    {[61, 63, 65, 66, 67, 80, 81, 82].includes(props.today.codeTemp) && 
                    <span className='icone'>🌩</span>
                    }
                    {[71, 73, 75, 85, 86].includes(props.today.codeTemp) && 
                    <span className='icone'>🌨</span>
                    }
                    {[95, 96, 99].includes(props.today.codeTemp) && 
                    <span className='icone'>⛈</span>
                    }
                    {![0, 1, 2, 3, 45, 48, 51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82, 71, 73, 75, 85, 86, 95, 96, 99].includes(props.today.codeTemp) && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-emoji-frown text-dark" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                </svg>}

                    </div>
                    
                    <Card.Text>
                        <div className="d-flex justify-content-center">
                            <p>{props.today.maxtemp}&deg;C&nbsp;/&nbsp;</p>
                            <p>{props.today.mintemp}&deg;C</p>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default HeroToday 