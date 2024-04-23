// ActivityPage.jsx
import { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";

const ActivityPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/activities.json")
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error("Error fetching activities", error));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "40px" }}>Our Activities</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;
