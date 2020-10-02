const app = document.getElementById("app");
const modal = document.getElementById("modal");
let options = [["option", uuid()]];
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.option = [];
    }
    render() {
        return <div>
            <Header />
            <RemoveAllOptions />
            <Options className="ml-2" />
            <AddNewOption className="ml-5 mr-5" />
        </div>
    }
}
class Header extends React.Component {
    render() {
        return <header className="text-center bg-secondary p-1" >
            <h1 className="h1">Indecision App</h1>
            <p>Put your life in the hands of computer</p>
        </header>
    }
}
class RemoveAllOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
        this.handelModal = this.handelModal.bind(this);
        this.handelModalHidden = this.handelModalHidden.bind(this);
    }
    handelModal(option) {
        modal.style.display = "block";
        const modalElem = (<form onSubmit={this.handelModalHidden}>
            <h1 className="h1">Selected Option</h1>
            <div className="d-flex justify-content-between">
            <h3 className="h3">{option}</h3>
            <button className="btn btn-outline-danger">OK</button>
            </div></form>);
        ReactDOM.render(modalElem, modal)
    }
    handelModalHidden(e) {
        e.preventDefault();
        modal.style.display = "none";
        app.style.opacity = 1;
    }
    handleRandom() {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOption = options[randomIndex][0];
        this.handelModal(randomOption);
    }
    handleRemoveAll() {
        if (options.length === 0) {
            alert("There is no option to delete")
        }
        else {
            options = [];
            makeApp();
        }
    }
    render() {
        return <div className="text-center">
            <button id="randomBtn" className="w-100 btn btn-outline-primary" onClick={this.handleRandom}>What Should I Do ?</button>
            <div className="ml-5 mr-5 mt-2 mb-2 d-flex justify-content-between">
                <h1 className="h1 ml-5">Your Options</h1>
                <button onClick={this.handleRemoveAll} className="mr-5 pt-0 pb-0 btn btn-outline-danger ">Remove All</button>
            </div>
        </div>
    }
}
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(e) {
        e.preventDefault();
        const id = e.target.id;
        options.map((option) => {
            if (option[1] === id) {
                const index = options.indexOf(option)
                options.splice(index, 1);
                makeApp();
            }
        })
    }
    render() {
        return options.map((option, i) => {
            return <form key={i} id={option[1]} onSubmit={this.handleRemove} className="ml-5 mr-5 ">
                <div className="ml-5 mr-5 mb-2 d-flex justify-content-between">
                    <p name="option" className="ml-5">{option[0]}</p>
                    <button id={option[1] + "Btn"} className="btn btn-outline-success">Remove</button>
                </div>
            </form>
        })
    }
}
class AddNewOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
    };
    addOption(e) {
        e.preventDefault();
        const value = e.target[0].value.trim();
        if (!value) {
            alert("Please add a value")
        }
        else {
            options.push([value, uuid()]);
            console.log(value);
            makeApp();
            e.target[0].value = "";
        }
    }
    render() {
        return <form key="i" onSubmit={this.addOption} className=" ml-5 mr-5 d-flex justify-content-between" >
            <input type="text" className="form-control  mr-2 ml-5"></input>
            <button className="btn btn-outline-info mr-5">Add</button></form>
    }
}
