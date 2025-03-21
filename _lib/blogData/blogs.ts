import { angular } from "./angularBlog";
import { react } from "./reactBlog";
import { BlogQuestionItem } from "./types";
import { typescript } from "./typescriptBlog";

export const blogs: { [key: string]: BlogQuestionItem[] } = {
    typescript,
    react,
    angular,
};
