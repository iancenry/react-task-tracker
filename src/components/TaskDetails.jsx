import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        setError("Task not found");
        navigate("/");
      }

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  }, [params.id, navigate]);

  if (error) {
    return <Navigate to="/" />;
  }

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <h3>{task.day}</h3>
      {/* instead of slash we can use -1 to go  to the previous page */}
      <button className="btn" onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  );
};


export default TaskDetails;
