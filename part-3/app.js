const App = () => {
    return (
        <div>
            <Person 
            name="John" 
            age={18} 
            hobbies={["gaming", "snowboarding", "basketball"]}
            />
            <Person 
            name="Mike" 
            age={4} 
            hobbies={["eating", "reading", "cooking"]}
            />
            <Person 
            name="Fiona" 
            age={26} 
            hobbies={["gaming", "writing", "vlogging"]}
            />
            
        </div>

    )
}