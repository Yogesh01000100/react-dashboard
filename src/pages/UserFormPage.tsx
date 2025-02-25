import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const UserFormPage: React.FC = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const savedData = { ...userData, id: userData.id || `user-${Date.now()}` };
    localStorage.setItem("userData", JSON.stringify(savedData));
    setUserData(savedData);
    setIsDirty(false);
    alert("User data saved!");
  };

  return (
    <Box p={4}>
      <Heading mb={4}>User Form</Heading>
      <FormControl mb={3}>
        <FormLabel>ID (auto-generated)</FormLabel>
        <Input
          name="id"
          value={userData.id}
          readOnly
          placeholder="Auto-generated"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Address</FormLabel>
        <Input
          name="address"
          value={userData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Phone</FormLabel>
        <Input
          name="phone"
          value={userData.phone}
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

export default UserFormPage;
