import { useState, useEffect } from 'react';

function Greeting() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const userTime = new Date();
        const hour = userTime.getHours();

        if (hour >= 6 && hour < 12) {
            setGreeting('Good Morning');
        } else if (hour >= 12 && hour < 18) {
            setGreeting('Good Afternoon');
        } else if (hour >= 18 && hour < 24) {
            setGreeting('Good Evening');
        } else {
            setGreeting('Good Night');
        }
    }, []);

    return (
        <p>{greeting}!</p>
    );
}

export default Greeting;
