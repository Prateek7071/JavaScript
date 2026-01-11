        const player1Input = document.getElementById('player1');
        const player2Input = document.getElementById('player2');
        const submitBtn = document.getElementById('submit');
        const nameForm = document.getElementById('nameForm');
        const container = document.querySelector('.container');
        const messageDiv = document.querySelector('.message');

        let player1Name = '';
        let player2Name = '';
        let currentPlayer = 'x';
        let gameActive = true;
        let board = ['', '', '', '', '', '', '', '', ''];

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            player1Name = player1Input.value.trim() || 'Player1';
            player2Name = player2Input.value.trim() || 'Player2';
            
            nameForm.classList.add('hide');
            
            messageDiv.textContent = `${player1Name}, you're up`;
            
            const gridHTML = `
                <div class="grid">
                    <div id="1"></div>
                    <div id="2"></div>
                    <div id="3"></div>
                    <div id="4"></div>
                    <div id="5"></div>
                    <div id="6"></div>
                    <div id="7"></div>
                    <div id="8"></div>
                    <div id="9"></div>
                </div>
            `;
            
            container.insertAdjacentHTML('beforeend', gridHTML);
            
            const cells = document.querySelectorAll('.grid div');
            cells.forEach(cell => {
                cell.addEventListener('click', handleCellClick);
            });
        });

        function handleCellClick(e) {
            const cell = e.target;
            const cellId = cell.id;
            const index = parseInt(cellId) - 1;
            
            if (!cellId || board[index] !== '' || !gameActive) {
                return;
            }
            
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add('played');
            cell.classList.add(currentPlayer === 'x' ? 'cell-x' : 'cell-o');
            
            if (checkWinner()) {
                gameActive = false;
                const winnerName = currentPlayer === 'x' ? player1Name : player2Name;
                messageDiv.textContent = `${winnerName} congratulations you won!`;
                return;
            }
            
            if (board.every(cell => cell !== '')) {
                gameActive = false;
                messageDiv.textContent = `It's a draw!`;
                return;
            }
            
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            const nextPlayerName = currentPlayer === 'x' ? player1Name : player2Name;
            messageDiv.textContent = `${nextPlayerName}, you're up`;
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
                [0, 4, 8], [2, 4, 6]  // diagonals
            ];
            
            for (let pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    const cells = document.querySelectorAll('.grid div');
                    cells[a].classList.add('winner-cell');
                    cells[b].classList.add('winner-cell');
                    cells[c].classList.add('winner-cell');
                    return true;
                }
            }
            return false;
        }