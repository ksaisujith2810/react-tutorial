import React from 'react';

function ChildTwo(props) {
    // object destructuring - ES6
    const{studentsData}=props;

    return ( <>
        <p>number of students-{studentsData.length}

        </p>
    </>
    )
}

export default ChildTwo;
