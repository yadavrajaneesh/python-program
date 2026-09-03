name =input("Enter your name: ")
balance = 10000
print("\n.......bank menu.......")
print("name: ", name)
print("balance: ", balance)
print("1. check balance")
print("2. deposit")
print("3. withdraw")
print("4. exit")
choice = int(input("Enter your choice: ")) 
if choice == 1:
    print("your balance is: ", balance)
elif choice == 2:
    amount = int(input("Enter amount to deposit: "))
    balance = amount+balance
    print("your new balance is: ", balance)
elif choice == 3:
    amount = int(input("Enter amount to withdraw: "))
    if amount > balance:
        print("Insufficient balance")
    else:
        balance = balance-amount
        print("your new balance is: ", balance)
elif choice == 4:
    print("Thank you for using our bank!")
    