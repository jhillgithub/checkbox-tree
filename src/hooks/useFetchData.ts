/** @NOTE this is a mock for a hook that could
 * use the fetch api to obtain data from a database or api.
 * For now, this is just hardcoded with example data.
 */
export const useFetchData = () => {
  const data = {
    name: "Parent",
    children: [{ name: "Child 1" }, { name: "Child 2", checked: true }],
  };
  return {
    loading: false,
    error: false,
    data,
  };
};
