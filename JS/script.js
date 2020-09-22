const optionsDiv = document.getElementById("options");
const newOptionDiv = document.getElementById("newOption");

const  appInfo = {
    options : [["option",uuid()]]
}
function creatingOptions() {
    const options = (appInfo.options.map((option,i) => <div key={i} id={option[1]}><p>{option[0]}</p><button>Remove</button></div>));
    const newOption = (<form onSubmit={addNewOption}><input type="text"></input><button type="submit">Add</button></form>)
    ReactDOM.render(options , optionsDiv);
    ReactDOM.render(newOption , newOptionDiv);
};
function addNewOption(e){
 e.preventDefault();
 const inputValue = e.target.elements[0].value;
 appInfo.options.push([inputValue , uuid()]);
 e.target.elements[0].value = "";
  creatingOptions(); 
} 
creatingOptions();
