const app = document.getElementById("app");
class IndecisionApp extends React.Component {
    render() {
        return <div>
            <Header />
            <RemoveAllOptions />
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
    render() {
        return <div>
            <button>What Should I Do ?</button>
            <h1>Your Options</h1>
            <button>Remove All</button>
        </div>
    }
}
ReactDOM.render(<IndecisionApp />, app);