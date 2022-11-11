"use strict";
exports.__esModule = true;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
var FILE_PATH = "./dist/userDetail.json";
var initialValue = [
    {
        name: "Jasleen",
        age: 25,
        email: "abc@gmail.com",
        Gender: Gender.MALE
    }
];
console.log(initialValue);
