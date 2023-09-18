
import PropTypes from 'prop-types';
const Links = ({route}) => {
    return (
        <div>
            <li key={route.id}>
                <a href={route.path}>{route.name}</a>
                </li>
            
        </div>
    );
};

Links.propTypes={
    route: PropTypes.object.isRequired
}

export default Links;