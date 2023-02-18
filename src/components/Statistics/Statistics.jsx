export const Statistics = ({data})=> {
    return (<ul class="stat-list">
        {data.map(data => 
            <li key={data.id}>
                <span class="label">{data.label}</span>
                <span class="percentage">{data.percentage}%</span>
            </li>
            )
        }
    </ul>)
}