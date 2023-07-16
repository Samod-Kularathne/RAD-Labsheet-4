class Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary) {
      this.employeeNumber = employeeNumber;
      this.name = name;
      this.address = address;
      this.contactNumber = contactNumber;
      this.nicNumber = nicNumber;
      this.joinedDate = joinedDate;
      this.designation = designation;
      this.salary = salary;
    }
  
    reportDuty(time) {
      console.log(`${this.name} arrives at ${time}.`);
    }
  
    finishDuty(time) {
      console.log(`${this.name} leaves at ${time}.`);
    }
  
    informLunchPreference(preference) {
      console.log(`${this.name} prefers ${preference} for lunch.`);
    }
  
    takeLeave(leaveDate, numDays, reason) {
      console.log(`${this.name} is taking leave from ${leaveDate} for ${numDays} days due to ${reason}.`);
    }
  }
  
  class PermanentEmployee extends Employee {}
  
  class ContractBasedEmployee extends Employee {}
  
  class TemporaryEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary, duration) {
      super(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary);
      this.duration = duration;
    }
  
    requestDutyExtension(extension) {
      console.log(`${this.name} requested a duty extension of ${extension} months.`);
    }
  }
  
  // Usage example
  const emp1 = new PermanentEmployee("001", "John Doe", "123 Main St", "123-456-7890", "123456789", "2023-01-01", "Manager", 5000);
  emp1.reportDuty("9:00 AM");
  emp1.finishDuty("6:00 PM");
  emp1.informLunchPreference("chicken");
  emp1.takeLeave("2023-07-16", 3, "personal reasons");
  
  const tempEmp1 = new TemporaryEmployee("002", "Jane Smith", "456 Elm St", "987-654-3210", "987654321", "2023-02-01", "Assistant", 3000, 6);
  tempEmp1.reportDuty("9:30 AM");
  tempEmp1.finishDuty("5:30 PM");
  tempEmp1.informLunchPreference("vegetable");
  tempEmp1.takeLeave("2023-07-19", 2, "vacation");
  tempEmp1.requestDutyExtension(3);
  