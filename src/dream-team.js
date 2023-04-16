function createDreamTeam(members) {
  const emp = [];

  if (!Array.isArray(members)) {
    return false;
  } else {
    const memberNames = members.filter((name) => typeof name === "string");

    const firstLetters = memberNames.map((name) => {
      const noSpacesName = name.toUpperCase().replaceAll(" ", "");
      emp.push(noSpacesName[0]);
    });

    const res = emp.sort().join("");

    return res;
  }
}

module.exports = {
  createDreamTeam,
};
