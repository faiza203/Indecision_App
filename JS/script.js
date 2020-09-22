const optionsDiv = document.getElementById("options");
const newOptionDiv = document.getElementById("newOption");

function creatingOptions() {
    const options = (<div><h1>Your Options</h1><button>Remove All</button></div>);
    const newOption = (<form><input type="text"></input><button>Remove</button></form>)
    ReactDOM.render(options , optionsDiv);
    ReactDOM.render(newOption , newOptionDiv);
};

creatingOptions();