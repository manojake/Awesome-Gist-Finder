import { AiFillTag } from 'react-icons/ai';

export const prepChildren = (data) => {
    return data.map((row) => {
        return <tr key={row.id}>{buildCell(row)}</tr>
    })
}

const buildCell = (row) => {
    let cellElements = []
    for (let prop in columns) {
        switch (columns[prop].ele) {
            case 'link':
                cellElements.push(
                    <td key={prop}>
                        <a href={row[prop]} target="_blank" rel="noreferrer">{columns[prop].title}</a>
                    </td>)
                break;
            case 'tags':
                cellElements.push(<td key={prop}>{
                    row[prop].map((item, i) => {
                        return (
                            <label key={i}>{item}
                                <AiFillTag></AiFillTag>
                            </label>)
                    })}</td>)
                break;
            case 'linkImg':
                cellElements.push(<td key={prop}>{
                    row[prop].map((item, i) => {
                        return (
                            <a key={i} href={item[columns[prop].link_url]} target="_blank" rel="noreferrer">
                                <img alt={'Avatar'} src={item[columns[prop].imgUrl]} />
                            </a>)
                    })} </td>)
                    break;
            default:
                cellElements.push(null)
        }
    }
    return cellElements
}

export const columns = {
    html_url:
        { ele: 'link', title: 'Go to Gist' },
    languages:
        { ele: 'tags' },
    forkedUsers: {
        ele: 'linkImg',
        link_url: 'html_url',
        imgUrl: 'avatar_url'
    }
}