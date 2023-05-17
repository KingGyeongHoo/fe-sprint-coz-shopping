import Gnb from "../components/gnb"
import { useSelector } from "react-redux"
export default function Bookmark(){
    const bookmark = useSelector(state => state.bookmark)
    return (
        <div>
            <Gnb item={bookmark}></Gnb>
        </div>
    )
}