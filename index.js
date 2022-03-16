// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "streetAddress"

};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {
        name: employee.name,
    }
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // What do we do with these parameters?
    employee[key] = value;
    // What do we return
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}

    delete newEmployee[key];
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};