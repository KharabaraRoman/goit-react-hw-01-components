import React from 'react'
import { Photo, UserName, Tag, Location, ListItem, Items, Stats } from './Profile.styled'
import PropTypes from 'prop-types';



export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div>
            <div>
                <Photo
                    src={avatar}
                    alt={username}
                />
                <UserName>{username}</UserName>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </div>

            <ListItem>
                <Items>
                    <span>Followers</span>
                    <Stats>{stats.followers}</Stats>
                </Items>
                <Items>
                    <span>Views</span>
                    <Stats>{stats.views}</Stats>
                </Items>
                <Items>
                    <span>Likes</span>
                    <Stats>{stats.likes}</Stats>
                </Items>
            </ListItem>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired
};




