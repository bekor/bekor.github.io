##
#	It is a simple Battleship game against the randint function.
#	You have 4 turn to guess the correct position of a ship in a 5x5 battleground.
#	There are some hint after you guess a coordinate.
#	
#	The game is based on the Python lectures of http://codecademy.com
#
#	Created by Laszlo Bombolya (bekor) 2016
##

from random import randint

#Set up the board it is 5x5 
board = []
board.append([" ", "1" , "2", "3", "4", "5"])

for x in range(5):
    board.append(["%s" % (x + 1)] + ["O"] * 5)

def print_board(board):
    for row in board:
        print(" ".join(row))

# Pre conversation
print("Sailor: OOoo Captain a Pirate Ship!")
print("Captain: Shot em down!")
print("Sailor: We have 4 cannonball")
print_board(board)

def random_row(board):
    return randint(0, len(board) - 1)

def random_col(board):
    return randint(0, len(board[0]) - 1)
	
# Declare Pirate ship position
ship_row = random_row(board)
ship_col = random_col(board)

# For Debugging:
# print("Ship row: ", ship_row, " Ship col: ", ship_col)

# The player has 4 turn to shot
for turn in range(4):
    print("Turn", (turn + 1))
    guess_row = int(raw_input("Guess Row:"))
    guess_col = int(raw_input("Guess Col:"))
	
	# If the guessed coordinates Hit the Ship (Victory)
    if guess_row == ship_row and guess_col == ship_col:
        print("Pirate Captain: Nooo You bastard, my ship, my gold, sunk down! I will catch you...")
        break
		
	# If the guessed coordinates Close 
	# It isn't take notice of thwart coordinates from the ship. 
	elif (guess_row == (ship_row + 1) or guess_row == (ship_row - 1)) or (guess_col < (ship_col + 1) or guess_col > (ship_col - 1)):
		print("Pirate Captain: Ha-Ha-Ha. Close-close")
	
	# Miss the Ship or Game over
    else:
		if guess_row not in range(1, 6) or guess_col not in range(1, 6):
            print("Pirates: Hahaa ,that's not even in the ocean.")
        elif(board[guess_row][guess_col] == "X"):
            print("You fool, you already shot there.")
        else:
            print("The Pirates put out own tongue. You have to aim better.")
            board[guess_row][guess_col] = "X"
            print_board(board)
            if turn == 3:
                    print("Pirate Captain: You out of ammo! Now I can easily rob you!")
					print("Go ahead my outlaw pirates!!")
					print("GAME OVER")

