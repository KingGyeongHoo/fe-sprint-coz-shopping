import Gnb from "../components/gnb"
import { useSelector } from "react-redux"
export default function List(){
    const item = useSelector(state => state.item)
    return (
        <div>
            <Gnb item={item}></Gnb>
        </div>
    )
}