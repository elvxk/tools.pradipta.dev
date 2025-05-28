const getData = async () => {
  const res = await fetch("https://api.pradipta.dev/projects", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();

  const filteredData = data.filter((project) => project.is_tool);

  return filteredData;
};

export default getData;
