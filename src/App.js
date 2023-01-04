import Button from "./Button";

function App() {
    return <div>
        <div>
            <Button primary>Button One</Button>
        </div>
        <div>
            <Button secondary>Button Two</Button>
        </div>
        <div>
            <Button success>Button Three</Button>
        </div>
        <div>
            <Button warning>Button Four</Button>
        </div>
        <div>
            <Button danger>Button Five</Button>
        </div>
        <div>
            <Button rounded>Button Six</Button>
        </div>
        <div>
            <Button secondary outline>Button Seven</Button>
        </div>
    </div>;

}


export default App;