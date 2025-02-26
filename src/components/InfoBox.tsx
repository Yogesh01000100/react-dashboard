import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useDirtyForm } from "../hooks/useDirtyForm";

const InfoBox: React.FC = () => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("info");
    if (saved) {
      const parsed = JSON.parse(saved);
      setAddress(parsed.address || "");
      setEmail(parsed.email || "");
      setPhone(parsed.phone || "");
    }
  }, []);

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setIsDirty(true);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsDirty(true);
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setIsDirty(true);
  };

  useDirtyForm(isDirty);

  const handleSaveContactData = () => {
    const data = { address, email, phone };
    localStorage.setItem("info", JSON.stringify(data));
    setIsDirty(false);
    alert("Contact data saved!");
  };

  return (
    <Box>
      <Heading size="md" mb={4}>
        Additional Info
      </Heading>

      <FormControl mb={4}>
        <FormLabel>Address</FormLabel>
        <Input
          value={address}
          onChange={handleChangeAddress}
          placeholder="Enter address"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={handleChangeEmail}
          placeholder="Enter email"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Phone</FormLabel>
        <Input
          value={phone}
          onChange={handleChangePhone}
          placeholder="Enter phone"
        />
      </FormControl>

      <Button colorScheme="blue" onClick={handleSaveContactData}>
        Save
      </Button>
    </Box>
  );
};

export default InfoBox;
