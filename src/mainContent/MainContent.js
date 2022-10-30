import './MainContent.css';
import Player0 from '../player0/Player0';
import Player1 from '../player1/Player';
import RollDice from '../rollDice/RollDice';


function MainContent() {  
return (
    <div className="wrapper clearfix">
            <Player0 />
            <Player1 />
            <RollDice />
        </div>
);  
}

export default MainContent;