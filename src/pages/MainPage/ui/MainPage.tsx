import { ForQ } from "features/ForQ";
import cls from "./MainPage.module.scss"

const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <ForQ/>
        </div>
    );
};

export default MainPage;
