import { useSelector, useDispatch } from "react-redux";
import { selectGists, getGists } from "./DisplayGistSlice";
import Table from '../Common/Table'
import Search from "../Search/Search";
import { prepChildren } from "./helper";
import './DisplayGist.css'

const DisplayGist = () => {
    const dispatch = useDispatch();
    const children = prepChildren(
        useSelector(selectGists)
    );
    return (
        <>
            <Search
                onSearch={(search) => dispatch(getGists(search))}
            />
            <Table
                headers={['URL', 'File Type', 'Forked Users']}
                children={children}
            />
        </>
    )
}

export default DisplayGist;