"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
})(Gender || (Gender = {}));
const FILE_PATH = "./dist/userDetail.json";
const initialValue = [
    {
        name: "Jasleen",
        age: 25,
        email: "abc@gmail.com",
        Gender: Gender.MALE,
    }
];
var FILE_MODE;
(function (FILE_MODE) {
    FILE_MODE["READ"] = "r";
    FILE_MODE["WRITE"] = "w";
    FILE_MODE["APPEND"] = "a";
})(FILE_MODE || (FILE_MODE = {}));
const checkFileExist = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs.promises.access(file, fs.constants.F_OK);
        return true;
    }
    catch (error) {
        return false;
    }
});
function fillInitialDataIfFileNotExist() {
    return __awaiter(this, void 0, void 0, function* () {
        fs.appendFile(FILE_PATH, JSON.stringify(initialValue), (err) => {
            if (err) {
                console.log("Error in creating file");
                return;
            }
            else {
                console.log("File and data inserted successfully");
                return;
            }
        });
    });
}
function createNewUser(newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs.readFile(FILE_PATH, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const parsedData = JSON.parse(data);
            const isEmailExist = parsedData.some((obj) => {
                return obj.email === newUser.email;
            });
            if (isEmailExist) {
                console.log(`User with this ${newUser.email} already exist`);
            }
            else {
                const appendedData = [...parsedData, newUser];
                fs.writeFile(FILE_PATH, JSON.stringify(appendedData), (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log("New user added successfully");
                        return;
                    }
                });
            }
        });
    });
}
function getAllUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs.readFile(FILE_PATH, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const parsedData = JSON.parse(data);
            console.log(parsedData);
        });
        return;
    });
}
function getUserDetailByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs.readFile(FILE_PATH, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const parsedData = JSON.parse(data);
            const indexToBeSearched = parsedData.findIndex((obj) => {
                return obj.email === email;
            });
            if (indexToBeSearched === -1) {
                console.log("email not exist");
            }
            else {
                console.log(parsedData[indexToBeSearched]);
            }
        });
        return;
    });
}
function deleteUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs.readFile(FILE_PATH, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const parsedData = JSON.parse(data);
            const indexToBeSearched = parsedData.findIndex((obj) => {
                return obj.email === email;
            });
            if (indexToBeSearched === -1) {
                console.log("email not exist");
            }
            else {
                console.log(parsedData.splice(indexToBeSearched, 1));
                console.log(JSON.stringify(parsedData));
                fs.writeFile(FILE_PATH, JSON.stringify(parsedData), (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log("User deleted  successfully");
                        return;
                    }
                });
            }
        });
        return;
    });
}
function updateUserByEmail(email, name, Gender, age) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs.readFile(FILE_PATH, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const parsedData = JSON.parse(data);
            const indexToBeSearched = parsedData.findIndex((obj) => {
                return obj.email === email;
            });
            if (indexToBeSearched === -1) {
                console.log("email not exist");
            }
            else {
                if (name) {
                    parsedData[indexToBeSearched].name = name;
                }
                if (age) {
                    parsedData[indexToBeSearched].age = age;
                }
                if (Gender) {
                    parsedData[indexToBeSearched].Gender = Gender;
                }
                console.log(parsedData);
                fs.writeFile(FILE_PATH, JSON.stringify(parsedData), (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log("User Updated  successfully");
                        return;
                    }
                });
            }
        });
        return;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const isFileExist = yield checkFileExist(FILE_PATH);
        if (isFileExist) {
            const newUser = {
                name: "john",
                age: 23,
                email: "abc3@gmail.com",
                Gender: Gender.FEMALE,
            };
            const emailToBeSearched = "abc3@gmail.com";
            yield createNewUser(newUser);
            yield getAllUserDetails();
            yield getUserDetailByEmail(emailToBeSearched);
            yield deleteUserByEmail("abc4@gmail.com");
            yield updateUserByEmail(emailToBeSearched, "john marshal", Gender.MALE, 26);
        }
        else {
            fillInitialDataIfFileNotExist();
        }
    });
}
main();
