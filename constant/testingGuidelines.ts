export const testingGuidelines = `
Text-based

getByText → Finds element by visible text (throws error if not found)
queryByText → Same as getByText but returns null if not found
findByText → Finds text after async wait (for API/data load)

Test ID

getByTestId → Finds element using data-testid
queryByTestId → Returns null instead of error
findByTestId → Async version of getByTestId

Accessibility (BEST PRACTICE)

getByRole → Finds element by its role (button, heading, textbox)
getByLabelText → Finds input by its label text
getByPlaceholderText → Finds input by placeholder text
getByAltText → Finds image by alt text
getByTitle → Finds element by title attribute

Multiple elements

getAllByText → Finds all elements with same text
queryAllByRole → Finds all matching roles (no error)
findAllByText → Async version for multiple items

Async versions

findBy... → Use when content appears later (API, useEffect)

Rule of thumb (VERY IMPORTANT)

1️⃣ Prefer getByRole
2️⃣ Then getByLabelText
3️⃣ Then getByText
4️⃣ Use getByTestId only as last option
`;
