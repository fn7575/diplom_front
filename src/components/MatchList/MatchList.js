import './MatchList.css';
import VP from '../../img/VP.png';
import axio from "axios";
import React, {useState} from "react";
import ReactModal from 'react-modal'


const MatchList = () =>{

    const [showModal, setShowModal] = useState(false)
    const [selectedMatch, setSelectedMatch] = useState(null)

    const handleMatchClick = (item) => () => {
        setSelectedMatch(item)
        setShowModal(!showModal)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedMatch(null)
    }

    const handleSubmitModal = () => {
        setShowModal(false)
        setSelectedMatch(null)
        //axio.post('/api/bets', {match_id: selectedMatch.match_id, amount: 0, result: selectedMatch.result})
    }

    return(<>
            <ReactModal
                ariaHideApp={false}
                isOpen={showModal}
                contentLabel="Minimal Modal Example"
                className="Modal"
            >
                <p>Введите сумму ставки</p>
                <input id="input" type={'text'}/>
                <button onClick={handleSubmitModal}>Сделать ставку</button>
                <div onClick={handleCloseModal} className="CloseButton"/>
            </ReactModal>
            <div className="MatchListWrapper">
                <p>Идущие матчи</p>
                <div className="MatchListItem">
                    <div className="CommandWrapper">
                        <div className="CommandName">
                            VirtusPro
                        </div>
                        <div className="CommandLogo">
                            <img src={VP} alt={''}/>
                        </div>
                    </div>

                    <div className="CenterBlockWrapper">
                        <button className={(() => true)() ? 'PercentWrapper Active' : 'PercentWrapper'} disabled>1.3</button>
                        <div className="CenterTimeAndTypeWrapper">10:00 BO3</div>
                        <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'} disabled>2.1</button>
                    </div>
                    <div className="CommandWrapper">
                        <div className="CommandLogo">
                            <img src={VP} alt={''}/>
                        </div>
                        <div className="CommandName">
                            VirtusPro
                        </div>
                    </div>
                </div>
            </div>



        <div className="MatchListWrapper">
            <p>Предстоящие матчи</p>
            <div className="MatchListItem">
                <div className="CommandWrapper">
                    <div className="CommandName">
                        VirtusPro
                    </div>
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                </div>

                <div className="CenterBlockWrapper">
                    <button className={(() => true)() ? 'PercentWrapper Active' : 'PercentWrapper'} onClick={handleMatchClick({match_id: 0, result: -1})}>1.4</button>
                    <div className="CenterTimeAndTypeWrapper">17:00 BO3</div>
                    <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'} onClick={handleMatchClick({match_id: 0, result: 1})}>2.1</button>
                </div><div className="CommandWrapper">
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                    <div className="CommandName">
                        VirtusPro
                    </div>
                </div>
            </div>
            <div className="MatchListItem">
                <div className="CommandWrapper">
                    <div className="CommandName">
                        VirtusPro
                    </div>
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                </div>

                <div className="CenterBlockWrapper">
                    <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'}>1.4</button>
                    <div className="CenterTimeAndTypeWrapper">15:00 BO3</div>
                    <button className={(() => true)() ? 'PercentWrapper Active' : 'PercentWrapper'}>2.1</button>
                </div>
                <div className="CommandWrapper">
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                    <div className="CommandName">
                        VirtusPro
                    </div>
                </div>
            </div>
            <div className="MatchListItem">
                <div className="CommandWrapper">
                    <div className="CommandName">
                        VirtusPro
                    </div>
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                </div>

                <div className="CenterBlockWrapper">
                    <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'}>1.4</button>
                    <div className="CenterTimeAndTypeWrapper">11:00 BO3</div>
                    <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'}>2.1</button>
                </div>
                <div className="CommandWrapper">
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                    <div className="CommandName">
                        VirtusPro
                    </div>
                </div>
            </div>
            <div className="MatchListItem">
                <div className="CommandWrapper">
                    <div className="CommandName">
                        VirtusPro
                    </div>
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                </div>

                <div className="CenterBlockWrapper">
                    <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'}>1.4</button>
                    <div className="CenterTimeAndTypeWrapper">12:00 BO3</div>
                    <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'}>2.1</button>
                </div>
                <div className="CommandWrapper">
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                    <div className="CommandName">
                        VirtusPro
                    </div>
                </div>
            </div>
            <div className="MatchListItem">
                <div className="CommandWrapper">
                    <div className="CommandName">
                        VirtusPro
                    </div>
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                </div>

                <div className="CenterBlockWrapper">
                    <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'}>1.4</button>
                    <div className="CenterTimeAndTypeWrapper">15:00 BO3</div>
                    <button className={(() => false)() ? 'PercentWrapper Active' : 'PercentWrapper'}>1.3</button>
                </div>
                <div className="CommandWrapper">
                    <div className="CommandLogo">
                        <img src={VP} alt={''}/>
                    </div>
                    <div className="CommandName">
                        VirtusPro
                    </div>
                </div>
            </div>
        </div>

        </>
    )

}

export default MatchList;