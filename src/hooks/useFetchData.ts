/** @NOTE this is a mock for a hook that could
 * use the fetch api to obtain data from a database or api.
 * For now, this is just hardcoded with example data.
 */
export const useFetchData = () => {
  const data = {
    id: "1",
    name: "Parent",
    checked: false,
    children: [
      {
        id: "2",
        name: "Child 1",
        checked: false,
        children: [
          { id: "3", name: "GrandChild 1", checked: false },
          { id: "4", name: "GrandChild 2", checked: false },
        ],
      },
      { id: "5", name: "Child 2", checked: true },
    ],
  };
  return {
    loading: false,
    error: false,
    data,
  };
};
