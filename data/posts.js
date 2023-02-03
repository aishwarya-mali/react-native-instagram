import { Users } from "./users"

export const Posts = [
    {
        userName: Users[0].name,
        userImage: Users[0].image,
        image: require('../assets/anne-beach.jpg'),
        likes: 7870,
        caption: 'Life takes you down many paths, but the best ones lead to the beach.',
        comments: [
            {
                name: Users[1].name,
                comment: 'You look so beautiful..'
            },
            {
                name: Users[2].name,
                comment: 'Pretty!'
            }
        ]
    },
    {
        userName: Users[1].name,
        userImage: Users[1].image,
        image: require('../assets/anthony-coding.jpg'),
        likes: 1240,
        caption: `Working on React Native Instagram Clone. Let's go!`,
        comments: [
            {
                name: Users[3].name,
                comment: 'So exciting'
            },
            {
                name: Users[2].name,
                comment: 'Awesome!'
            }
        ]
    }
]