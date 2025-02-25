import { useState, useEffect } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import RichTextEditor from "../components/RichTextEditor";

const RichTextPage: React.FC = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("richTextContent", content);
    alert("Content saved!");
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Rich Text Editor</Heading>
      <RichTextEditor value={content} onChange={setContent} />
      <Button mt={4} colorScheme="blue" onClick={handleSave}>
        Save Content
      </Button>
    </Box>
  );
};

export default RichTextPage;
