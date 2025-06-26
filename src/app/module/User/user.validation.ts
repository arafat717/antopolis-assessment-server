import { z } from "zod";

export const UserValidationSchema = z.object({
  userId: z.number().min(1, { message: "User ID must be a positive number." }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
  fullName: z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
  }),
  age: z.number().min(0, { message: "Age must be a non-negative number." }),
  email: z.string().email({ message: "Invalid email address." }),
  isActive: z.boolean(),
  hobbies: z
    .array(z.string())
    .nonempty({ message: "Hobbies must contain at least one item." }),
  address: z.object({
    street: z.string().min(1, { message: "Street is required." }),
    city: z.string().min(1, { message: "City is required." }),
    country: z.string().min(1, { message: "Country is required." }),
  }),
  orders: z.array(
    z.object({
      productName: z.string().min(1, { message: "Product name is required." }),
      price: z
        .number()
        .min(0, { message: "Price must be a non-negative number." }),
      quantity: z.number().min(1, { message: "Quantity must be at least 1." }),
    })
  ),
});
