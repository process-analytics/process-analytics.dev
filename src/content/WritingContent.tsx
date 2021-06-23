import {MediumAuthor, MediumPost} from "../theme/types";

const mediumPosts: MediumPost[] = [{
    title: '',
    text: '',
    cover: '',
    url: '',
    date: '',
    time: 0
}];

const mediumAuthor: MediumAuthor = {
    id: '',
    name: '',
    username: '',
};

export const mediumContent = {
    posts: mediumPosts,
    mediumAuthor,
};
