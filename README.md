## Tic Tac Toe

### The Game
Tic Tac Toe is a game where a player tries to match three letters in a row on a 3x3 game board. The player switches from X's and O's where the goal is to get three in a row of a matching letter. When this happens the player who matches the letters wins. If the board is full and there aren't three in a row, the game is a tie.

## Planning
I started my planning process by drawing out wire frames and writing user stories to make sure I knew what I wanted my game to do. These are linked bellow. Once I did this I made a timeline of when I wanted certain aspects of my game to be done. The first day I wanted to complete the logic behind my game. The second day I wanted to finish my user API and the third day I wanted to finish my game API and reach a minimum viable product so the fourth day I could spend styling and debugging my project.

## Development Proccess

I first started this project by understanding and coding the logic behind the game. The first thing I did was make a board where the game would be played using CSS bootstrap. I then made the game board responsive to adding X or O and switching between the two. After this I decided to make an array that would record the position of X or O on the board using the index and the player using what HTML had just been added. After this I made a function to determine if a game was won or a tie. All of these functions are called on when a square is clicked.

Once I felt that my game worked well without the API, I started to encorperate two APIs, a game API and a user API. I started with the user API, first creating the sign-up function, then the sign-in function, then change password, then the sign-out function.

The game API was where I got stuck the most. I had a particularly hard time updating the game. I ended up using the ID's I had given my HTML elements and the player name to communicate to the API the data I wanted to enter. This was done by the third day of working on this project.

After completing the bare bones of what I wanted my game to do I moved onto styling my project using different color schemes inspired by creators I admire. I settled on a more neutral scheme with pink hues.

### Future Iterations
The main problem I would like to fix is that I would like for mhy user messages to disappear. Ideally, I would make my user messages modals, I tried doing this but it introduced too many bugs into my code. I also tried to make the messages fade out using jQuery, but then I couldn't get them to reappear.

I would also like to make it multiplayer, so two users could be playing against eachother on two different devices.


### Technologies Used
  1. JavaScript
  2. AJAX
  3. jQuery
  4. CSS
  5. HTML
  6. CSS-bootstrap
  7. Curl

#### User stories

As an unregistered user, I want to be able to sign up so I can sign in.
As a registered user, I want to be able to sign in so I can start a new game.
As a signed in user, I want to be able to start a new game, so I can play the game.
As a user playing a game, I want to be able to make a move, so I can win the game.
As a user playing the game, I want to be able to win the game, so I can track how I do.
As a user playing the game, I want to be able to tell what player I am x or o.
As a user I want to be able to sign out, so another user can sign in.
As a user I want to be able to change my password, for security reasons.

#### Wireframes

https://imgur.com/9xY5ifF
https://imgur.com/4ajklgG
https://imgur.com/CsZQ2HZ
https://imgur.com/9ffAmki
https://imgur.com/xcmaaJR
https://imgur.com/BrKLOD8
