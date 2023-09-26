import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true
        },
        img: {
            type: String,
        }
    },
    {timestamps: true}
);

export const ProjectModel = mongoose.model('Project', ProjectSchema);

export const getProjects = () => ProjectModel.find();

export const getProjectById = (id: string) => ProjectModel.findById(id);

export const createProject = (values: Record<string, any>) => new ProjectModel(values)
                                .save().then((project) => project.toJSON());

export const updateProject = (id: string, values: Record<string, any>) => 
                                ProjectModel.findByIdAndUpdate(id, values);

export const deleteProjectById = (id: string) => ProjectModel.findByIdAndDelete(id);
