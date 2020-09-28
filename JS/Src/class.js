const app = document.getElementById("app");
let options = [["option", uuid()]];
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.option = [["option", uuid()]]
    }
    render() {
        return <div>
            <Header />
            <RemoveAllOptions />
            <Options />
            <AddNewOption />
        </div>
    }
}
class Header extends React.Component {
    render() {
        return <header>
            <h1>Indecision App</h1>
            <p>Put your life in the hands of computer</p>
        </header>
    }
}
class RemoveAllOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        options = [];
        makeApp();
    }
    render() {
        return <div>
            <button>What Should I Do ?</button>
            <h1>Your Options</h1>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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
                options.splice(index ,1);
                makeApp();
            }
        })
    }
    render() {
        return options.map((option, i) => {
            return <form key="i" id={option[1]} onSubmit={this.handleRemove}>
                <p name="option">option</p>
                <button id={option[1] + "Btn"}>Remove</button>
            </form>
        })
    }
}
class AddNewOption extends React.Component {
    render() {
        return <form>
            <input></input>
            <button>Add</button></form>
    }
}
function makeApp() {
    return ReactDOM.render(<IndecisionApp />, app);
}
makeApp();