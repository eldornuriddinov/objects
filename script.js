let person = {
    name: 'Eldor',
    surname: 'Nuriddinov',
    age: 16
}

person.age = 135
person.name = 'Fuhrer'
person.surname = 'Hitler'
person.address = 'Germany'


person['name'] = 'Adolf'




let car = {
    brand: 'BMW',
    model: 'm5cs',
    horsePower: 150,
    start: function () {
        console.log('Машина BMW m5cs  заводиться');

    }
}



car.color = 'Black'
car.horsePower = 1200
delete horsePower





// car.start()

//  console.log(car);



let car2 = {
    brand: '',
    model: 'm5cs',
    horsePower: 150,
    engine: 'v12',
    driver: 'Tamaev',
    start: function () {
        console.log('Машина m5cs заводиться');

    }
}




let company = {
    name: 'GitHub',
    owner: {
        name: 'Chris',
        surname: 'Wanstrath',
        networth: '$2.2 billion',
        address: {
            city: 'Chicago',
            street: 'Amir Temur 7'
        }
    }
}

company.owner.name = 'Abbos'
company.owner.surname = 'Valiev'

let book = {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1867,
    price: '1200$'
}
let book2 = { ...book }
book2.title = 'War and Peace 2'
book2.year = 2024









function print(obj) {
    for (let key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

// print(book)
// console.log('--------------------------');
// print(book2)

// console.log(company);






let school ={
    name: 'President School',
    teachers: {
        math: 'Davlat Polatov',
        geography: 'Marina Ivanovna',
        history:'Nadejda Polatov'
    },
    students:{
        1: 'Vadim Vadimich',
        2:' Laylo Bexruzovna',
        3:' Abdukabir Pirojkov'
    },
    hasEatery: false,
    hasToilet: true,
    rooms:163
}
                                                                    
console.log(school);















car2.model = '250csgo2'

car.color = 'Pink'























