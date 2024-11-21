"use client";
import React, { useState } from "react";
import { matchData } from "@/db/matchdb";
const Match = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  // Filter seasons based on selected year
  const seasons = selectedYear
    ? matchData.find((y) => y.year === parseInt(selectedYear))?.seasons || []
    : [];

  // Filter divisions based on selected season
  const divisions = selectedSeason
    ? seasons.find((s) => s.season === selectedSeason)?.divisions || []
    : [];

  // Filter teams based on selected division
  const teams = selectedDivision
    ? divisions.find((d) => d.division === selectedDivision)?.teams || []
    : [];

  // Filter matches for the selected team
  const matches = selectedDivision
    ? divisions.find((d) => d.division === selectedDivision)?.matches || []
    : [];

  // Render filtered matches for the selected team
  const filteredMatches = selectedTeam
    ? matches.filter(
        (m) => m.team1 === selectedTeam || m.team2 === selectedTeam
      )
    : matches;

  return (
    <section className="section_top">
      <div className="container">
        <h1 className="title text-blue rocket text-center">
          Team Match Details
        </h1>
        <div className="inner-margin">
          <div className="dropdown-container">
            {/* Dropdown for Year */}
            <select
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                setSelectedSeason("");
                setSelectedDivision("");
                setSelectedTeam("");
              }}
            >
              <option value="">Select Year</option>
              {matchData.map((year) => (
                <option key={year.year} value={year.year}>
                  {year.year}
                </option>
              ))}
            </select>
            {/* Dropdown for Season */}
            <select
              value={selectedSeason}
              onChange={(e) => {
                setSelectedSeason(e.target.value);
                setSelectedDivision("");
                setSelectedTeam("");
              }}
              disabled={!selectedYear}
            >
              <option value="">Select Season</option>
              {seasons.map((season) => (
                <option key={season.season} value={season.season}>
                  {season.season}
                </option>
              ))}
            </select>
            {/* Dropdown for Division */}
            <select
              value={selectedDivision}
              onChange={(e) => {
                setSelectedDivision(e.target.value);
                setSelectedTeam("");
              }}
              disabled={!selectedSeason}
            >
              <option value="">Select Division</option>
              {divisions.map((division) => (
                <option key={division.division} value={division.division}>
                  {division.division}
                </option>
              ))}
            </select>
            {/* Dropdown for Team */}
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              disabled={!selectedDivision}
            >
              <option value="">Select Team</option>
              {teams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Display Results */}
        {filteredMatches.length > 0 && (
          <div className="inner-margin">
            <h2 className="title text-blue rocket">Matches Played</h2>
            {filteredMatches.length > 0 ? (
              <ul className="match-list">
                {filteredMatches.map((match, index) => (
                  <li key={index} className="matchitem">{match.match}</li>
                ))}
              </ul>
            ) : (
              <p>No matches available</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Match;
