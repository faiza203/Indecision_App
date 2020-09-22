const optionsDiv = document.getElementById("options");
const newOptionDiv = document.getElementById("newOption");
const randomBtn = document.getElementById("giveRandomBtn");

const appInfo = {
    options: []
}
function creatingOptions() {
    const options = (appInfo.options.map((option, i) => <form key={i} onSubmit={removeIt} id={option[1]}><p>{option[0]}</p><button>Remove</button></form>));
    const newOption = (<form onSubmit={addNewOption}><input type="text"></input><button type="submit">Add</button></form>)
    ReactDOM.render(options, optionsDiv);
    ReactDOM.render(newOption, newOptionDiv);
    if (appInfo.options.length = 0) {
        randomBtn.disabled = true;
    } else {
        randomBtn.disabled = false;
    }
};
function addNewOption(e) {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    appInfo.options.push([inputValue, uuid()]);
    e.target.elements[0].value = "";
    creatingOptions();
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
    appInfo.options = [];
    randomBtn.disabled = true;
    creatingOptions();
}
function giveRandom() {
    const options = appInfo.options.length;
    const takeRandom = Math.floor(Math.random() * options);
    const randomOption = appInfo.options[takeRandom][0];
    alert(randomOption);
}