import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ... user, id: uuidv4()});
    res.send (`User with the username ${user.firstName} added to the database!`);
}

export const getUser = (req, res) =>{
    const { id } = req.params;
    const foundUser = users.find ((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) =>{
    const { id } = req.params;
    //John 123
    //Jane 321
    // id to delete is 123
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from DB`);
}

export const updateUser = (req, res) =>{
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) {
        user.firstName = firstName;
    }
    // can also rewrite as follows
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send (`User with the id ${id} has been updated`);
}