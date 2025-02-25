import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { updateUserFormField } from "../store/dataSlice";

const UserForm: React.FC = () => {
  const userFormData = useSelector(
    (state: RootState) => state.data.userFormData
  );
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateUserFormField({
        field: e.target.name as keyof typeof userFormData,
        value: e.target.value,
      })
    );
  };

  const handleSave = () => {
    alert("User data saved to Redux store!");
  };

  return (
    <Box p={4}>
      <Heading mb={4}>User Form</Heading>
      <FormControl mb={3}>
        <FormLabel>ID (auto-generated)</FormLabel>
        <Input
          name="id"
          value={userFormData.id}
          readOnly
          placeholder="Auto-generated"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={userFormData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Address</FormLabel>
        <Input
          name="address"
          value={userFormData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={userFormData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Phone</FormLabel>
        <Input
          name="phone"
          value={userFormData.phone}
          onChange={handleChange}
          placeholder="Enter your phone"
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
