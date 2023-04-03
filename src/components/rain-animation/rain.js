import  Rainfall  from  'react-rainfall-animation/src/Rain'
import "./rain.css";


function  Raining() {
  return (
    <div className="App">
      <div id="Rain">
        <Rainfall  dropletsAmount={200}  />
      </div>
    </div>
  );
}

export default Raining;