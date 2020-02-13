const express = require('express');
const router = express.Router();

const dogbreed = require('../models/dogbreed');

router.route('/')

.get((req,res,next)=>{
    dogbreed.find({})
    .then((dogs)=>{
        res.json(dogs);
    }).catch((err)=>{console.log(err)});
})

.post((req,res,next)=>{
    dogbreed.create(req.body)
.then((dogs) =>{
    res.json(dogs);
}).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    dogbreed.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});


router.route('/:id')
.get((req,res,next)=>{
    dogbreed.findById(req.params.id)
    .then((dogs) =>{
    res.json(dogs);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    dogbreed.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((dogs) =>{
    res.json(dogs);
}).catch(next);
})

.delete((req,res,next)=>{
    dogbreed.findByIdAndDelete(req.params.id)
    .then((dogs) => {
        res.json(dogs);
}).catch(next);
});

router.route('/:id/notes')
.get((req,res,next) =>{
    dogbreed.findById(req.params.id)
    .then((dogs)=>{
        res.json(dogs.notes);
    }).catch(next);
})


.post((req,res,next)=>{
    dogbreed.findById(req.params.id)
        .then((dogs) =>{
            dogs.notes.push(req.body);
                dogs.save()
            .then((dogs) => {
        res.json(dogs);
        })
    }).catch(next);
})

.delete((req, res, next) =>{
    dogbreed.findById(req.params.id)
.then((dogs)=>{
dogs.notes.splice(req.body);
dogs.save()
.then((dogs) =>{
    res.json(dogs);
})
}).catch(next);
});


router.route('/:id/notes/:noteid')
    .get((req, res, next) =>{
        dogbreed.findById(req.params.id)
            .then((dogs)=>{
               let note = dogs.notes.id(req.params.noteid);
               res.json(note);
            }).catch(next);
})

.put((req, res, next) =>{
    dogbreed.findById(req.params.id)
    .then((dogs) =>{
        let note = dogs.notes.id(req.params.noteid);
            note.desc = req.body.desc;
                dogs.save()
            .then((dogs) =>{
        res.json(dogs);
    })
}).catch(next)
})


.delete((req, res, next) =>{
    dogbreed.findById(req.params.id)
    .then((dogs)=>{
    let n = dogs.notes.pull(req.params.noteid);
    dogs.save()
    .then((dogs) =>{
        res.json(dogs);
    })
    }).catch(next);
    });


module.exports = router;