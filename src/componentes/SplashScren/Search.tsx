import { useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchParam, setSearchParam] = useState({
    text: "",
    enterPressed: false,
  });

  useEffect(() => {
    if (searchParam.enterPressed || searchParam.text === "") {
      onSearch(searchParam.text);
    }
  }, [searchParam, onSearch]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam({ text: e.target.value, enterPressed: false });
  };

  const handleSearchInputKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setSearchParam((prev) => ({ ...prev, enterPressed: true }));
    }
  };

  return (
    <Box width="100%" p={4} borderRadius="md">
      <Input
        placeholder="Search..."
        value={searchParam.text}
        size="lg"
        onChange={handleSearchInputChange}
        onKeyPress={handleSearchInputKeyPress}
        variant="outline"
        borderColor="gray.300"
        _placeholder={{ color: "gray.500" }}
        _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
      />
    </Box>
  );
};

export default SearchInput;
