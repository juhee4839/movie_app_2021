import React from "react";

const foodLike = [
{
  id: 1,
  name: "backdosan",
  image: 
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80",
  rating: 5
},
{
  id: 2,
  name: "insideout",
  image:
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80",
  rating: 4.6
},
{
  id: 3,
  name: "incredable",
  image:
  "https://images.unsplash.com/photo-1543536448-1e76fc2795bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2824&q=80",
  rating: 4.9

},
{
  id: 4,
  name:"zotopia",
  image:
  "https://images.unsplash.com/photo-1527606078995-42486f991014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2855&q=80",
  rating: 5
}
];

function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

function App() {
  return (
    <div>
      {foodLike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image}/> ))}
    </div>
  );
}


export default App; 
