import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { motion } from "framer-motion";
import './directory.styles.scss'
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Technology',
                    imageUrl: 'https://www.league.org/sites/default/files/Student%20Technology%20Awards%20Image_0.jpg',
                    id: 1
                },
                {
                    title: 'Finance/Accounting',
                    imageUrl: 'https://alluvion.com/wp-content/uploads/2018/05/accounting-manager-adaptability.jpg',
                    id: 2
                },
                {
                    title: 'Education',
                    imageUrl: 'https://intellectualvirtues.org/wp-content/uploads/2015/12/Professor-teaching-class.jpg',
                    id: 3
                },
                {
                    title: 'Designing',
                    imageUrl: 'https://www.bridgeport.edu/sites/default/files/styles/hero/public/2018-07/Graphic%20Design%20B.F.A.%20-%20Hero.jpg?itok=qu3JNFbi',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Architecture',
                    imageUrl: 'https://static.businessworld.in/article/article_extra_large_image/1576227051_RIJOAs_WAF_2019_Shortlist_social_banner_1_.jpg',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }

    render() {
        return(
            <motion.div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size  }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
                }
            </motion.div>
        )
    }
}

export default Directory;