const Namelist = () => {
    const items = ['Komal', 'Aum', 'Yukti', 'Swati'];

    return (
        <div>
            <h1>Name List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export { Namelist };


