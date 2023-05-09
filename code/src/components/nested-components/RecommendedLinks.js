import { Link } from 'react-router-dom';
import {recommendations} from '../../utils/data';
import contactImage from '../../utils/images/contact.png';

const RecommendedLinks = () => {
    return (
        (<img style={{ width: '40%' }} src={contactImage}/>)
    )
}

// return (<Recommendation 
//     key={i}
//     imageSource={recommendation.imageSource}
//     title={recommendation.title}
//     link={recommendation.link}
// />)

const Recommendation = ({imageSource, title, link}) => {
    return(
        <Link 
            to={link}
            className="recommendation" 
            style={{ backgroundImage: `url('${imageSource}')`}}
        >
            <h3>{title}</h3>
            
            <div className="overlay"></div>
        </Link>
    )
}

export default RecommendedLinks;