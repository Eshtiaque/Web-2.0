const users =
    [{ id: 1, name: 'abul', job: 'doctor' }]
// console.log(users[0].name)


const data = {
    count: 5000,
    data: [
        { id: 1, name: 'culbul', job: 'player' },
        { id: 1, name: 'habul', job: 'teacher' }
    ]
}
const firstJob = (data.data[0].job)
// console.log(data.data[0].job);

const user = {
    id: 5000,
    name: 'thomas',
    address: {
        street: {
            first: 'road 34/A',
            second: 'third floor'
        },
    post: 'Dhaka',
        country: 'bang bang'
    }
}
const userFloor =user.address.street.second;
console.log(userFloor)