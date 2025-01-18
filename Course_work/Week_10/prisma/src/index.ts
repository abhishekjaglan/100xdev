import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName,
        },
        select:{
            id: true,
            email: true,
            firstName: true,
            lastName: true,
        }
    });
    console.log(res);
};

// insertUser('surender@gmail.com', '123456', 'surender', 'jaglan');

interface UpdatedParams {
    firstName: string;
    lastName: string;
};

async function updateUser(email: string, {firstName, lastName}: UpdatedParams){
    const res = await prisma.user.update({
        where: {
            email
        },
        data:{
            firstName,
            lastName,
        },
        select:{
            id: true,
            email: true,
            firstName: true,
            lastName: true,
        }
    });
    console.log(res);
};

// updateUser('abhishek@gmail.com', {firstName:'bashaho', lastName:'shehenshaho'});

async function deleteUser(email: string){
    const res = await prisma.user.delete({
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
};

// deleteUser('abhishek@gmail.com');

async function getUser(email:string){
    const res = await prisma.user.findUnique({
        where: {
            email
        },
        select:{
            id: true,
            email: true,
            firstName: true,
            lastName: true,
        }
    });
    console.log(res);
};

// getUser('sushila@gmail.com');

async function getTodos(userId: number){

    await prisma.todos.createMany({
        data: [{
            title: "Hello",
            description: "Nothing much !!",
            done: false,
            userId: 4
        },{
            title: "Hello 2",
            description: "Nothing much 2 !!",
            done: false,
            userId: 4
        }], 
    })

    const response = await prisma.todos.findMany({
        where:{
            userId: userId,
        },
        select:{
            id: true,
            title: true,
            description: true,
            user: true
        }
    });
    console.log(response);
};

getTodos(4)