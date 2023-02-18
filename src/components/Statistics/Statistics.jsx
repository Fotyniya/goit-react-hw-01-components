import PropTypes from 'prop-types';

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

Statistics.propTypes = {
    data: PropTypes.arrayOf({
        data: PropTypes.shape({
            id: PropTypes.string.isRequired, 
            label: PropTypes.string.isRequired, 
            percentage: PropTypes.number.isRequired,  
        }).isRequired
    }).isRequired
}