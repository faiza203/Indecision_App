const optionsDiv = document.getElementById("options");
const newOptionDiv = document.getElementById("newOption");
const randomBtn = document.getElementById("giveRandomBtn");
const appInfo = {
    options: []
}
function creatingOptions() {
    const options = (appInfo.options.map((option, i) => <form key={i} id="addNewOptionForm" onSubmit={removeIt} id={option[1]}><ol><li><h3>{option[0]}</h3><button className="btn btn-success">Remove</button></li></ol></form>));
    const newOption = (<form onSubmit={addNewOption}><input type="text"></input><button type="submit" className="btn btn-primary">Add</button></form>)
    ReactDOM.render(options, optionsDiv);
    ReactDOM.render(newOption, newOptionDiv);
    if (appInfo.options.length === 0) {
        randomBtn.disabled = true;
    } else {
        randomBtn.disabled = false;
    }
};
function addNewOption(e) {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    if(inputValue === ""){
        alert("Please give a value")
    }
    else{
       appInfo.options.push([inputValue, uuid()]);
        e.target.elements[0].value = "";
        creatingOptions();
    }
}
creatingOptions();
function removeIt(e) {
    e.preventDefault();
    const id = e.target.id;
    appInfo.options.map((option) => {
        if (option[1] === id) {
            appInfo.options.splice(appInfo.options.indexOf(option), 1); creatingOptions();
        }
    }
    )
}
function removeAll() {
    if(JSON.stringify(appInfo.options) === JSON.stringify([])){
        alert("There is no option to delete")
    }else{
    appInfo.options = [];
    creatingOptions();
    }
}
function giveRandom() {
    const options = appInfo.options.length;
    const takeRandom = Math.floor(Math.random() * options);
    const randomOption = appInfo.options[takeRandom][0];
    alert(randomOption);
}