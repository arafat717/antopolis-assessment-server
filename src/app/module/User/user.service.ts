import { TUser } from "./user.interface";
import { User } from "./user.model";
import { UserValidationSchema } from "./user.validation";

const createUserIntoBd = async (userData: TUser) => {
  const parseData = UserValidationSchema.parse(userData);
  const user = new User(parseData);
  const result = await user.save();
  return result;
};

const getAllUserFromDb = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDb = async (userId: number) => {
  const result = await User.findOne({ userId });
  return result;
};

const updateDataIntoDb = async (userId: number, updatedata: Partial<TUser>) => {
  const parseData = UserValidationSchema.partial().parse(updatedata);
  const user = await User.findOne({ userId });
  if (!user) {
    throw new Error(`User not found`);
  }
  const result = await User.findOneAndUpdate(
    { userId: userId },
    { $set: parseData },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

export const UserService = {
  createUserIntoBd,
  getAllUserFromDb,
  getSingleUserFromDb,
  updateDataIntoDb,
};
