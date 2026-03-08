def main():
    while True:
        name = input("\nEnter student's name (or type 'Exit' to quit): ")
        
        if name.lower() == "exit":
            break
            
        try:
            maths = float(input("Enter Maths marks: "))
            science = float(input("Enter Science marks: "))
            english = float(input("Enter English marks: "))
            
            average = (maths + science + english) / 3
            
            print("-" * 17)
            print(f"Name : {name}")
            print(f"Average : {average:.1f}")
            
            if average >= 75:
                print("Grade : A")
            elif average >= 60:
                print("Grade : B")
            elif average >= 40:
                print("Grade : C")
            else:
                print("Grade : Fail")
            print("-" * 17)
                
        except ValueError:
            print("Invalid input. Please enter numerical values for marks.")

if __name__ == "__main__":
    main()
