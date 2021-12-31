// Write your solution in this file!
const employee = {
    name:"Chelsea",
    streetAddress:"Denham"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {
        ...employee
    };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {
        ...employee,
        [key]: undefined,
    };
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = undefined;
    return employee;
}