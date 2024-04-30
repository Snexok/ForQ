import cls from "./ForQ.module.scss"
import { FC } from "react";
import { Button } from "shared/ui/Button";
import { TextArea } from "shared/ui/TextArea";

export const ForQ:FC = () => {
    return <div className={cls.qBackGround}>
        <div className={cls.qContainer}>
            <TextArea className={cls.qInput}/>
            <Button className={cls.qSubmit}>Submit</Button>
        </div>
    </div>
}