import "./App.css";
import { useLazyQuery } from "@apollo/client";
import { RANK_ACTIVITIES } from "./graphql/queries";
import SearchCityForm from "./components/SearchCityForm";
import ActivityList from "./components/ActivityList";

function App() {
  const [getActivities, { data, loading, error }] =
    useLazyQuery(RANK_ACTIVITIES);

  return (
    <div className="container">
      <h1>Search city activities based on weather</h1>
      <SearchCityForm
        onSubmit={(city) => getActivities({ variables: { city } })}
      />

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">Error: {error.message}</p>}
      {data?.rankActivities && <ActivityList data={data.rankActivities} />}
    </div>
  );
}

export default App;
