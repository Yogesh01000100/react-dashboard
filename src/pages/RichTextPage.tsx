import { useState, useEffect } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import TextEditor from "../components/TextEditor";
import { useDirtyForm } from "../hooks/useDirtyForm";

const RichTextPage: React.FC = () => {
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("richTextContent");
    if (saved) {
      setContent(saved);
      setSavedContent(saved);
    }
  }, []);

  useEffect(() => {
    if (content !== savedContent) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
  }, [content, savedContent]);

  useDirtyForm(isDirty);

  const handleSave = () => {
    localStorage.setItem("richTextContent", content);
    setSavedContent(content);
    alert("Content saved!");
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="center"
      flexWrap="wrap"
      p={4}
    >
      <Box
        p={4}
        border="1px solid black"
        borderRadius="8px"
        boxShadow="lg"
        bg="gray.50"
      >
        <TextEditor value={content} onChange={setContent} />
        <Button
          mt={4}
          width="100%"
          maxW={{ base: "30%", md: "100px" }}
          colorScheme="blue"
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default RichTextPage;
