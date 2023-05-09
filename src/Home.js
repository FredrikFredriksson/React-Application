import { useState } from 'react';

const Home = () => {
  // let name = 'Freek';
  const [name, setName] = useState('Freek');
  const [age, setAge] = useState(25);
  

  const handleClick = () => {
    setName('Jenkan');
    setAge(30);
  }
  
  return ( 
    <div className="home">
      <h2>Names</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
   );
}  

 
export default Home
