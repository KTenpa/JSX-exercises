const maxNameLength = 6;

const Person = ({name, age, hobbies}) => {
    const voteText = age >= 18 ? "Please go vote!" : "You must 18";

    const hobbiesArr = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {name.slice(0, maxNameLength)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies : {hobbiesArr}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    )
}