import {rest} from "msw"

const baseURL = 'https://beproject5-5d5ddb867f18.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "id": 3,
                "owner": "testuser",
                "name": "",
                "image": "https://res.cloudinary.com/dxiyxikz7/image/upload/v1/media/../default_profile_b7teko",
                "is_owner": true
                }

            ))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout`, (req, res, ctx) => {
        return res(ctx.status(200));
    } )     
];