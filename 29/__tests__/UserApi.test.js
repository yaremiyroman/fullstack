const fetchUser = require('../src/UserApi');

describe('User API', () => { // Suite
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    test('[OK] User fetched!', async () => { // Test
        const fakeUser = {
            // "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            // "address": {
            //     "street": "Rex Trail",
            //     "suite": "Suite 280",
            //     "city": "Howemouth",
            //     "zipcode": "58804-1099",
            //     "geo": {
            //         "lat": "24.8918",
            //         "lng": "21.8984"
            //     }
            // },
            // "phone": "210.067.6132",
            // "website": "elvis.io",
            // "company": {
            //     "name": "Johns Group",
            //     "catchPhrase": "Configurable multimedia task-force",
            //     "bs": "generate enterprise e-tailers"
            // }
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => fakeUser,
        });

        const user = await fetchUser(7);

        expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/7");
        expect(user).toEqual(fakeUser);
    });
});
