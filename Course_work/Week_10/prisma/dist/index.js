"use strict";
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
            }
        });
        console.log(res);
    });
}
;
;
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: {
                email
            },
            data: {
                firstName,
                lastName,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
            }
        });
        console.log(res);
    });
}
;
// updateUser('abhishek@gmail.com', {firstName:'bashaho', lastName:'shehenshaho'});
function deleteUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
            },
            where: {
                email
            }
        });
        console.log(res);
    });
}
;
// deleteUser('abhishek@gmail.com');
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
            }
        });
        console.log(res);
    });
}
;
// getUser('sushila@gmail.com');
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todos.createMany({
            data: [{
                    title: "Hello",
                    description: "Nothing much !!",
                    done: false,
                    userId: 4
                }, {
                    title: "Hello 2",
                    description: "Nothing much 2 !!",
                    done: false,
                    userId: 4
                }],
        });
        const response = yield prisma.todos.findMany({
            where: {
                userId: userId,
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    });
}
;
getTodos(4);
