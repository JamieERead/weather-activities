import { render, screen } from "@testing-library/react";
import ActivityList from "../ActivityList";

describe("ActivityList", () => {
  it("displays activity scores with labels", () => {
    const mockData = [
      { activity: "Skiing", score: 0.85 },
      { activity: "Indoor sightseeing", score: 0.35 },
    ];

    render(<ActivityList data={mockData} />);

    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("Skiing");
    expect(items[0]).toHaveTextContent("0.85");
    expect(items[0]).toHaveTextContent("Good");

    expect(items[1]).toHaveTextContent("Indoor sightseeing");
    expect(items[1]).toHaveTextContent("0.35");
    expect(items[1]).toHaveTextContent("Bad");
  });
});
