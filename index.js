const express = require("express");
const cors = require("cors");
const app = express();
// const baseURL = 'http://localhost:4004/api/'

// const form = document.getElementById("completed-goals");
// const form = document.getElementById('goalForm')
const createGoal = body => axios.post(baseURL, body).then(goalsCallback).catch(errCallback)

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A good friendship is often more important than a passionate romance.",
					 "A person of words and not deeds is like a garden full of weeds.",
					 "A pleasant surprise is waiting for you.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});
app.get("/api/inspire", (req, res) => {
  const inspirationalQuotes = ["Be yourself; everyone else is already taken.",
					 "Be the change that you wish to see in the world.",
					 "“The best way to get started is to quit talking and begin doing.”",
  ];

  let randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  let randomInspirationalQuotes = inspirationalQuotes[randomIndex];

  res.status(200).send(randomInspirationalQuotes);
  
});

app.get("/api/screen-saver", (req, res) => {
  const screenSaverImages = [URL='https://i.redd.it/t1trwftn8t611.jpg',
					 URL ="https://st.depositphotos.com/1446098/1854/i/950/depositphotos_18546511-stock-photo-ocean-inspiration.jpg",
					 URL="https://finallyfamilyhomes.org/wp-content/uploads/2021/06/motivational-wallpaper.png",
  ];

  let randomIndex = Math.floor(Math.random() * screenSaverImages.length);
  let randomScreenSaver = screenSaverImages[randomIndex];

  res.status(200).send(randomScreenSaver);
  
  
});

let goals = []

// let body={
//   title.value,
//   content.value
// }

app.post('/api/new-goal/',(req,res) =>{
  // let title = req.body.title
  
  let {title, content}= req.body
  console.log(req.body)

  if(!title|| !content){
    res.status(400).send('Please enter a valid goal')
  }else{
    let goal={
      title,
      content
    }
    goals.push(goal)
    res.status(200).send('Goal successfully created')
  }
})









// function submitHandler(e) {
//   e.preventDefault()

//   let title = document.querySelector('#title')
//   let content = document.querySelector('#content')


//   // let goalObj = {
//   //     title: title.value,
//   //     content: content.value, 
  
//   // }

//   createGoal(goalObj)

//   title.value = ''
//   content.value = ''


// app.post('/api/goals', (req,res)=>{
//   let {title, content} =req.body
//   goals.push(req.body)
//   res.status(200).send(goals)

  
// })
// }


// form.addEventListener('submit', submitHandler)

// form.addEventListener('submit',(req,res)=>{
//   res.status(200).send(form)
// })

// const completedGoals = ("walk dog", "call mom", "go for a run" )


// let goals =[{title:'Study',content:'study 30 mminutes each day'}, ]

// app.get("/api/suggested-tools", (req, res) => {
//   const suggestedTools = ["Join a Study Group",
// 					 "Work with a Mentor",
// 					 "Find a Study Budy",
//   ]

//   let randomIndex = Math.floor(Math.random() * suggestedTools.length);
//   let randomSuggestedTools = suggestedTools[randomIndex];

//   res.status(200).send(randomSuggestedTools);
  
// });

// let completedGoals =['walk the dog', 'exercise', 'make breakfast']
// function displayCompletedGoals(){
//   sendStatus(200).send(completedGoals)
// }
//  form.addEventListener('click', displayCompletedGoals)

// let goals =[]

// let studyTools =[]
// module.exports = {
//   createGoal:(req,res)=>{
//   const {title, content} = req.body
//   goals.push(req.body)
//   res.status(200).send('Goal added to task list')
//   console.log(goals)
// }

 
// },



// $(document).ready(function() {
//   $('.image-link').magnificPopup({type:'image'});
// });


app.listen(4000, () => console.log("Server running on 4000"));
