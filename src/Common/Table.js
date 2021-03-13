import './Table.css';

const Table = ({ headers = [], children = [] }) => {
    return (
        <table>
            <thead>
                <tr>
                    {
                        headers.map((header, i) => {
                            return <th key={i}>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {children.length > 0 ? children : <tr><td id='noData' colSpan={3}>No data is available</td></tr>}
            </tbody>
        </table>
    )
}

export default Table;