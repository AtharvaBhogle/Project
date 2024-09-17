from flask import Flask, request, render_template
import subprocess
import os

# Serve static files from the 'website' folder
app = Flask(__name__, static_folder='website', template_folder='website')

# Home route to display the HTML page with the buttons
@app.route('/')
def home():
    return render_template('Pygame-Arena.html')

# Route to handle the game play requests
@app.route('/play-game')
def play_game():
    game_name = request.args.get('name')

    # Map game names to their folder paths inside 'games'
    games = {
        'Platform': os.path.join('games', 'Platform', 'code', 'main.py'),
        'space-shooter': os.path.join('games', 'space shooter', 'code', 'main.py'),
        'vampire-survivor': os.path.join('games', 'Vampire survivor', 'code', 'main.py')
    }

    # Check if the game exists and run the corresponding main.py
    if game_name in games:
        game_path = os.path.join(os.getcwd(), games[game_name])
        if os.path.exists(game_path):
            # Run the Python file for the game
            subprocess.Popen(['python', game_path])
            return f'{game_name.replace("-", " ").capitalize()} launched!'
        else:
            return f'Game {game_name.replace("-", " ").capitalize()} not found!', 404
    else:
        return f'Invalid game name: {game_name}', 400

if __name__ == '__main__':
    app.run(debug=True)
