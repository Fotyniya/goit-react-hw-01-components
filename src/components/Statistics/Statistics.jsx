import PropTypes from 'prop-types';
import {List, ListItem} from './Statistics.styled'

export const Statistics = ({data, title})=> {
    return (
    <section>
        <h2>{title}</h2>
    <List>
        {data.map(data => 
            <ListItem key={data.id}>
                <span class="label">{data.label}</span>
                <span class="percentage">{data.percentage}%</span>
            </ListItem>
            )
        }
    </List>
    </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf({
        data: PropTypes.shape({
            id: PropTypes.string.isRequired, 
            label: PropTypes.string.isRequired, 
            percentage: PropTypes.number.isRequired,  
        }).isRequired
    }).isRequired
}