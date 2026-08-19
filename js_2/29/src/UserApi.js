async function fetchUser(id = 7) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log('>>> ', response);
    if (!response.ok)  throw new Error('User not found!');

    return await response.json();
}

module.exports = fetchUser;


