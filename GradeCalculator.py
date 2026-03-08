def main():
    name = input("Enter student's name: ")
    
    try:
        maths = float(input("Enter Maths marks: "))
        science = float(input("Enter Science marks: "))
        english = float(input("Enter English marks: "))
        
        average = (maths + science + english) / 3
        
        print(f"\nStudent Name: {name}")
        print(f"Average Marks: {average:.2f}")
        
        if average >= 40:
            print("Grade: Pass")
        else:
            print("Grade: Fail")
            
    except ValueError:
        print("Invalid input. Please enter numerical values for marks.")

if __name__ == "__main__":
    main()
