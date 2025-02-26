import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useDirtyForm } from "../hooks/useDirtyForm";

const UserDataBox: React.FC = () => {
  const [jsonObject, setJsonObject] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  useDirtyForm(isDirty);

  useEffect(() => {
    const saved = localStorage.getItem("userDataBox");
    if (saved) {
      const parsed = JSON.parse(saved);
      setJsonObject(parsed.jsonObject || "");
      setName(parsed.name || "");
      setId(parsed.id || "");
    }
  }, []);

  const handleChangeJson = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonObject(e.target.value);
    setIsDirty(true);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsDirty(true);
  };
  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIsDirty(true);
  };

  const handleSaveJson = () => {
    const data = { jsonObject, name, id };
    localStorage.setItem("userDataBox", JSON.stringify(data));
    setIsDirty(false);
    alert("JSON data saved!");
  };

  const handleSaveUserData = () => {
    const finalId = id || `user-${Date.now()}`;
    const data = { jsonObject, name, id: finalId };
    localStorage.setItem("userDataBox", JSON.stringify(data));
    setId(finalId);
    setIsDirty(false);
    alert("User data saved!");
  };

  return (
    <Box>
      <Heading size="md" mb={4}>
        User Data (JSON)
      </Heading>

      <FormControl mb={4}>
        <FormLabel>JSON Object</FormLabel>
        <Textarea
          value={jsonObject}
          onChange={handleChangeJson}
          placeholder='{"key": "value"}'
          rows={6}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>ID (Auto-generated)</FormLabel>
        <Input
          value={id}
          onChange={handleChangeId}
          placeholder="Auto-generated ID"
          isReadOnly={false}
        />
      </FormControl>

      <Button colorScheme="blue" mr={2} onClick={handleSaveJson}>
        Save JSON
      </Button>
      <Button colorScheme="green" onClick={handleSaveUserData}>
        Save User Data
      </Button>
    </Box>
  );
};

export default UserDataBox;
