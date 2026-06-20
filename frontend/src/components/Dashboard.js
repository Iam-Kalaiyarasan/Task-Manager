function Dashboard({
  pendingCount,
  doneCount
}) {

  return (

    <div className="dashboard">

      <div className="card">

        <h3>
          Pending
        </h3>

        <p>
          {pendingCount}
        </p>

      </div>

      <div className="card">

        <h3>
          Done
        </h3>

        <p>
          {doneCount}
        </p>

      </div>

    </div>

  );
}

export default Dashboard;