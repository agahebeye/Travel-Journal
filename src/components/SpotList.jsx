import { Card } from "./Card";
import { spots } from "../data";

export function SpotList() {
  const spotCards = spots.map((spot) => {
    return <Card spot={spot} />;
  });

  return <section className="spot-list">{spotCards}</section>;
}
