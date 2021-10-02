import React from 'react'

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            {
                [1, 2, 3, 4, 5].map((x) => (
                    <span key={x}>
                        <i style={{ color }}
                            className={
                                value >= x
                                    ? 'fas fa-star'
                                    :
                                    value >= ((x - 1) + 0.5)
                                        ? 'fas fa-star-half-alt'
                                        :
                                        'far fa-star'}>
                        </i>
                    </span>
                ))
            }
            <span>{text && text}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825',
}

export default Rating
