import React from "react";
import PropTypes from "prop-types";
import { Title, StatList, Item, StatsLabel, StatsPercentage } from './Statistics.styled'
import { getRandomHexColor } from './RandomColor'



export const Statistics = ({ title, stats }) => {
    return (
        <section>
            <div>
                {title && <Title>{title}</Title>}
                {stats && (
                    <StatList>
                        {stats.map((stat) => (
                            <Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                                <StatsLabel>{stat.label}</StatsLabel>
                                <StatsPercentage>{stat.percentage}%</StatsPercentage>
                            </Item>
                        ))}
                    </StatList>
                )}
            </div>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};



