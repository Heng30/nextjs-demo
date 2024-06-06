const paths = {
    home() {
        return '/discuss';
    },
    topicShow(slug: string) {
        return `/discuss/topics/${slug}`;
    },
    postCreate(slug: string) {
        return `/discuss/topics/${slug}/posts/new`;
    },
    postShow(slug: string, postId: string) {
        return `/discuss/topics/${slug}/posts/${postId}`;
    },
};

export default paths;