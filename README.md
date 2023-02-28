# Task Tracker
- This is a task tracker built With react, the backend is using json server which provides a simple REST database to test and play around with the application.

## Quick Setup
1. Fork then clone the project into local machine 🍴
1. run 'npm install' in the root folder to install all the necessary packages 👩‍💻
1. Happy coding 💻

* Packages used: json-server, react-icons, react-router-dom.

**NB**
1. Use of react router to render multiple views and also rendering multiple components in react router. 
```jsx
                {/*Rendering multiple views*/}
                <Routes>
                  {/*Rendering multiple components on one route*/}
                  <Route
                    path="/"
                    element={
                      <>
                        {/* if true show the AddTask else do nothing && if there are tasks show Tasks Components */}
                        {showAddTask && <AddTask onAdd={addTask} />}
                        {tasks.length > 0 ? (
                          <Tasks
                            tasks={tasks}
                            onDelete={deleteTask}
                            onToggle={toggleReminder}
                          />
                        ) : (
                          'No Tasks Available'
                        )}
                      </>
                    }
                  />
                  <Route path="/about" element={<About />} />
                  {/* param called id in url */}
                  <Route path="/task/:id" element={<TaskDetails />} />
                </Routes>
```

1. Use of different react-router-dom functionalities such as Router, Route, Routes, Link (used in place of anchor tags), useParams (allows us to get URL parameters), and useNavigate (similar to Navigate; used to change current location).
        ```jsx
                {/*get the URL params passed in the Link component*/}
                const params = useParams();

                {/*Go to the '/' route; useNavigate is preferred*/}
                const navigate = useNavigate();
                navigate("/");

                return <Navigate to="/" />
        ```

1. Use of defaultProps to define a placeholder for a prop is it isn't provided.
        ```jsx
                Header.defaultProps = {
                    title: "Default title if the title property isn't given"

                };
        ```

1. Use of proptypes to make code more robust to catch errors in data types.
        ```jsx
                Header.propTypes = {
                    title: PropTypes.string.isRequired,
                }

                Buttons.propTypes ={
                    onshowAddTask:PropTypes.func.isRequired
        }

        ```


**TODO**
- Add a reminder through twilio messages.
- Connect to firebase or mongo DB.

