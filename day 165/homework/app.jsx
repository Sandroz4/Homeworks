import { useForm } from "./hooks/useForm";
import { useToggle } from "./hooks/useToggle";

import ChangeMode from "./components/ChangeMode";
import SearchUser from "./components/SearchUser";
import UserCard from "./components/UserCard";

const App = () => {
    const [data, isError, handleSubmit] = useForm();
    const [isDarkMode, handleToggle] = useToggle();

    return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"} id="body-div">
            <main>
                <ChangeMode toggle={isDarkMode} handleToggle={handleToggle} />
                <SearchUser handleSubmit={handleSubmit} toggle={isDarkMode} isError={isError} />
                <UserCard data={data} toggle={isDarkMode} />
            </main>
        </div>
    );
}

export default App;
