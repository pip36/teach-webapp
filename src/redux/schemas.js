import { schema } from "normalizr";

const registerSchema = new schema.Entity("registers");
const registerListSchema = [registerSchema];

export { registerSchema, registerListSchema };
