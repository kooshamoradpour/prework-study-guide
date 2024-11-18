const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic =topics[Math.floor(Math.random() * topics.length)];
function listTopics(){
    for (let x=0;  x < topics.length; x++){
        console.log(topics[x]);
    }
}

/*for (let x=0; x < topics.length; x++){
    console.log(topics[x],", not a function")
}*/

function selectTopic (){
    if (randomTopic=== 'HTML') {
        console.log("Lets studdy HTML");
    } else if (listTopics==='CSS') {
        console.log('lets study CSS');
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
      } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } else {
        console.log('Please try again!');
      }
}
console.log("Here are the topics we learned through Prework:")
listTopics()
console.log("Which topic should we study first:")
selectTopic()
















/*const topic= "HTML";
if (topic=== 'HTML') {
    console.log("Lets studdy HTML");
} else if (topic==='CSS') {
    console.log('lets study CSS');
} else if (topic === 'Git') {
    console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }

const shapes = ["triangle", "square", "pentagon", "circle"];
for (let x=0; x < shapes.length; x++) {
    console.log(shapes[x])
}*/