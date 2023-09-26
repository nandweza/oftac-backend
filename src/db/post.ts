import mongoose, { Document } from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;
    img: string;
}

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        img: {
            type: String,
        },
        content: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

export const PostModel = mongoose.model<IPost>('Post', PostSchema);

export const getPosts = () => PostModel.find();

export const getPostById = (id: string) => PostModel.findById(id);

// export const createPost = (values: Record<string, any>) => new PostModel(values)
//                             .save().then((post) => post.toJSON());

export const updatePost = (id: string, values: Record<string, any>) => 
                            PostModel.findByIdAndUpdate(id, values);

export const deletePostById = (id: string) => PostModel.findByIdAndDelete(id);
