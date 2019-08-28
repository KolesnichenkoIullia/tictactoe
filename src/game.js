class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber:0,
    xIsNext: true
    };
  }
  
  handleClick(i) {
    const history =
    this.state.history.slice(0,
    this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if calculateWinner(squares) ||
    squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "0"
    this.setState({
      history: history.contact({
        {
          squares: squares
        }
        ]);
        stepNumber: history.lenght,
        xIsNext: !this.state.xIsNext
      });
    }
    
    jumpTo(step) {
      
    
  
 

