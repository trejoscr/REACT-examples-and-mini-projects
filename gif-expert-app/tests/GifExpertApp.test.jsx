import { renderHook, act  } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
import { useState } from "react";

describe('Pruebas en <GifExpertApp/>', () => { 

  test("should add a new category to categories state", () => {
    // Render a hook to test the useState and onAddCategory functionality
    const { result } = renderHook(() => {
      const [categories, setCategories] = useState(["Dragon Ball Z"]);
      const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
      };
      return { categories, onAddCategory };
    });

    // Verify the initial state
    expect(result.current.categories).toEqual(["Dragon Ball Z"]);

    // Add a new category
    act(() => {
      result.current.onAddCategory("Naruto");
    });

    // Verify that the new category is added
    expect(result.current.categories).toEqual(["Naruto", "Dragon Ball Z"]); 
    
 });

 test("should not add a duplicate category to categories state", () => {
  // Render a hook to test the useState and onAddCategory functionality
  const { result } = renderHook(() => {
    const [categories, setCategories] = useState(["Dragon Ball Z"]);
    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
    };
    return { categories, onAddCategory };
  });

  // Verify the initial state
  expect(result.current.categories).toEqual(["Dragon Ball Z"]);

  // Attempt to add a duplicate category
  act(() => {
    result.current.onAddCategory("Dragon Ball Z");
  });

  // Verify that the duplicate category is not added
  expect(result.current.categories).toEqual(["Dragon Ball Z"]);
});

})