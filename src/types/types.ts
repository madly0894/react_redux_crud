export type PostsType = {
    id: number,
    title: string | null,
    body: string | null,
}[];

export type CommentType = {
    id: number,
    body: string | null,
    postId: number | null
}

export type CommonType = {
    id: number,
    title: string | null,
    body: string | null
}

export type PostType = {
    id: number,
    title: string | null,
    body: string | null,
    comments: Array<CommentType>
}
