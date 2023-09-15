import React from 'react';

function ListComponent({ items }) {
    // Use the map function to iterate over the list and generate JSX elements
    const listItems = items.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    return (
        <div>
            <h2>List of Items</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default ListComponent;
