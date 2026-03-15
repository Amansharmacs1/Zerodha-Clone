import yup from "yup"

export const userSchema = yup.object({
    username:yup
    .string()
    .trim()
    .min(3,"Username must be atleast of 3 charachters")
    .required(),
    email:yup
    .string()
    .email("The email is not valid")
    .required(),
    password:yup
    .string()
    .min(4,"Password must be alteast 4 character")
})

export const validateUser=(schema)=>{
   return async (req,res,next) => {
        try {
            await schema.validate(req.body)
            next()
        } catch (err) {
            return res.status(400).json({error:err.errors})
        }
    }
}