const years = [2021, 2022];
const seasons = ["ICC World Test Championship", "Warne-Muralitharan Trophy", "Border-Gavaskar Trophy", "Winter"];
const divisions = ["Division 1", "Division 2", "Division 3", "Division 4"];

const generateData = () => {
  const data = [];

  years.forEach((year) => {
    const yearData = { year, seasons: [] };

    seasons.forEach((season) => {
      const seasonData = { season, divisions: [] };

      divisions.forEach((division) => {
        const teams = Array.from({ length: 5 }, (_, index) => `Team ${index + 1}`);

        const matches = [];
        for (let i = 0; i < teams.length; i++) {
          for (let j = i + 1; j < teams.length; j++) {
            matches.push({
              match: `${teams[i]} vs ${teams[j]}`,
              team1: teams[i],
              team2: teams[j],
            });
          }
        }

        seasonData.divisions.push({
          division,
          teams,
          matches,
        });
      });

      yearData.seasons.push(seasonData);
    });

    data.push(yearData);
  });

  return data;
};

export const matchData = generateData();
