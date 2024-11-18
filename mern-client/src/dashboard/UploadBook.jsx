import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Children's",
    "Biographies",
    "Cookbooks",
    "Mystery",
    "Thriller",
    "Science Fiction",
    "Horror",
    "Adventure",
    "Self-Help",
    "Travel",
    "History",
    "Business",
    "Sports",
    "Politics",
    "Religion",
    "Technology",
    "Health",
    "Cooking",
    "Gardening",
    "Art",
    "Photography",
    "Programming",
    "Fantasy",
    "Bibliography",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Children Books",
    "Art and Design",
    "Writing",
    "Language",
    "Literature",
    "Music",
    "Movies",
    "Television",
    "Games",
    "Comics",
    "Science",
    "Mathematics",
    "Psychology",
    "Sociology",
    "Economics",
    "Geography",
    "Anthropology"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* For first row */}
        <div className="flex gap-8">
          {/* Book Title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>

          {/* Author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-8">
          {/* Image URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book image URL"
              required
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
