import React from 'react';

const UserRow = ({ user }) => {
    const { email, name } = user;
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{name}</td>
            <td>Blue</td>
        </tr>
    );
};

export default UserRow;