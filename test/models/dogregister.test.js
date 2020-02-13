const Dogregister = require('../../models/dogregister');

const mongoose = require('mongoose');



const testDB ='mongodb://127.0.0.1/KennalService_test'

beforeAll(async()=>{
mongoose.connect(testDB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
})
})

afterAll(async ()=>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();

})

test('Should add a new dogs',() =>{
   return Dogregister.create({
        petName:'Hulk',
        petType:'Dog',
        Breed:'Husky',
        Age:'2',
        petSize:'35',
        Gender:'male',
        petvaccination: 'done',
        image:'suman'

    }).then((Response)=>{
        expect(Response.petName).toBe('Hulk')
        expect(Response.petType).toBe('Dog')
        expect(Response.Breed).toBe('Husky')
        expect(Response.Age).toBe('2')
        expect(Response.petSize).toBe('35')
        expect(Response.Gender).toBe('male')
        expect(Response.petvaccination).toBe('done')
        expect(Response.image).toBe('suman')
        
    })
})

test('Should update the category',()=>{
    return Dogregister.findOne({'petName':'Hulk'})
    .then((dog)=>{
        dog.petName = 'Hulky'
        dog.petType='Dog',
        dog.Breed='Husky',
        dog.Age='2',
        dog.petSize='35',
        dog.Gender='male',
        dog.petvaccination= 'done',
        dog.image='suman'
        dog.save().then((updateddog)=>{
            expect(updateddog.petName).toBe('Hulky')
            expect(updateddog.petType).toBe('Dog')
            expect(updateddog.Breed).toBe('Husky')
            expect(updateddog.Age).toBe('2')
            expect(updateddog.petSize).toBe('35')
            expect(updateddog.Gender).toBe('male')
            expect(updateddog.petvaccination).toBe('done')
            expect(updateddog.image).toBe('suman')

        })
    })
})

// test('Should delete the category',()=>{
//     return Dogregister.findOneAndDelete({'petName':'Hulk'})
//     .then((Response)=>{
//             expect(updateddog.petName).toBe('Hulky')
    
//     })
// })