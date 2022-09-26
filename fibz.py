class Employees:
    number_of_Employees=0
    raise_amount=1.04
    def __init__(self,name,age,pay):
        self.name=name
        self.age=age
        self.pay=pay
        
        Employees.number_of_Employees+=1
    def Full_Details(self):
        return 'My name is'+self.name+' .I am '+self.age
    def apply_raise(self):
        self.pay=(int(self.pay) * Employees.raise_amount)



class Developer(Employees):
    pass

Dev_1=Developer('Gabriel','22','500000')
Employee2=Employees('Ngeti','22',200000)
#print(Employee1.Full_Details())
print(Employees.number_of_Employees)
print(Dev_1.__dict__)
Dev_1.apply_raise()
print(Dev_1.pay)


