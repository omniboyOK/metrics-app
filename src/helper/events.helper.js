const eventFabric = ({ project, name, date, params }) => {
  return {
    project: project || "none",
    event: name || "none",
    date: date || new Date(),
    params: params || {},
  };
};

module.exports = {
  eventFabric,
};
